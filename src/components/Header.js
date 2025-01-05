import React from 'react';
import './Header.css';
import { Dropdown, Menu, MenuItem, Label } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

class Header extends React.Component {

  onButtonClick = e => {
      e.preventDefault();
      console.log(e.target.parentElement.id);
      this.props.onClick(e.target.parentElement.id);
      this.props.history.push("/entries");        
    }

    render(){
      return(
                  <Menu text size='large'>
                  <MenuItem>
                      <Link to="/" className="item">
                        <h3><i className="yellow book icon"></i>Knust Dictionary</h3>
                      </Link>
                  </MenuItem>  

                  <Menu.Menu position='right' size='large'>  

                  <MenuItem id="desktop-only">
                    <div id="Direction Sign" onClick={this.onButtonClick}><img className="filterbutton" width="50" alt="directionsigns" src='/img/dir_button.png'></img></div>                  
                  </MenuItem>

                  <MenuItem id="desktop-only">
                    <div id="Pin Sign" onClick={this.onButtonClick}><img className="filterbutton" width="50" alt="pinsigns" src='/img/pin_button.png'></img></div>                  
                  </MenuItem>

                  <MenuItem id="desktop-only">
                    <div id="Body Sign" onClick={this.onButtonClick}><img className="filterbutton" width="50" alt="bodysigns" src='/img/body_button.png'></img></div>                  
                  </MenuItem>

                  <MenuItem id="desktop-only">
                    <div id="Analogy and Canon Signs" onClick={this.onButtonClick}><img className="filterbutton" width="50" alt="analogyandcanonsigns" src='/img/analogy_button.png'></img></div>                  
                  </MenuItem>

                  <MenuItem id="desktop-only">
                    <div id="The Score" onClick={this.onButtonClick}><img className="filterbutton" width="50" alt="thescore" src='/img/score_button.png'></img></div>                  
                  </MenuItem>

                  <MenuItem id="desktop-only">
                    <div id="Old Ways of Writing" onClick={this.onButtonClick}><img className="filterbutton" width="50" alt="oldwaysofwriting" src='/img/old_button.png'></img></div>                  
                  </MenuItem>

                  <MenuItem id="desktop-only">
                    <div id="Other Ways of Writing" onClick={this.onButtonClick}><img className="filterbutton" width="50" alt="otherwaysofwriting" src='/img/other_button.png'></img></div>                  
                  </MenuItem>

                  <MenuItem>
                  <Dropdown className="ui pointing dropdown top right" icon={{name:'ellipsis vertical', size:'large'}}>  
                      <Dropdown.Menu align='center'>
                      <Dropdown.Header content='Entries by Category' align="center" />
                          <Dropdown.Item id="Principle"><div id="Principle" onClick={this.onButtonClick}>Principles <Label color='yellow'>10</Label></div></Dropdown.Item>
                          <Dropdown.Item id="The Alphabet"><div id="The Alphabet" onClick={this.onButtonClick}>The Alphabet <Label color='yellow'>91</Label></div></Dropdown.Item>
                          <Dropdown.Item id="Direction Sign"><div id="Direction Sign" onClick={this.onButtonClick}>Direction Signs <Label color='yellow'>24</Label></div></Dropdown.Item>
                          <Dropdown.Item id="Pin Sign"><div id="Pin Sign" onClick={this.onButtonClick}> Pin Signs <Label color='yellow'>33</Label></div></Dropdown.Item>
                          <Dropdown.Item id="Body Sign"><div id="Body Sign" onClick={this.onButtonClick}> Body Signs <Label color='yellow'>132</Label></div></Dropdown.Item>
                          <Dropdown.Item id="Analogy and Canon Signs"><div id="Analogy and Canon Signs" onClick={this.onButtonClick}> Analogy and Canon Signs <Label color='yellow'>58</Label></div></Dropdown.Item>
                          <Dropdown.Item id="The Score"><div id="The Score" onClick={this.onButtonClick}> The Score <Label color='yellow'>8</Label></div></Dropdown.Item>
                          <Dropdown.Item id="Old Ways of Writing"><div id="Old Ways of Writing" onClick={this.onButtonClick}> Old Ways of Writing <Label color='yellow'>53</Label></div></Dropdown.Item>
                          <Dropdown.Item id="Other Ways of Writing"><div id="Other Ways of Writing" onClick={this.onButtonClick}> Other Ways of Writing <Label color='yellow'>47</Label></div></Dropdown.Item>
                      <Dropdown.Divider />
                          <Dropdown.Item><Link to="/fourprinciples" style={{color:'rgba(0,0,0,.87)'}}><div>The Four Principles</div></Link></Dropdown.Item>
                          <Dropdown.Item><Link to="/about" style={{color:'rgba(0,0,0,.87)'}}><div>About</div></Link></Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                  </MenuItem>
                  </Menu.Menu>
                  </Menu>
      );
  }
};

export default withRouter(Header);

