import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import { connect } from 'react-redux';

import './Carousel.css';
import * as fetchMovies from '../../store/actions/fetchMoviesAction';

class Carousel extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // Como 'fetchData' es un array de objetos y esto es solo una comparación superficial
    // puede que me de bugs al coger otro tipo de datos (en App.js) como info sobre series, etc...
    return this.props.fetchedData !== nextProps.fetchedData;
  }

  render() {
    let posters = null;

    if (this.props.fetchedData) {
      posters = this.props.fetchedData.map((el, i) => {
        return (
          <div key={i} className="posterDiv">
            <img
            data-slide_index={i}
            data-id={el.id}
            onClick={this.props.loadDetails}
            src={"http://image.tmdb.org/t/p/w342/" + el.poster_path}
            alt={el.title} />
          </div>
        );
      });
    }

    return (
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          continuous: false,
          callback: this.props.loadInfo
        }}
        >
          {posters}
        </ReactSwipe>
    )
  }
}

const mapStateToProps = state => {
  return {
    movieState: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchDetails: (id) => dispatch(fetchMovies.fetchMovieDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
