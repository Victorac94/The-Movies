import React from 'react';

import Thumbnail from '../../components/Thumbnail/Thumbnail';
import classes from './ThumbnailCarousel.module.css';


const ThumbnailCarousel = props => {
    // Load carousel
    let length = props.data.length > 20 ? 20 : props.data.length;
    const carousel = [];

    for (let i = 0; i < length; i++) {
        const item = props.data[i];

        if (item.title) {
            const elem = (
                <Thumbnail key={item.id + item.title}
                    pic={item.poster_path}
                    name={item.title}
                    mode="movie"
                    id={item.id} />
            );
            carousel.push(elem);
        } else {
            const elem = (
                <Thumbnail key={item.id + item.name}
                    pic={item.poster_path || item.profile_path}
                    name={item.name}
                    mode={props.isPeople ? 'person' : 'tv'}
                    id={item.id} />
            );
            carousel.push(elem);
        }
    }

    return (
        <React.Fragment>
            <h3>{props.title} ({length})</h3>
            <div className={classes.carousel}>
                {carousel}
            </div>
        </React.Fragment>
    );
}

export default ThumbnailCarousel;