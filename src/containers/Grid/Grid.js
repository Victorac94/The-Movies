import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Grid.css';
import * as fetchData from '../../store/actions/fetchDataAction';
import Card from '../../components/Card/Card';

class Grid extends Component {
  componentDidMount() {
    const mode = this.props.match.params.mode;
    const genre = this.props.match.params.genre;

    this.props.onFetchData(mode, genre);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldupdate grid");

    if (this.props.dataState.newData === false && nextProps.dataState.newData === true) {
      return true;
    }
    return false;
  }

  render () {
    console.log("rendering grid");

    let cards = null
    if (this.props.dataState.data) {
      const nowPlaying = this.props.dataState.data;
      cards = nowPlaying.map((el, i) => {
        const mode = el.media_type === "tv" ? "tv" : this.props.match.params.mode;
        return (
          <Card
            key={i}
            info={el}
            showDetails={(e) => this.props.showDetails(e, mode)}
            />
        )
      })
    }
    return (
      <div className="Grid">
        {cards}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataState: state.dataReducer,
    generalState: state.generalReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: (mode, genre) => dispatch(fetchData.fetchData(mode, genre)),
    // onFetchDetails: (mode, id) => dispatch(fetchData.fetchDetails(mode, id)),
    // onShowDetails: () => dispatch(generalActions.showDetails())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Grid));
