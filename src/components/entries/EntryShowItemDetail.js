import React from 'react';
import './EntryShowItemDetail.css';
import { Link } from 'react-router-dom';
import { Popup } from 'semantic-ui-react';

const EntryShowItemDetail = (props) => {

    const cloudName = "dwcsywpgz";
    const folder = "knust";

    const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/${folder}/${props.id}.png`;
    const getPopupImageUrl = (imageId) => {
        return `https://res.cloudinary.com/${cloudName}/image/upload/w_450,h_300,c_limit,q_auto,f_auto/${folder}/${imageId}.png`;
      };
      
   
    const includedoutlinerefs = props.outlinerefs.filter((reference) =>{
        return Number(reference) < Number(159) || (Number(313) < Number(reference) && Number(reference) < Number(446)) || (Number(792) < Number(reference) && Number(reference) < Number(851)) || Number(894) < Number(reference) 
    });

    let outlinerefs = includedoutlinerefs.map((ref, i) => {
        const popupImageUrl = getPopupImageUrl(ref);
        return <span key={i} className="outlinerefs"><Link key={i} target="_blank" to={`/entries/${ref}`}><Popup trigger={<span>{ (i ? ', ' : '') + ref }</span>} position="bottom center"><img className="popupimage" src={popupImageUrl}></img></Popup></Link></span>
    });

    let details = props.detail.map((detail, j) => {
        const includedsubentryrefs = detail.subentryrefs.filter((reference) => {
            return Number(reference) < Number(159) || (Number(313) < Number(reference) && Number(reference) < Number(446)) || (Number(792) < Number(reference) && Number(reference) < Number(851)) || Number(894) < Number(reference) 
        });
        return(
            <div key={j} className="subentry">
                <div className="subentrymain"> <span className="subentryid"> {detail.subentryid}</span> {detail.content}</div>
                <div className="subentryrefs">{includedsubentryrefs.map((ref, k) => {
                    const popupImageUrl = getPopupImageUrl(ref);
                    return <span key={k}><Link key={k} target="_blank" to={`/entries/${ref}`}><Popup trigger={<span>{ (k ? ', ' : '') + ref }</span>} position="bottom center"><img className="popupimage" src={popupImageUrl}></img></Popup></Link></span>
                })}
                </div>
            </div>
        );
    })

    let interval1 = Array.from(Array(159).keys(), n => n + 1);
    let interval2 = Array.from(Array(132).keys(), n => n + 314);
    let interval3 = Array.from(Array(58).keys(), n => n + 793);
    let interval4 = Array.from(Array(108).keys(), n => n + 895);
    let availableentries = interval1.concat(interval2).concat(interval3).concat(interval4);
    console.log(availableentries.indexOf(props.id));

    return (
        <div className="ui container grid">
            <div className="ui stackable two column grid">
                <div className="column sticky">
                    <div className="mymeta">
                        <i className="hashtag icon">{props.id}</i>{props.category}
                    </div>
                    <div className="ui image sticky">
                        <img src={imageUrl} alt={props.id}/>
                    </div>
                </div>
                <div className="column">
                    <div>{props.outline}</div>
                    <div>{outlinerefs}</div>
                    <hr></hr>
                    <div>{details}</div>
                    <div className='navigation link'>
                        <span>
                            <Link target="_self" to={`/entries/${availableentries[(availableentries.indexOf(props.id))-1]}`}>{ (props.id == 1 ? '' : 'Previous entry ' + '('  + availableentries[availableentries.indexOf(props.id)-1] + ')' ) }</Link>
                            <Link target="_self" to={`/entries/${availableentries[(availableentries.indexOf(props.id))+1]}`}>{ (props.id == 1002 ? '' : '\u00A0\u00A0\u00A0\u00A0\u00A0 Next entry ' + '('  + availableentries[availableentries.indexOf(props.id)+1] + ')' ) }</Link>
                        </span>
                    </div>             
                </div>
            </div>
        </div>    
    );
}


export default EntryShowItemDetail;

