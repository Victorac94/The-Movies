import React from 'react';

import './Thumbnail.css';
import imgNotAvailable from "../../assets/images/image-not-available.jpg";
import { Link } from 'react-router-dom';

const thumbnail = (props) => {
  return (
    <article className="Thumbnail__wrapper">
      <Link to={`/${props.mode}/${props.id}/details`}>
        <img
          className="Thumbnail"
          src={props.pic ? "https://image.tmdb.org/t/p/w185" + props.pic : imgNotAvailable}
          alt={props.name}
          title={props.name} />
      </Link>
      <p className="Thumbnail__name" title={props.name}>
        {props.name}
      </p>
      {props.job ? props.job : null}
    </article>
  )
}

export default thumbnail;
