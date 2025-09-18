import React from 'react';
import './EntryCard.css';
import { getCloudinaryUrl } from '../../cloudinaryConfig';
import { Link } from 'react-router-dom';


const EntryCard = (props) => {
    return (
        <div className={`ui yellow card ${props.entrytype}`}>
            <div className="image">
                <img src={getCloudinaryUrl(props.id, "thumbnail")} alt={props.id} loading="lazy"/>
            </div>
            <div className="extra content">
                <span className="right floated">
                    <Link to={`/entries/${props.id}`}>
                    <button className="tiny ui button">View</button>
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