import React, { useContext } from 'react'
import classes from './Loading.module.css';

import AppContextProvider, { appContext } from '../../context/AppContext';

const Loading = props => {
    const app = useContext(appContext);

    return (
        <div className={classes.centered}>
            <div className={classes.blob__1}></div>
            <div className={classes.blob__2}></div>
            <p className={classes.loading}>{app.language === 'en' ? 'Loading...' : 'Cargando...'}</p>
        </div>
    )
}

export default Loading;