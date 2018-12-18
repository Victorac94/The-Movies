import React from 'react';

import './Card.css';
import Rate from '../Rate/Rate';

const card = (props) => {
  let title = props.info.title || props.info.name;
  let picture = props.info.poster_path || props.info.profile_path

  if (title.length > 14 ) {
    title = title.slice(0, 14) + "...";
  }
console.log("Rendering Card.js");
  return (
    <div
      className="Card"
      onClick={props.showDetails}
      data-id={props.info.id}>
      <img
        className="Card__Poster"
        src={"https://image.tmdb.org/t/p/w342" + picture}
        alt={props.info.title || props.info.name} />
      <div className="Card__Info">
        <p className="Card__Info__title">{title}</p>
        <Rate rate={props.info.vote_average} />
      </div>
    </div>
  )
}

export default card;
