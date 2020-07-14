import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Paginator.module.css';

const Paginator = props => {
    // Get the full url path except the page number
    let path = props.path.split("/");
    path = path.slice(0, -1).join("/") + "/";

    return (
        <div className={classes.paginator}>
            {props.page !== 1 ?
                <Link to={path + (props.page - 1)} className={classes.button}>Prev</Link>
                : null}
            <span className={classes.currentPage}>Page {props.page} of {props.totalPages}</span>
            {props.page !== props.totalPages ?
                <Link to={path + (props.page + 1)} className={classes.button}>Next</Link>
                : null}
        </div>
    )
}

export default Paginator;