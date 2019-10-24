import React from 'react'

import './SideDrawer.css'
import Test3 from '../../Components/Test_3'

/*
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
*/

/*
export default class sideDrawer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        test46:'e',
        itemsChecked:{}
          }
          this.Checkitems = this.Checkitems.bind(this)
        }   
        
        Checkitems(child, e){
          let itemsChecked = this.state.itemsChecked;
          itemsChecked[child.id] = e.target.checked;
          this.setState({itemsChecked})
          return <Test3 imageSelect={this.state.test46}/>
        }
        
        getTest(child){
          const overLays = [1,2,3,4,5]
          return  overLays.map((child, i)=>
          <li>
            <a > <input type="checkbox" key={i}
            onChange={ (e)=>this.Checkitems(child, e) }/>OverLay 1</a>
            <p>Description</p>
            <p>Date </p>
          </li>
          )
        }
  
  render(){
    let drawerClasses = 'side-drawer'
    if (this.props.show) {
    drawerClasses = 'side-drawer open'
  }

return (
  <div>

  <nav className="side-drawer">
    <ul>
{this.getTest()}
    </ul>
</nav>
</div>
    )
  }
}*/

export default class sideDrawer extends React.Component{
  
        getTest(child){
          const overLays = [1,2,3,4]
          return  overLays.map((child, i)=>
          <li>
            <a > <input type="checkbox" key={i}
            onChange= {(e)=>this.props.buttonclicked(child, e)} />OverLay 1</a>
            <p>Description</p>
            <p>Date </p>
          </li>
          )
        }
  
  render(){
    let drawerClasses = 'side-drawer'
    if (this.props.show) {
    drawerClasses = 'side-drawer open'
  }

return (
  <div>

  <nav className="side-drawer">
    
    <ul>
    <button>Save</button>
{this.getTest()}
    </ul>
</nav>
</div>
    )
  }
}