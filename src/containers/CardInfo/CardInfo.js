import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CardInfo.css';
import Tags from '../../components/Tags/Tags';

class CardInfo extends Component {

  render() {
    const info = this.props.info;
    const stars = [];
    const rate = info.vote_average / 2;
    let runtime = null;

    // GET THE RATE NUMBER AND CREATE THE STARS RATE
    for (let i = 0; i < Math.floor(rate); i++) {
      const star = <span key={stars.length} className="icon-star"></span>;
      stars.push(star);
    }

    if (rate % 1 >= 0.5) {
      const star = <span key={stars.length} className="icon-star-half-o"></span>;
      stars.push(star);
    }

    while (stars.length < 5) {
      const star = <span key={stars.length} className="icon-star-o"></span>;
      stars.push(star);
    }

    // IF WE HAVE MOVIE, SERIE... DETAILS
    if (this.props.movieDetState && this.props.detailsView) {
      const details = this.props.movieDetState;
      // RUNTIME
      runtime = (
        <div>
            <span className="icon-clock"></span>
            <span className="runtime__minutes">{details.runtime} min</span>
        </div>
      );
    }
    else if (this.props.movieDetState && !this.props.detailsView) {
      document.querySelector(".MCI").classList.remove("MCI__expanded");
    }

    return (
      <div className="MCI">
        <h3 className="MCI__title">
          {info.title}
        </h3>
        <div className="MCI__rate">
          {stars}
          <span className="MCI__rate__number">{info.vote_average}</span>
        </div>
        <div className="MCI__runtime">
          {runtime}
        </div>
        <div className="MCI__release">
          <span className="icon-calendar"></span>
          <span>{info.release_date}</span>
        </div>
        <Tags tags={info.genre_ids}/>
        {this.props.detailsView && this.props.movieDetState ?
          <div>
            <div className="MCI__overview">
              <span className="MCI__overview__title">Overview</span>
              <p className="MCI__overview__body">{this.props.movieDetState.overview}</p>
            </div>
            <div className="MCI__trailer">
              <iframe
              width="330"
              height="186"
              title={"Trailer for " + this.props.movieDetState.original_title}
              src={"https://www.youtube-nocookie.com/embed/" + this.props.movieDetState.videos.results[0].key}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            </div>
          </div>
        : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movieDetState: state.movieDetails
  }
}

export default connect(mapStateToProps, null)(CardInfo);
