import React from 'react';

import '../DetailsCardType.css';
import Tags from '../../Tags/Tags';
import Rate from '../../Rate/Rate';

const tvDetails = (props) => {
  return (
    <div className="DetailsCard__body">
      <div className="DetailsCard__body__main">
        <img
          className="DetailsCard__body__main__desktop_poster"
          src={"https://image.tmdb.org/t/p/w342" + props.data.poster_path}
          alt={props.data.name} />
        <h2 className="DetailsCard__body__main_title">{props.data.name}</h2>
        <Rate rate={props.data.vote_average} />
        <div className="DetailsCard__body__runtime-release">
          <span className="DetailsCard__body__runtime">
            <span className="icon-clock"></span>
            <span>
              {props.data.episode_run_time[0] ? props.data.episode_run_time[0] : '0'} min
            </span>
          </span>
          <span className="DetailsCard__body__release">
            <span className="icon-calendar"></span>
            <span>
              {props.data.first_air_date}
            </span>
          </span>
        </div>
        <Tags tags={props.data.genres}/>
        <div className="DetailsCard__body__main_secondary">
          <p>Last air date: <span>{props.data.last_air_date}</span></p>
          <p>Seasons: <span>{props.data.number_of_seasons}</span></p>
          <p>Episodes: <span>{props.data.number_of_episodes}</span></p>
          <p>Country: <span>{props.data.origin_country[0]}</span></p>
          <p>Status: <span>{props.data.status}</span></p>
        </div>
      </div>
      <div className="DetailsCard__body__overview">
        <p className="DetailsCard__body__header">
          Overview
        </p>
        <p className="DetailsCard__body__overview_p" onClick={() => {
          document.querySelector(".DetailsCard__body__overview_p").classList.toggle("ShowFullBioOverview");
        }}>
          {props.data.overview}
        </p>
      </div>
      <div className="DetailsCard__body__cast">
        <p className="DetailsCard__body__header">Cast {props.cast ? `(${props.cast.length})` : null}</p>
        <div className="DetailsCard__body__cast__list">
          {props.cast ? props.cast : "No Cast Available"}
        </div>
      </div>
      <div className="DetailsCard__body__trailer">
        <p className="DetailsCard__body__header">Trailer</p>
        {props.trailerKey ? (
          <iframe
            className="iframeTrailer"
            src={`https://www.youtube-nocookie.com/embed/${props.trailerKey}`}
            frameBorder="0"
            title={props.data.title + "'s trailer"}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        )
        : <div className="iframeTrailer"><span>No Trailer available</span></div>
      }
      </div>
      <div className="DetailsCard__body__recommend">
        <p className="DetailsCard__body__header">Recommended {this.props.recommendations ? `(${this.props.recommendations.length})` : null}</p>
        <div className="DetailsCard__body__recommend__list">
          {this.props.recommendations ? this.props.recommendations : "No Recommendations Available"}
        </div>
      </div>
      <div className="DetailsCard__body__similar">
        <p className="DetailsCard__body__header">Similar {this.props.similar ? `(${this.props.similar.length})` : null}</p>
        <div className="DetailsCard__body__similar__list">
          {this.props.similar ? this.props.similar : "No Similarities Available"}
        </div>
      </div>
    </div>
  )
}

export default tvDetails;
