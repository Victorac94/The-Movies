import React, { Component } from 'react';
import { connect } from 'react-redux';
import fastdom from 'fastdom';

import './DetailsCard.css';
import MovieDetails from '../../components/DetailsCardType/MovieDetails/MovieDetails';
import TvDetails from '../../components/DetailsCardType/TvDetails/TvDetails';
import PersonDetails from '../../components/DetailsCardType/PersonDetails/PersonDetails';
import Cast from '../../components/Cast/Cast';

class DetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };

    this.detailsCard = null;
    this.posterBG = null
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

  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.generalState.inDetails && nextProps.dataState.newDetails) {
      return ({data: nextProps.dataState.details});
    }
    else if (!nextProps.generalState.inDetails) {
      return ({data: null});
    }
    return null;
  }

  shouldComponentUpdate (nextProps) {
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

  componentDidUpdate () {
    this.toggleDetailsCard(this.props.generalState.inDetails);
  }

  componentDidMount () {
    this.detailsCard = document.querySelector(".DetailsCard");
    this.posterBG = document.querySelector(".DetailsCard__posterBG");
  }

  render () {
    console.log("rendering detailsCard")

    const posterBG = document.querySelector(".DetailsCard__posterBG");
    let data = null;
    let trailerKey = null;

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
      // Load cast
      if (this.state.data.credits.cast.length) {
        const data = this.state.data.credits.cast;
        let length = data.length > 20 ? 20 : data.length;
        cast = [];

        for (let i = 0; i < length; i++) {
          if (data[i].title) {
            const elem = (
              <Cast key={data[i].title + i}
                pic={data[i].poster_path}
                name={data[i].title} />
            );
            cast.push(elem);
          } else {
            const elem = (
              <Cast key={data[i].name + i}
                pic={data[i].profile_path || data[i].poster_path}
                name={data[i].name} />
            );
            cast.push(elem);
          }
        }
      }

      // Load trailer
      if (this.state.data.videos.results && this.state.data.videos.results.length !== 0) {
        trailerKey = this.state.data.videos.results[0].key;
      }

      switch (this.props.generalState.media) {
        case 'movie':
          data = <MovieDetails data={this.state.data} cast={cast} trailerKey={trailerKey}/>;
          break;
        case 'tv':
          data = <TvDetails data={this.state.data} cast={cast} trailerKey={trailerKey}/>;
          break;
        case 'person':
          data = <PersonDetails data={this.state.data} cast={cast}/>;
          break;
        default:
          data = null;
      }
    }

    return (
      <div className="DetailsCard">
        <div className="DetailsCard__posterBG"></div>
        {data}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    generalState: state.generalReducer,
    dataState: state.dataReducer
  }
}

export default connect(mapStateToProps)(DetailsCard);
