import React from 'react';

import '../DetailsCardType.css';
import Tags from '../../Tags/Tags';

const personDetails = (props) => {
  return (
    <div className="DetailsCard__body">
      <div className="DetailsCard__body__main">
        <img
          className="DetailsCard__body__main__desktop_poster"
          src={"https://image.tmdb.org/t/p/w342" + props.data.profile_path}
          alt={props.data.name} />
        <h2 className="DetailsCard__body__main_title">{props.data.name}</h2>
        <Tags tags={[{"id": props.data.known_for_department}]}/>
      </div>
      <div className="DetailsCard__body__overview">
        <p className="DetailsCard__body__header">
          Biography
        </p>
        <p className="DetailsCard__body__overview_p" onClick={() => {
          document.querySelector(".DetailsCard__body__overview_p").classList.toggle("ShowFullBioOverview");
        }}>
          {props.data.biography}
        </p>
      </div>
      <div className="DetailsCard__body__cast">
        <p className="DetailsCard__body__header">Known for {props.cast ? `(${props.cast.length})` : null}</p>
        <div className="DetailsCard__body__cast__list">
          {props.cast ? props.cast : "No Cast Available"}
        </div>
      </div>
    </div>
  )
}

export default personDetails;
