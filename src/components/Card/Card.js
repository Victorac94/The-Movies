import React from 'react';

import './Card.css';
import Rate from '../Rate/Rate';

const card = (props) => {
  let title = props.info.title;

  if (title.length > 14) {
    title = title.slice(0, 14) + "...";
  }

  return (
    <div className="Card" onClick={props.showDetails} data-id={props.info.id}>
      <img
        className="Card__Poster"
        src={"https://image.tmdb.org/t/p/w342/" + props.info.poster_path}
        alt={props.info.title} />
      <div className="Card__Info">
        <p className="Card__Info__title">{title}</p>
        <Rate rate={props.info.vote_average} />
      </div>
    </div>
  )
}

export default card;
