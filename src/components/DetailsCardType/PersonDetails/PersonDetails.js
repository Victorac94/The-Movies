import React from 'react';

import './PersonDetails.css';

const personDetails = (props) => {
  // <Tags tags={props.data.genres}/>
  let bio = props.data.biography;
  return (
    <div className="DetailsCard__body">
      <div className="DetailsCard__body__main">
        <h2 className="DetailsCard__body__movie_title">{props.data.name}</h2>
      </div>
      <div className="DetailsCard__body__overview">
        <p className="DetailsCard__body__title">
          Biography
        </p>
        <p className="DetailsCard__body__overview_p" onClick={() => {
          document.querySelector(".DetailsCard__body__overview_p").classList.toggle("ShowFullBio");
        }}>
          {bio}
        </p>
      </div>
      <div className="DetailsCard__body__cast">
        <p className="DetailsCard__body__title">Known for ({props.cast.length})</p>
        <div className="DetailsCard__body__cast__list">
          {props.cast}
        </div>
      </div>
    </div>
  )
}

export default personDetails;
