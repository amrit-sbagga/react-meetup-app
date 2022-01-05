import React from 'react';
import classes from './MeetupItem.module.css'

export default function MeetupItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <title>{props.title}</title>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>To Favourites</button>
            </div>
        </li>
    )
}
