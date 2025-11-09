import React from 'react';
import './Header.css';
import { Dropdown, Menu, MenuItem, Label } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ onClick }) => {
  const navigate = useNavigate();

  const onButtonClick = (e) => {
    e.preventDefault();
    const id = e.target.closest('div').id;
    console.log(id);
    onClick(id);
    navigate("/entries");
  };

  const categories = [
    "Direction Sign",
    "Pin Sign",
    "Supports",
    "Body Sign",
    "Analogy and Canon Signs",
    "The Score",
    "Old Ways of Writing",
    "Other Ways of Writing"
  ];

  const dropdownItems = [
    ["Principle", 10],
    ["The Alphabet", 91],
    ["Direction Sign", 24],
    ["Pin Sign", 33],
    ["Supports", 75],
    ["Body Sign", 132],
    ["Analogy and Canon Signs", 58],
    ["The Score", 8],
    ["Old Ways of Writing", 53],
    ["Other Ways of Writing", 47]
  ];

  return (
    <Menu text size='large'>
      <MenuItem>
        <Link to="/" className="item">
          <h3><i className="yellow book icon"></i>Knust Dictionary</h3>
        </Link>
      </MenuItem>  

      <Menu.Menu position='right' size='large'>  
        {/* --- Filter Buttons --- */}
        {categories.map((label, index) => (
          <MenuItem key={index} id="desktop-only">
            <div id={label} onClick={onButtonClick}>
              <img 
                className="filterbutton" 
                width="50" 
                alt={label} 
                src={`/img/${label.toLowerCase().replace(/ /g, "_")}_button.png`} 
              />
            </div>                  
          </MenuItem>
        ))}

        {/* --- Dropdown Menu --- */}
        <MenuItem>
          <Dropdown className="ui pointing dropdown top right" icon={{name:'ellipsis vertical', size:'large'}}>  
            <Dropdown.Menu align='center'>
              <Dropdown.Header content='Entries by Category' align="center" />
              {dropdownItems.map(([label, count], i) => (
                <Dropdown.Item key={i} id={label}>
                  <div id={label} onClick={onButtonClick}>
                    {label} <Label color='yellow'>{count}</Label>
                  </div>
                </Dropdown.Item>
              ))}
              <Dropdown.Divider />
              <Dropdown.Item>
                <Link to="/fourprinciples" style={{color:'rgba(0,0,0,.87)'}}>
                  <div>The Four Principles</div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/about" style={{color:'rgba(0,0,0,.87)'}}>
                  <div>About</div>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </MenuItem>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
