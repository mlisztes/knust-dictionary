import React from 'react';
import './EntryCard.css';
import { Link } from 'react-router-dom';


const EntryCard = (props) => {
    return (
        <div className={`ui yellow card ${props.entrytype}`}>
            <div className="image">
                <img src={props.image} alt={props.id}/>
            </div>
            <div className="content">
                <div className="meta">
                    {props.category}
                </div>
                <div className="description">
                    {props.outline}
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    <Link to={`/entries/${props.id}`}>
                    <button className="tiny ui yellow button">View</button>
                    </Link>
                </span>
                <span>
                    <i className="hashtag icon">{props.id}</i> 
                </span>
            </div>
        </div>
    );
}


export default EntryCard;