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
    console.log("didmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldupdate");
    // Only re-render if user changes URL

    if (!this.props.dataState.data || this.props.generalState.title !== nextProps.generalState.title) {
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
        return (
          <Card
            key={i}
            info={el}
            showDetails={(e) => this.props.showDetails(e, this.props.match.params.mode)}
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
