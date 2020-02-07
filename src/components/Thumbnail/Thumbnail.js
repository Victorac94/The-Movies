import React from 'react';

import './Thumbnail.css';
import imgNotAvailable from "../../assets/images/image-not-available.jpg";

const thumbnail = (props) => {
  return (
    <div className="Thumbnail__wrapper">
      <img
        className="Thumbnail"
        onClick={props.searchDetails}
        data-mode={props.mode}
        data-id={props.id}
        src={props.pic ? "https://image.tmdb.org/t/p/w185" + props.pic : imgNotAvailable}
        alt={props.name}
        title={props.name} />
      <p className="Thumbnail__name" title={props.name}>
        {props.name}
      </p>
      {props.job ? props.job : null}
    </div>
  )
}

export default thumbnail;
