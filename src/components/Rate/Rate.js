import React from 'react';

import './Rate.css';

const rate = (props) => {
  const stars = [];
  const rate = props.rate / 2;

  // GET THE RATE NUMBER AND CREATE THE STARS RATE
  for (let i = 0; i < Math.floor(rate); i++) {
    const star = <span key={stars.length} className="icon-star"></span>;
    stars.push(star);
  }

  if (rate % 1 >= 0.85) {
    const star = <span key={stars.length} className="icon-star"></span>;
    stars.push(star);
  }
  else if (rate % 1 >= 0.35){
    const star = <span key={stars.length} className="icon-star-half-o"></span>;
    stars.push(star);
  }

  while (stars.length < 5) {
    const star = <span key={stars.length} className="icon-star-o"></span>;
    stars.push(star);
  }

  return (
    <div>
      {stars}
      <span className="rate">{props.rate}</span>
    </div>
  )
}

export default rate;
