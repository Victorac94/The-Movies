import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';

import ThumbnailCarousel from '../ThumbnailCarousel/ThumbnailCarousel';
import classes from './Details.module.css';
import BasicInfo from '../../components/BasicInfo/BasicInfo';
import Loading from '../../components/Loading/Loading';
import { appContext } from '../../context/AppContext';
import * as dataActions from '../../store/actions/fetchDataAction';

const Details = props => {
    const [details, setDetails] = useState(null);
    const { mode, id } = useParams();
    const location = useLocation();
    const app = useContext(appContext);

    // Load movie/tv-show/people information depending on URL
    useEffect(() => {
        setDetails(null);

        let language = app.language === 'en' ? 'en-US' : 'es-ES';
        let url = `https://api.themoviedb.org/3/${mode}/${id}?api_key=6095dab7d845691ab95df77d0a908452&language=${language}&append_to_response=videos,credits,recommendations,similar,external_ids`;

        props.setHeaderTitle('');
        props.fetchDetailsData(url);

    }, [location.pathname, mode, id, app.language]);

    // On new details render them
    useEffect(() => {
        setDetails(props.dataReducer.detailsData);

    }, [props.dataReducer.detailsData]);

    // On mounting the component set details state to null
    useEffect(() => {
        setDetails(null);
    }, []);

    return mode && details ? (
        <main className={classes.container}>
            {mode === 'person' ? null
                : (<div className={classes.background__poster} style={{ 'backgroundImage': `url("https://image.tmdb.org/t/p/w1280${details.backdrop_path}")` }}></div>)
            }

            <BasicInfo data={details} mode={mode} language={app.language} />

            <main className={classes.main}>
                <div className={classes.overview}>
                    <h3>{app.language === 'en' ? 'Overview' : 'Resumen'}</h3>
                    <p>{mode === 'person' ? details.biography : details.overview}</p>
                </div>
                {mode === 'person' ?
                    <ThumbnailCarousel data={details.credits.cast} title={app.language === 'en' ? 'Known for' : 'Conocido por'} isPeople={false} />
                    : <ThumbnailCarousel data={details.credits.cast} title="Cast" isPeople={true} />}
                {mode === 'person' ? null
                    : (<div className={classes.trailer}>
                        <h3>Trailer</h3>
                        {details.videos?.results && details.videos.results[0] ? (
                            <iframe
                                className={classes.iframe}
                                width="300"
                                height="200"
                                src={`https://www.youtube-nocookie.com/embed/${details.videos.results[0].key}`}
                                frameBorder="0"
                                title={details.title + "'s trailer"}
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        )
                            : <div className="iframeTrailer">
                                {app.language === 'en' ? 'No Trailer available' : 'Tráiler no disponible'}
                            </div>
                        }
                    </div>)
                }
                {mode !== 'person' && details.recommendations?.results &&
                    <ThumbnailCarousel data={details.recommendations.results} title={app.language === 'en' ? 'Recommended' : 'Recomendado'} isPeople={false} />
                }
                {mode !== 'person' && details.similar?.results &&
                    <ThumbnailCarousel data={details.similar.results} title="Similar" isPeople={false} />
                }
            </main>
        </main>
    )
        : <Loading />
}

const mapStateToProps = state => {
    return {
        dataReducer: state.dataReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDetailsData: url => dispatch(dataActions.fetchDetailsData(url)),
        setHeaderTitle: title => dispatch(dataActions.setHeaderTitle(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);