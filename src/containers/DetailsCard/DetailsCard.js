import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DetailsCard.css';
import Tags from '../../components/Tags/Tags';
import Rate from '../../components/Rate/Rate';
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

  loadDetailsCard = (inDetails) => {
    if (inDetails) {
      console.log("inside if()");
      const poster = document.querySelector(".currentCard img");
      const posterRect = poster.getBoundingClientRect();
      const winWidth = window.innerWidth;
      const scale = (winWidth / 2) / posterRect.width;

      this.posterBG.style.height = posterRect.height * scale + 100 + 'px';
      poster.style.borderBottomLeftRadius = "5px";
      poster.style.borderBottomRightRadius = "5px";
      this.detailsCard.style.transform = "scale(1)";
      this.detailsCard.style.opacity = "1";
    } else {
      console.log("inside else");
      this.detailsCard.style.transform = "scale(0)";
      this.detailsCard.style.opacity = "0";
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const posterBG = document.querySelector(".DetailsCard__posterBG");

    if (posterBG) {
      function loadData () {
        posterBG.style.backgroundImage = `url("https://image.tmdb.org/t/p/w780${nextProps.dataState.details.backdrop_path}")`;
      }
      function deleteData () {
        posterBG.style.backgroundImage = "none";
      }

      if (nextProps.generalState.inDetails && nextProps.dataState.newDetails) {
        loadData();
        return ({data: nextProps.dataState.details});
      }
      else if (!nextProps.generalState.inDetails) {
        deleteData();
        return ({data: null});
      }
    }
    return null;
  }

  componentDidUpdate () {
    this.loadDetailsCard(this.props.generalState.inDetails);
  }

  componentDidMount () {
    this.detailsCard = document.querySelector(".DetailsCard");
    this.posterBG = document.querySelector(".DetailsCard__posterBG");
  }

  render () {
console.log("rendering detailsCard")
    let data = null;
    let cast = null;

    if (this.state.data) {
      if (this.state.data.credits.cast) {
        const data = this.state.data.credits.cast;
        let length = data.length > 10 ? 10 : data.length;
        cast = [];

        for (let i = 0; i < length; i++) {
          const person = (
            <Cast key={data[i].name + i} pic={data[i].profile_path} name={data[i].name} />
          );
          cast.push(person);
        }
      }

      data = (
        <div className="DetailsCard__body">
          <div className="DetailsCard__body__main">
            <h2 className="DetailsCard__body__title">{this.state.data.title}</h2>
            <Rate rate={this.state.data.vote_average} />
            <div className="DetailsCard__body__runtime-date">
              <span className="DetailsCard__body__runtime">
                <span className="icon-clock"></span>
                <span>
                  {this.state.data.runtime} min
                </span>
              </span>
              <span className="DetailsCard__body__release">
                <span className="icon-calendar"></span>
                <span>
                  {this.state.data.release_date}
                </span>
              </span>
            </div>
            <Tags tags={this.state.data.genres}/>
          </div>
          <div className="DetailsCard__body__overview">
            <p className="DetailsCard__body__overview__title">
              Overview
            </p>
            <p>
              {this.state.data.overview}
            </p>
          </div>
          <div className="DetailsCard__body__cast">
            <p className="DetailsCard__body__cast__title">Cast</p>
            <div className="DetailsCard__body__cast__list">
              {cast}
            </div>
          </div>
        </div>
      )
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
