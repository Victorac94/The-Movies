import React from 'react';

import './Cast.css';

const cast = (props) => {
  return (
    <div className="Cast">
      <img className="Cast__picture" src={"https://image.tmdb.org/t/p/w185" + props.pic} alt={props.name} />
      <p className="Cast__name">
        {props.name}
      </p>
    </div>
  )
}

export default cast;
