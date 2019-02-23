import React from 'react';

import '../DetailsCardType.css';
import Tags from '../../Tags/Tags';
import Rate from '../../Rate/Rate';

const movieDetails = (props) => {
  return (
    <div className="DetailsCard__body">
      <div className="DetailsCard__body__main">
        <img
          className="DetailsCard__body__main__desktop_poster"
          src={"https://image.tmdb.org/t/p/w342" + props.data.poster_path}
          alt={props.data.name} />
        <h2 className="DetailsCard__body__main_title">{props.data.title}</h2>
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
      <div className="DetailsCard__body__recommend">
        <p className="DetailsCard__body__header">Recommended {props.recommendations ? `(${props.recommendations.length})` : null}</p>
        <div className="DetailsCard__body__recommend__list">
          {props.recommendations ? props.recommendations : "No Recommendations Available"}
        </div>
      </div>
      <div className="DetailsCard__body__similar">
        <p className="DetailsCard__body__header">Similar {props.similar ? `(${props.similar.length})` : null}</p>
        <div className="DetailsCard__body__similar__list">
          {props.similar ? props.similar : "No Similarities Available"}
        </div>
      </div>
    </div>
  )
}

export default movieDetails;
