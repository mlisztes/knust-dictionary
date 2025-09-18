import React from 'react';
import { Image } from 'semantic-ui-react';

const About = () => {
    return(

        <div className="ui stackable six column centered grid" style={{marginTop:'1.5vh'}}>
          <div className="ten wide tablet six wide computer column">
          <div className="ui divided items" style={{textAlign: "justify"}}>
          <div className="item">
            <div className="content">
              <div className="header">Print edition</div>
                <p>The present website contains excerpts from Albrecht Knust's 
                    Dictionary of Kinetography Laban, published in 1979 by MacDonald and Evans.</p>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header">Online adaptation</div>
                <p>The online adaptation was designed and built by Mónika Éva Lisztes using create-react-app.
                    The aim of this project is to make Albrecht Knust's wonderful work accessible to a wide audience 
                    and support people in learning and using Kinetography Laban.
                </p>
                <p>To get the best experience of the website, view the site on a desktop or tablet. While responsive design is
                  implemented, it is not recommended to use the website on mobile phones with smaller than 5.5-inch screens.
                </p>
                <p>The recommended browsers are Mozilla Firefox and Google Chrome.</p>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header">Copyright</div>
                <p>Content: <i className="ui copyright outline icon"></i>Anthony Lange <br/>
                Code and database: <i className="ui copyright outline icon"></i>2025 Mónika Éva Lisztes</p>
                <p>The content is published with the permission of the copyright owner. In line with the expressed permission, all
                    content on this website can solely be used for non-profit purposes, especially for education and research.</p>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header">Supporters</div>
                <p>With the support of the French National Dance Center (Dance Research and Heritage Assistance Program 2021), Hungarian National Talent Programme, International Council of Kinetography Laban, and Association Nationale des Notateurs du Mouvement.</p>
            </div>
          </div>

          <div className="ui stackable two column grid" >
            <div className="eight wide tablet four wide computer column">
              <a href='https://www.cnd.fr/en/' target='_blank' rel="noopener noreferrer"><Image className="ui small image" alt="CND" src='/img/CND_logo.png' centered /></a>
            </div>
            <div className="twentyfour wide tablet twelve wide computer column" >
              <a href='https://ickl.org/' target='_blank' rel="noopener noreferrer"><Image className="ui fluid image" alt="ICKL" src='/img/ICKL_logo.png' centered /></a>
            </div>
          </div>
          <div className="ui stackable two column grid">
            <div className="sixteen wide tablet eight wide computer column">
              <a href='https://nemzetitehetsegprogram.hu/' target='_blank' rel="noopener noreferrer"><Image className="ui medium image" alt="NTP" src='/img/NTP_logo.png' centered /></a>
            </div>
            <div className="sixteen wide tablet eight wide computer column">
            <a href='http://www.annm.org' target='_blank' rel="noopener noreferrer"><Image className="ui medium image" alt="ANNM" src='/img/titre_annm.png' centered style={{maxHeight: '60px', width: 'auto'}}/></a>
            </div>
          </div>

          </div>
          </div>
        </div>
    );
};

export default About;