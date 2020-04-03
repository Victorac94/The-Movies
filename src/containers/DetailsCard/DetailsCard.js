import React, { Component } from 'react';
import { connect } from 'react-redux';
import fastdom from 'fastdom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './DetailsCard.css';
import * as fetchData from '../../store/actions/fetchDataAction';
import { showDetails, loadingFromDetails } from '../../store/actions/generalActions';
import { resetCardPosition } from '../../shared/resetCardPosition';
import MovieDetails from '../../components/DetailsCardType/MovieDetails/MovieDetails';
import TvDetails from '../../components/DetailsCardType/TvDetails/TvDetails';
import PersonDetails from '../../components/DetailsCardType/PersonDetails/PersonDetails';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

class DetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    this.detailsCard = null;
    this.posterBG = null;
  }

  toggleDetailsCard = (inDetails) => {
    if (inDetails) {
      fastdom.mutate(() => {
        this.detailsCard.style.transform = "scale(1)";
        this.detailsCard.style.opacity = "1";
        document.querySelector(".currentCard").click();
      });
    } else {
      fastdom.mutate(() => {
        this.detailsCard.style.transform = "scale(0)";
        this.detailsCard.style.opacity = "0";
      });
    }
  }

  searchInDetails = (e) => {
    const oldPoster = document.querySelector(".currentCard .Card__Poster");
    const cardInfo = document.querySelector(".DetailsCard");

    resetCardPosition(oldPoster, cardInfo, true);
    // oldPoster.parentNode.classList.remove("currentCard");
    this.posterBG.style.backgroundImage = "none";

    this.setState({ data: null });
    this.props.onChangeGeneralState(e.currentTarget.dataset.mode);
    this.props.onSearchDetails(e.currentTarget.dataset.mode, e.currentTarget.dataset.id);
    this.props.onLoadingFromDetails(true);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.generalState.inDetails && nextProps.dataState.newDetails) {
      return ({ data: nextProps.dataState.details });
    }
    else if (!nextProps.generalState.inDetails) {
      return ({ data: null });
    }
    return null;
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.dataState.newDetails === false && nextProps.dataState.newDetails === true) {
      return true;
    }
    if (this.props.dataState.fetchingDetails === false && nextProps.dataState.fetchingDetails === true) {
      return true;
    }
    if (this.props.generalState.inDetails !== nextProps.generalState.inDetails) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    this.toggleDetailsCard(this.props.generalState.inDetails);
  }

  componentDidMount() {
    this.detailsCard = document.querySelector(".DetailsCard");
    this.posterBG = document.querySelector(".DetailsCard__posterBG");
  }

  render() {
    const posterBG = document.querySelector(".DetailsCard__posterBG");
    let data = null;
    let trailerKey = null;
    let posterFromDetails = null;

    if (posterBG) {
      if (this.props.generalState.inDetails && this.props.dataState.newDetails) {
        posterBG.style.backgroundImage = `url("https://image.tmdb.org/t/p/w780${this.state.data.backdrop_path}")`;
      }
      else if (!this.props.generalState.inDetails) {
        posterBG.style.backgroundImage = "none";
      }
    }

    if (this.state.data) {
      let cast = null;
      let recommendations = null;
      let similar = null;

      if (this.props.generalState.loadingFromDetails && this.props.dataState.newDetails) {
        this.props.dataState.details.poster_path ?
          posterFromDetails = this.props.dataState.details.poster_path
          : posterFromDetails = this.props.dataState.details.profile_path;
      }

      // Load cast
      if (this.state.data.credits.cast.length) {
        const data = this.state.data.credits.cast;
        let length = data.length > 20 ? 20 : data.length;
        cast = [];

        for (let i = 0; i < length; i++) {
          if (data[i].title) {
            const elem = (
              <Thumbnail key={data[i].title + i}
                pic={data[i].poster_path}
                name={data[i].title}
                searchDetails={this.searchInDetails}
                mode="movie"
                id={data[i].id} />
            );
            cast.push(elem);
          } else {
            const elem = (
              <Thumbnail key={data[i].name + i}
                pic={data[i].profile_path || data[i].poster_path}
                name={data[i].name}
                searchDetails={this.searchInDetails}
                mode={data[i].profile_path ? "person" : "tv"}
                id={data[i].id} />
            );
            cast.push(elem);
          }
        }
      }

      // Load recommendations
      if (this.state.data.recommendations.results) {
        const data = this.state.data.recommendations.results;
        let length = data.length > 20 ? 20 : data.length;
        recommendations = [];

        for (let i = 0; i < length; i++) {
          if (data[i].title) {
            const elem = (
              <Thumbnail key={data[i].title + i}
                pic={data[i].poster_path}
                name={data[i].title}
                searchDetails={this.searchInDetails}
                mode="movie"
                id={data[i].id} />
            );
            recommendations.push(elem);
          } else {
            const elem = (
              <Thumbnail key={data[i].name + i}
                pic={data[i].poster_path}
                name={data[i].name}
                searchDetails={this.searchInDetails}
                mode="tv"
                id={data[i].id} />
            );
            recommendations.push(elem);
          }
        }
      }

      // Load similar
      if (this.state.data.similar.results) {
        const data = this.state.data.similar.results;
        let length = data.length > 20 ? 20 : data.length;
        similar = [];

        for (let i = 0; i < length; i++) {
          if (data[i].title) {
            const elem = (
              <Thumbnail key={data[i].title + i}
                pic={data[i].poster_path}
                name={data[i].title}
                searchDetails={this.searchInDetails}
                mode="movie"
                id={data[i].id} />
            );
            similar.push(elem);
          } else {
            const elem = (
              <Thumbnail key={data[i].name + i}
                pic={data[i].poster_path}
                name={data[i].name}
                searchDetails={this.searchInDetails}
                mode="tv"
                id={data[i].id} />
            );
            similar.push(elem);
          }
        }
      }

      // Load trailer
      if (this.state.data.videos.results && this.state.data.videos.results.length !== 0) {
        trailerKey = this.state.data.videos.results[0].key;
      }

      switch (this.props.generalState.media) {
        case 'movie':
          data = (
            <MovieDetails
              data={this.state.data}
              cast={cast}
              recommendations={recommendations}
              similar={similar}
              trailerKey={trailerKey} />
          );
          break;
        case 'tv':
          data = (
            <TvDetails
              data={this.state.data}
              cast={cast}
              recommendations={recommendations}
              similar={similar}
              trailerKey={trailerKey} />
          );
          break;
        case 'person':
          data = <PersonDetails data={this.state.data} cast={cast} />;
          break;
        default:
          data = null;
      }
    }

    return (
      <ErrorBoundary>
        <div className="DetailsCard">
          <div className="DetailsCard__posterBG">
            <div className="DetailsCard__backdropBG"></div>
            {this.props.generalState.loadingFromDetails && window.innerWidth < 1025 && this.state.data ?
              <img className="DetailsCard__poster" src={"https://image.tmdb.org/t/p/w342" + posterFromDetails} alt={this.state.data.title || this.state.data.name + ' backdrop'} />
              : null}
          </div>
          {this.props.dataState.fetchingDetails ? (
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          ) : null}
          {data}
        </div>
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = state => {
  return {
    generalState: state.generalReducer,
    dataState: state.dataReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchDetails: (mode, id) => dispatch(fetchData.fetchDetails(mode, id)),
    onChangeGeneralState: (media) => dispatch(showDetails(media)),
    onLoadingFromDetails: (bool) => dispatch(loadingFromDetails(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsCard);
