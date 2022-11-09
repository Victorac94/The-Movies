import React, { useState, useContext, useRef, useEffect } from 'react';
// import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Search.module.css';
import '../../assets/fonts/the-movies.svg';
import imgNotAvailable from '../../assets/images/image-not-available.jpg';
import { appContext } from '../../context/AppContext';
import * as dataActions from '../../store/actions/fetchDataAction';

const Search = props => {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const inputRef = useRef();
    const app = useContext(appContext);
    const history = useHistory();

    // Make search request
    useEffect(() => {
        // Only send request after 300ms after last user's key stroke
        const myTimeout = setTimeout(() => {
            if (inputValue === inputRef.current.value && inputRef.current.value.trim() !== '') {
                const language = app.language === 'en' ? 'en-US' : 'es-ES';
                const region = app.language === 'en' ? 'US' : 'ES';
                const query = encodeURIComponent(inputValue);
                const url = `https://api.themoviedb.org/3/search/multi?api_key=6095dab7d845691ab95df77d0a908452&language=${language}&query=${query}&page=1&include_adult=false&region=${region}`

                // Fetch search data
                props.fetchSearchData(url);

            } else if (inputRef.current.value.trim() === '') {
                setSearchResults(null);
            }
        }, 300);

        return () => clearTimeout(myTimeout);
    }, [inputValue, app.language, inputRef]);

    // On new search data
    useEffect(() => {
        setSearchResults(props.dataReducer.searchData);

    }, [props.dataReducer.searchData]);

    // Build results list
    let results = searchResults ?
        searchResults.map((el, i) => {
            const picture = el.poster_path || el.profile_path;

            return <Link to={`/${el.media_type}/${el.id}/details`} key={el.id}>
                <article className={[classes.item, classes[el.media_type]].join(' ')}>
                    <div className={classes.item__image__wrapper}>
                        <img src={picture ? 'https://image.tmdb.org/t/p/w185' + picture : imgNotAvailable} alt={el.id} />
                    </div>
                    <h3>{el.name || el.title}</h3>
                    <span className={classes.media__type}>{el.media_type}</span>
                    {el.media_type !== 'person' ? <span className={classes.rate}><i className="icon-star"></i>{el.vote_average}</span>
                        : null}
                </article>
            </Link>
        }
        ) : null;

    const onBlurHandler = e => {
        // We set a timeout so that there's time for the selected item 
        // in the results list to trigger the link to the new page.
        // Same for the search button.
        setTimeout(() => {
            setSearchResults(null);
        }, 300);
    }

    const goToSearchUrl = () => {
        const value = inputRef.current.value;

        if (value.trim() === '') return;

        history.push(`/search?query=${value}`);

        // Hide results list dropdown
        setSearchResults(null);
    }

    // Render
    return (
        <div className={classes.container}>
            <div className={classes.search__container}>
                <input type="text" value={inputValue} ref={inputRef} onKeyPress={e => e.key === 'Enter' && goToSearchUrl()} onChange={e => setInputValue(e.target.value)} onBlur={onBlurHandler} placeholder={app.language === 'en' ? 'Search...' : 'Buscar...'} />
                <button type="submit" onClick={goToSearchUrl}>{app.language === 'en' ? 'Search' : 'Buscar'}</button>
            </div>
            <section className={classes.search__results}>
                {results}
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dataReducer: state.dataReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchData: url => dispatch(dataActions.fetchSearchData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);