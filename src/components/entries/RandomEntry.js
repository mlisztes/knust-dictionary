import React from 'react'; 
import EntryCard from './EntryCard';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

const RandomEntry = (props) => {   
    return(
        <div className="ui stackable eight column centered grid" style={{marginTop:'1.5vh'}}>    
        <div className="seven wide tablet four wide computer column">
            <h3>Welcome to Albrecht Knust's <br/>Dictionary of Kinetography Laban!</h3>
            Search for a symbol, <br />browse the dictionary, <br />or check out a random entry:
            <EntryCard id={props.getRandomEntry.id} category={props.getRandomEntry.category} image={props.getRandomEntry.image} outline={props.getRandomEntry.outline} outlinerefs={props.getRandomEntry.outlinerefs} detail={props.getRandomEntry.detail}/>
        </div>
        <div className="seven wide tablet four wide computer column">            
            <p>NEW to Kinetography Laban? <Link to ='/fourprinciples' >Check out the four principles.</Link></p>
            <p>This is a non-profit project that makes excerpts from Kunst's Dictionary available to the public for 
            education and research purposes. <Link to ='/about' >Read more about the project.</Link></p>
            <p>With the support of the French National Dance Center (Dance Research and Heritage Assistance Program 2021),<br />Hungarian National Talent Programme,<br />International Council of Kinetography Laban, and<br />Association Nationale des Notateurs du Mouvement.</p>
            <Image className="ui image" alt="supporters" src='/img/logos_combined.webp' centered style={{maxWidth:'100%'}} />        
        </div>
        </div>
    )
}


export default RandomEntry;

