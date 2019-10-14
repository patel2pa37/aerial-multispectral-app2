import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <a href="/"> Overlays</a>
        </li>
        <div>-----------</div>
        <li>
          <a > <input type="checkbox"/>OverLay 1</a>
          <p>Description</p>
          <p>Date </p>
        </li>
        <li>
          <a> <input type="checkbox"/>Overlay 2</a>
          <p>Description</p>
          <p>Date </p>
        </li>
        <li>
          <a> <input type="checkbox"/> Overlay 3</a>
          <p>Description</p>
          <p>Date </p>
        </li>
        <li>
          <a> <input type="checkbox"/> Overlay 4</a>
          <p>Description</p>
          <p>Date </p>
        </li>
      </ul>
    </nav>
  )
}

export default sideDrawer