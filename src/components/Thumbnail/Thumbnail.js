import React from 'react';

import './Thumbnail.css';

const thumbnail = (props) => {
  return (
    <div className="Thumbnail__wrapper">
      <img
        className="Thumbnail"
        onClick={props.searchDetails}
        data-mode={props.mode}
        data-id={props.id}
        src={"https://image.tmdb.org/t/p/w185" + props.pic}
        alt={props.name} />
      <p className="Thumbnail__name">
        {props.name}
      </p>
    </div>
  )
}

export default thumbnail;
