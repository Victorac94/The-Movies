import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';

import Card from '../../components/Card/Card';
import Paginator from '../../components/Paginator/Paginator';
import classes from './Grid.module.css';
import Loading from '../../components/Loading/Loading';
import { appContext } from '../../context/AppContext';
import * as dataActions from '../../store/actions/fetchDataAction';

const Grid = React.memo(props => {
  const [info, setInfo] = useState(null);
  const app = useContext(appContext);
  const { mode, genre, discover, page } = useParams();
  const location = useLocation();
  const history = useHistory();

  // Load Grid data
  useEffect(() => {
    let url, language, region;

    if (app.language === 'en') {
      language = 'en-US';
      region = 'US';
    } else {
      language = 'es-ES';
      region = 'ES';
    }

    // Clean grid while fetching new data
    setInfo(null);

    // If we navigate forward scroll the next view to the top
    if (history.action === 'PUSH') {
      window.scrollTo(0, 0);
    }

    if (location.pathname === '/search') {
      // Get query string
      const query = encodeURIComponent(location.search.slice(7).trim());

      url = `https://api.themoviedb.org/3/search/multi?api_key=6095dab7d845691ab95df77d0a908452&query=${query}&page=${page}&language=${language}&region=${region}`;

    } else if (discover !== undefined) {
      // Fetch Discover data (a specific movie or tv genre)
      url = `https://api.themoviedb.org/3/discover/${mode}?api_key=6095dab7d845691ab95df77d0a908452&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&region=${region}`;

    } else {
      // Fetch 'top rated', 'now playing', 'popular' 'on air' data
      url = `https://api.themoviedb.org/3/${mode}/${genre}?api_key=6095dab7d845691ab95df77d0a908452&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&region=${region}`;
    }

    // Dispatch the call to fetch the data given the url
    props.fetchGridData(url);

  }, [location, history, mode, genre, discover, page, app.language]);

  // On new data, update the state and render the new data
  useEffect(() => {
    setInfo(props.dataReducer.gridData);

  }, [props.dataReducer.gridData]);

  // On mounting the component set info state to null
  useEffect(() => {
    setInfo(null);
  }, []);

  return (
    <React.Fragment>
      {page && <Paginator page={parseInt(page)} totalPages={props.dataReducer.totalPages} path={location.pathname} />}
      <div className={classes.grid}>
        {info ? info.map((el, i) => {
          return (
            <Card key={el.id} info={el} mode={mode} />
          )
        })
          : <Loading />}
      </div>
      {page && <Paginator page={parseInt(page)} totalPages={props.dataReducer.totalPages} path={location.pathname} />}
    </React.Fragment>
  )
}, (prevProps, nextProps) => {
  if (prevProps.dataReducer.gridData !== nextProps.dataReducer.gridData) {
    return false;
  }
  return true;
});

const mapStateToProps = state => {
  return {
    dataReducer: state.dataReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGridData: url => dispatch(dataActions.fetchGridData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);