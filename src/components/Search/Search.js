import React, { useState, useContext, useRef, useEffect } from 'react';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import classes from './Search.module.css';
import '../../assets/fonts/the-movies.svg';
import imgNotAvailable from '../../assets/images/image-not-available.jpg';
import { appContext } from '../../context/AppContext';

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

                Axios.get(`https://api.themoviedb.org/3/search/multi?api_key=6095dab7d845691ab95df77d0a908452&language=${language}&query=${query}&page=1&include_adult=false&region=${region}`)
                    .then(response => {
                        if (response.status === 200) {
                            console.log(response.data.results);
                            setSearchResults(response.data.results);
                        } else {
                            throw new Error('Error while fetching search data')
                        }
                    }).catch(err => {
                        throw new Error(err);
                    })
            } else if (inputRef.current.value.trim() === '') {
                setSearchResults(null);
            }
        }, 300);

        return () => clearTimeout(myTimeout);
    }, [inputValue, app.language, inputRef]);

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

    const executeSearch = () => {
        history.push(`/search?query=${inputRef.current.value}`);
    }

    // Render
    return (
        <div className={classes.container}>
            <div className={classes.search__container}>
                <input type="text" value={inputValue} ref={inputRef} onKeyPress={e => e.key === 'Enter' && executeSearch()} onChange={e => setInputValue(e.target.value)} onBlur={onBlurHandler} placeholder="Search..." />
                <button type="submit" onClick={executeSearch}>{app.language === 'en' ? 'Search' : 'Buscar'}</button>
            </div>
            <section className={classes.search__results}>
                {results}
            </section>
        </div>
    )
}

export default Search;