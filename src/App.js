import React from 'react';
import Test3 from './Components/Test_3'
import Test2 from './Components/Test_2'
import Toolbar from './Components/NavigationBar/ToolBar.js' 
//import SideDrawer from './Components/NavigationBar/SideDrawer.js'
import Backdrop from './Components/NavigationBar/Backdrop.js'

/*
class App extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
    sideDrawerOpen: false,
    clicked:false,
    itemsChecked:{}
  }
this.Checkitems = this.Checkitems.bind(this)}

  OnClickButton = () => {
    this.setState({
      clicked: true }
    )
  }

  Checkitems(child, e){
    let itemsChecked = this.state.itemsChecked;
    itemsChecked[child.id] = e.target.checked;
    this.setState({itemsChecked})
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop
    let sideDrawer

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
      sideDrawer = <SideDrawer buttonclicked = {this.Checkitems}/>
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main >
          <Test3 clicks = {this.state.clicked}/>
          
        </main>
        {console.log(this.state.itemsChecked)}
      </div>
    )
  }
}

export default App
*/

/*
function App() {
  return (
    <div style = {{height: '100%'}}>
      <Toolbar/>
      <SideDrawer/>
      <div>
      <Test3/>
      </div>
    </div>
  );
}

export default App;
*/

class App extends React.Component {
  state = {
      sideDrawerOpen: false,  
    }
  

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop
    let sideDrawer

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      {backdrop}
        
        <main >
          <Test2 parentCallback = {this.state.sideDrawerOpen}/>
          
        </main>
      </div>
    )
  }
}

export default App