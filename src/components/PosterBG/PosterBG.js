import React from 'react'

import './PosterBG.css';

const posterBG = (props) => {
  // console.log("Rendering PosterBG.js");
  let slideIndex = props.currSlideIndex;
  let imgs = null;
  const foregroundBG = document.querySelector(".foregroundBG");

  if (props.fetchedData) {
      imgs = (
        <div>
          <img className="background-img" src={`https://image.tmdb.org/t/p/w780/${props.fetchedData[slideIndex].backdrop_path}`} alt="background" />
          <div className="foregroundBG"></div>
        </div>
      )
  }
  if (props.detailsView) {
    document.querySelector(".poster-bg").classList.add("poster-bg-onDetails");
    foregroundBG.classList.add("foregroundBG_hidden");
  }
  else if (foregroundBG){
    document.querySelector(".poster-bg").classList.remove("poster-bg-onDetails");
    foregroundBG.classList.remove("foregroundBG_hidden");
  }

  return (
    <div className="poster-bg">
      {imgs}
    </div>
  )
}

export default posterBG;
