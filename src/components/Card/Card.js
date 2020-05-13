import React from 'react';

import './Card.css';
import Rate from '../Rate/Rate';
import imgNotAvailable from '../../assets/images/image-not-available.jpg';
import { Link } from 'react-router-dom';

const Card = (props) => {
  let title = props.info.title || props.info.name;
  let picture = props.info.poster_path || props.info.profile_path;

  if (title.length > 50) {
    title = title.slice(0, 50) + '...';
  }

  return (
    <div className={['card', props.info.media_type].join(' ')}>
      <Link to={`/${props.info.media_type}/${props.info.id}/details`}>
        <div className="poster__wrapper">
          <img
            src={picture ? "https://image.tmdb.org/t/p/w342" + picture : imgNotAvailable}
            alt={props.info.title || props.info.name} />
        </div>
      </Link>
      <div className="info">
        <Link to={`/${props.info.media_type}/${props.info.id}/details`}>
          <p className="info__title">{title}</p>
        </Link>
        {props.info.media_type !== "person" ? (
          <Rate rate={props.info.vote_average} />
        )
          : <span className="Card_Person_Name">Person</span>}
      </div>
    </div>
  )
}

export default Card;
