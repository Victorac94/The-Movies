import React from 'react';

import './TvDetails.css';
import Tags from '../../Tags/Tags';
import Rate from '../../Rate/Rate';

const tvDetails = (props) => {
  return (
    <div className="DetailsCard__body">
      <div className="DetailsCard__body__main">
        <h2 className="DetailsCard__body__movie_title">{props.data.name}</h2>
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
        <p className="DetailsCard__body__title">
          Overview
        </p>
        <p className="DetailsCard__body__overview_p">
          {props.data.overview}
        </p>
      </div>
      <div className="DetailsCard__body__cast">
        <p className="DetailsCard__body__title">Cast ({props.cast.length})</p>
        <div className="DetailsCard__body__cast__list">
          {props.cast}
        </div>
      </div>
      <div className="DetailsCard__body__trailer">
        <p className="DetailsCard__body__title">Trailer</p>
        {props.trailerKey ? (
          <iframe
          className="iframeTrailer"
          src={`https://www.youtube-nocookie.com/embed/${props.trailerKey}`}
          frameBorder="0"
          title={props.data.title + "'s trailer"}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        )
        : null}
      </div>
    </div>
  )
}

export default tvDetails;
