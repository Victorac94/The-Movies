import React from 'react';

import './Card.css';
import Rate from '../Rate/Rate';
import imgNotAvailable from '../../assets/images/image-not-available.jpg';
import { Link } from 'react-router-dom';

const Card = (props) => {
  let title = props.info.title || props.info.name;
  let picture = props.info.poster_path || props.info.profile_path;
  let mode = props.info.media_type || props.mode;

  if (title.length > 50) {
    title = title.slice(0, 50) + '...';
  }

  return (
    <div className={['card', mode].join(' ')}>
      <Link to={`/${mode}/${props.info.id}/details`}>
        <div className="poster__wrapper">
          <img
            src={picture ? "https://image.tmdb.org/t/p/w342" + picture : imgNotAvailable}
            alt={props.info.title || props.info.name} />
        </div>
      </Link>
      <div className="info">
        <Link to={`/${mode}/${props.info.id}/details`}>
          <p className="info__title">{title}</p>
        </Link>
        {mode !== "person" ? (
          <Rate rate={props.info.vote_average} />
        )
          : <span className="person__footer">Person</span>}
      </div>
    </div>
  )
}

export default Card;
