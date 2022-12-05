import React from 'react';
import './EntryShowItemDetail.css';
import { Link } from 'react-router-dom';
import { Popup } from 'semantic-ui-react';

const EntryShowItemDetail = (props) => {

    const includedoutlinerefs = props.outlinerefs.filter((reference) =>{
        return Number(reference) < Number(159) || (Number(313) < Number(reference) && Number(reference) < Number(446))  
    });

    let outlinerefs = includedoutlinerefs.map((ref, i) => {
        return <span key={i} className="outlinerefs"><Link key={i} target="_blank" to={`/entries/${ref}`}><Popup trigger={<span>{ (i ? ', ' : '') + ref }</span>} position="bottom center"><img className="popupimage" src={`/img/${ref}.png`}></img></Popup></Link></span>
    });

    let details = props.detail.map((detail, j) => {
        const includedsubentryrefs = detail.subentryrefs.filter((reference) => {
            return Number(reference) < Number(159) || (Number(313) < Number(reference) && Number(reference) < Number(446))  
        });
        return(
            <div key={j} className="subentry">
                <div className="subentrymain"> <span className="subentryid"> {detail.subentryid}</span> {detail.content}</div>
                <div className="subentryrefs">{includedsubentryrefs.map((ref, k) => {
                    return <span key={k}><Link key={k} target="_blank" to={`/entries/${ref}`}><Popup trigger={<span>{ (k ? ', ' : '') + ref }</span>} position="bottom center"><img className="popupimage" src={`/img/${ref}.png`}></img></Popup></Link></span>
                })}
                </div>
            </div>
        );
    })

    return (
        <div className="ui container grid">
            <div className="ui stackable two column grid">
                <div className="column sticky">
                    <div className="mymeta">
                        <i className="hashtag icon">{props.id}</i>{props.category}
                    </div>
                    <div className="ui image sticky">
                        <img src={props.image} alt={props.id}/>
                    </div>
                </div>
                <div className="column">
                    <div>{props.outline}</div>
                    <div>{outlinerefs}</div>
                    <hr></hr>
                    <div>{details}</div>             
                </div>
            </div>
        </div>    
    );
}


export default EntryShowItemDetail;

