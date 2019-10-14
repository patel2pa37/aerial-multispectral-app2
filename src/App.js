import React from 'react';
import Test3 from './Components/Test_3'
import Toolbar from './Components/NavigationBar/ToolBar.js' 
import SideDrawer from './Components/NavigationBar/SideDrawer.js'
import Backdrop from './Components/NavigationBar/Backdrop.js'

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
      sideDrawer = <SideDrawer />
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main >
          <Test3/>
          
        </main>
      </div>
    )
  }
}

export default App


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