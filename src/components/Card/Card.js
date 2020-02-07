import React from 'react';

import './Card.css';
import Rate from '../Rate/Rate';
import imgNotAvailable from '../../assets/images/image-not-available.jpg';

const card = (props) => {
  let title = props.info.title || props.info.name;
  let picture = props.info.poster_path || props.info.profile_path;

  return (
    <div
      className={props.info.media_type !== "person" ? "Card" : "Card Card_Person"}
      onClick={props.showDetails}
      data-id={props.info.id}>
      <img
        className="Card__Poster"
        src={picture ? "https://image.tmdb.org/t/p/w342" + picture : imgNotAvailable}
        alt={props.info.title || props.info.name} />
      <div className="Card__Info">
        <p className="Card__Info__title">{title}</p>
        {props.info.media_type !== "person" ? (
          <Rate rate={props.info.vote_average} />
        )
          : <span className="Card_Person_Name">Person</span>}
      </div>
    </div>
  )
}

export default card;
