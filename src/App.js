import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import * as fetchMovies from './store/actions/fetchMoviesAction';
import { calculatePosterPosition } from './shared/calculatePosterPosition';
import { calculateCardInfoPosition } from './shared/calculateCardInfoPosition';
import { resetPosterPosition } from './shared/resetPosterPosition';
import { resetCardInfoPosition } from './shared/resetCardInfoPosition';
import Menu from './components/Menu/Menu';
import Carousel from './containers/Carousel/Carousel';
import PosterBG from './components/PosterBG/PosterBG';
import CardInfo from './containers/CardInfo/CardInfo';

class App extends Component {
  state = {
      currSlideIndex: 0,
      currentPoster: null,
      detailsView: false,
      showMenu: false
  };

  componentDidMount() {
    this.props.onFetchNowPlaying();
  }

  loadDetails(e) {
    // Prevent fetching data if we are already seeing it (by clicking again the img in details view)
    if (this.state.detailsView) return;

    this.props.onFetchDetails(e.target.dataset.id);
    this.setState({detailsView: true, currentPoster: e.target});

    const cardInfo = document.querySelector(".MCI");
    const title = document.querySelector(".MCI__title");
    const rate = document.querySelector(".MCI__rate");

    // e.target is the current poster
    calculatePosterPosition(e.target);
    calculateCardInfoPosition(cardInfo, title, rate); // Params have to be in that order
  }

  goBack = () => {
    if (this.state.detailsView) {
      this.setState({detailsView: false});

      const poster = this.state.currentPoster;
      const cardInfo = document.querySelector(".MCI");
      const title = document.querySelector(".MCI__title");
      const rate = document.querySelector(".MCI__rate");

      resetPosterPosition(poster);
      resetCardInfoPosition(cardInfo, title, rate);
    }
  }

  loadPreviewInfo(index, elem) {
    this.setState({currSlideIndex: index});
  }

  render() {
    const sliderData = this.props.movieState.nowPlaying;

    // Components should be placed in that order to not mess with layout and z-index, etc...
    return (
      sliderData ?
        <div className="App">
          <PosterBG
          fetchedData={sliderData}
          currSlideIndex={this.state.currSlideIndex}
          detailsView={this.state.detailsView}
          />
          <CardInfo info={sliderData[this.state.currSlideIndex]} detailsView={this.state.detailsView} />
          <Carousel
          fetchedData={sliderData}
          loadInfo={(i, el) => this.loadPreviewInfo(i, el)}
          loadDetails={(e) => this.loadDetails(e)}
          />
          {this.state.detailsView ? <div className="header__background"></div> : null}
          <Menu
          toggleMenu={() => this.setState({showMenu: !this.state.showMenu})}
          isShowing={this.state.showMenu} />
          {this.state.detailsView ? <div className="prevent-sliding"></div> : null}
          {this.state.detailsView ?
            <span className="go-back icon-angle-left" onClick={() => this.goBack()}></span>
            : null}
        </div>
      : null
    );
  }
}

const mapStateToProps = state => {
  return {
    movieState: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchNowPlaying: () => dispatch(fetchMovies.fetchNowPlaying()),
    onFetchDetails: (id) => dispatch(fetchMovies.fetchMovieDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
