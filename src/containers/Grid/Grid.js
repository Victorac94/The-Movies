import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card/Card';
import classes from './Grid.module.css';
import Loading from '../../components/Loading/Loading';
import { appContext } from '../../context/AppContext';

const Grid = props => {
  const [info, setInfo] = useState(null);
  const app = useContext(appContext);
  const { mode, genre, discover } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    let url = '';
    let language;
    let region;

    if (app.language === 'en') {
      language = 'en-US';
      region = 'US';
    } else {
      language = 'es-ES';
      region = 'ES';
    }

    setInfo(null);

    if (history.action === 'PUSH') {
      window.scrollTo(0, 0);
    }

    if (location.pathname === '/search') {
      // Get query string
      const query = encodeURIComponent(location.search.slice(7).trim());
      url = `https://api.themoviedb.org/3/search/multi?api_key=6095dab7d845691ab95df77d0a908452&query=${query}&page=1&language=${language}&region=${region}`;

    } else if (discover !== undefined) {
      url = `https://api.themoviedb.org/3/discover/${mode}/?api_key=6095dab7d845691ab95df77d0a908452&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&region=${region}`;

    } else {
      url = `https://api.themoviedb.org/3/${mode}/${genre}?api_key=6095dab7d845691ab95df77d0a908452&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&region=${region}`;
    }

    axios.get(url)
      .then(response => {
        if (response.status === 200) {
          setInfo(response.data.results);

        } else {
          throw new Error('Error while getting details')
        }
      }).catch(err => {
        throw new Error(err);
      })

  }, [location, history, mode, genre, discover, app.language]);


  return (
    <div className={classes.grid}>
      {info ? info.map((el, i) => {
        return (
          <Card key={el.id} info={el} mode={mode} />
        )
      })
        : <Loading />}
    </div>
  )
}

export default Grid;

// const mapStateToProps = state => {
//   return {
//     dataState: state.dataReducer,
//     generalState: state.generalReducer
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onFetchTrending: (page) => dispatch(fetchData.fetchTrending(page)),
//     onFetchData: (mode, genre, page) => dispatch(fetchData.fetchData(mode, genre, page)),
//     onFetchSearch: (query) => dispatch(fetchData.fetchSearch(query)),
//     onFetchDiscover: (mode, genre, page) => dispatch(fetchData.fetchDiscover(mode, genre, page))
//   }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Grid));
