import React from 'react';

import './MovieDetails.css';
import Tags from '../../Tags/Tags';
import Rate from '../../Rate/Rate';

const movieDetails = (props) => {
  return (
    <div className="DetailsCard__body">
      <div className="DetailsCard__body__main">
        <h2 className="DetailsCard__body__movie_title">{props.data.title}</h2>
        <Rate rate={props.data.vote_average} />
        <div className="DetailsCard__body__runtime-release">
          <span className="DetailsCard__body__runtime">
            <span className="icon-clock"></span>
            <span>
              {props.data.runtime} min
            </span>
          </span>
          <span className="DetailsCard__body__release">
            <span className="icon-calendar"></span>
            <span>
              {props.data.release_date}
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
        <p className="DetailsCard__body__title">Cast ({props.cast ? props.cast.length : null})</p>
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
        : <div className="iframeTrailer">No Trailer available</div>
      }
      </div>
    </div>
  )
}

export default movieDetails;
