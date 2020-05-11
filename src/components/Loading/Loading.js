import React from 'react'
import classes from './Loading.module.css';

const Loading = props => {
    return (
        <div className={classes.centered}>
            <div className={classes.blob__1}></div>
            <div className={classes.blob__2}></div>
            <p className={classes.loading}>Loading...</p>
        </div>
    )
}

export default Loading;