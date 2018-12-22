import React from 'react';

import './Tag.css';

const tag = (props) => {
  return (
    <div className="movie-card-info__tags__tag">
      {props.name && props.name.name ? props.name.name : props.name}
    </div>
  )
}

export default tag;
