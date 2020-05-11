import React from 'react';
import Rate from '../Rate/Rate';
import Tags from '../Tags/Tags';

import '../../assets/styles-icons.css'
import classes from './BasicInfo.module.css';

const BasicInfo = props => {
    let info;
    let imdb = (
        <a href={'https://imdb.com/name/' + props.data.external_ids.imdb_id} className={[classes.social, classes.imdb].join(' ')} title="Visit IMDb" target="_blank" rel="noopener noreferrer">
            <i className="icon-ticket"></i>
            {props.language === 'en' ? 'IMDb page' : 'Página IMDb'}
        </a>
    );
    let instagram = (
        <a href={'https://instagram.com/' + props.data.external_ids.instagram_id} className={[classes.social, classes.instagram].join(' ')} title="Visit Instagram" target="_blank" rel="noopener noreferrer">
            <i className="icon-instagram"></i>
            {'@' + props.data.external_ids.instagram_id}
        </a>
    );
    let facebook = (
        <a href={'https://facebook.com/' + props.data.external_ids.facebook_id} className={[classes.social, classes.facebook].join(' ')} title="Visit Facebook" target="_blank" rel="noopener noreferrer">
            <i className="icon-social-facebook"></i>
            {props.data.biography ? 'Profile' : 'Page'}
        </a>
    );
    let twitter = (
        <a href={'https://twitter.com/' + props.data.external_ids.twitter_id} className={[classes.social, classes.twitter].join(' ')} title="Visit Twitter" target="_blank" rel="noopener noreferrer">
            <i className="icon-social-twitter"></i>
            {'@' + props.data.external_ids.twitter_id}
        </a>
    );
    let webpage = (
        <a href={props.data.homepage} className={[classes.social, classes.webpage].join(' ')} title="Visit webpage" target="_blank" rel="noopener noreferrer">
            <i className="icon-globe"></i>
            {props.language === 'en' ? 'Webpage' : 'Página web'}
        </a>
    );


    // It's a person
    if (props.data.biography) {
        info = (
            <aside className={classes.basic}>
                <div className={classes.poster__wrapper}>
                    <img src={"https://image.tmdb.org/t/p/w342" + props.data.profile_path} alt={'Poster of ' + props.data.name} />
                </div>
                <h2>{props.data.name}</h2>
                <div className={classes.person__details}>
                    <p title="Birthday">
                        <i className="icon-birthday-cake"></i>
                        {props.data.birthday}
                    </p>
                    {props.data.deathday &&
                        <p title="Deathday">
                            <i className="icon-danger-death-delete-destroy-skull-stream"></i>
                            {props.data.deathday}
                        </p>}
                    {props.data.place_of_birth &&
                        <p title="Place of birth">
                            <i className="icon-map-marker"></i>
                            {props.data.place_of_birth}
                        </p>}
                    {props.data.homepage && webpage}
                    {props.data.external_ids.imdb_id && imdb}
                    {props.data.external_ids.instagram_id && instagram}
                    {props.data.external_ids.twitter_id && twitter}
                    {props.data.external_ids.facebook_id && facebook}
                </div>
            </aside>
        )

        // It's a movie or tv show
    } else {
        info = (
            <aside className={classes.basic}>
                <div className={classes.poster__wrapper}>
                    <img src={"https://image.tmdb.org/t/p/w342" + props.data.poster_path} alt={'Poster of ' + props.data.title || props.data.name} />
                </div>
                <h2>{props.data.title || props.data.name}</h2>
                <Rate rate={props.data.vote_average} />
                <div className={classes.runtime__release}>
                    <div>
                        <i className="icon-clock"></i>
                        <span>{props.data.runtime || props.data.episode_run_time} min</span>
                    </div>
                    <div>
                        <i className="icon-calendar"></i>
                        <span>{props.data.release_date || props.data.first_air_date}</span>
                    </div>
                </div>
                <Tags tags={props.data.genres} mode={props.mode} />
                <div className={classes.primary__details}>
                    {props.data.homepage && webpage}
                    {props.data.external_ids.imdb_id && imdb}
                    {props.data.external_ids.instagram_id && instagram}
                    {props.data.external_ids.twitter_id && twitter}
                    {props.data.external_ids.facebook_id && facebook}
                </div>
            </aside>
        )

    }

    return info;
}

export default BasicInfo;