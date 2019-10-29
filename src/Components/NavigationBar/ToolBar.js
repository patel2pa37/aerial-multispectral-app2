import React from 'react';
import ToggleButton from './ToggleButton.js';
import './ToolBar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <ToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar__logo">
        <a href="/">Aerial Imaging</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
        <li>
            <a href="/">Login</a>
          </li>
          {/*
          <li>
            <a href="/">test1</a>
          </li>
          <li>
            <a href="/">test2</a>
          </li>*/}
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar