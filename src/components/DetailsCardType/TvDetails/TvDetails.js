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
        : <div className="iframeTrailer">No Trailer available</div>
      }
      </div>
    </div>
  )
}

export default tvDetails;
