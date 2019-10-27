import React from 'react';
import MapGL, {Source, Layer, CustomLayer} from '@urbica/react-map-gl';
import { MapboxLayer } from '@deck.gl/mapbox';
import DeckGL, {BitmapLayer} from 'deck.gl';
//import 'mapbox-gl/dist/mapbox-gl.css';
import TestImage from './Images/test.png'
import SideDrawer from '../Components/NavigationBar/SideDrawer.js'
import "./Style.css"
import axios from 'axios';


export default class Application extends React.Component {
  constructor(props){
  super(props);
  this.state = {
        viewport: {
          longitude: -78.4989250540139,
          latitude: 37.9307066927,
          zoom: 15,
          height: '',
          data:[]
        }
      }
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.setDataState = this.setDataState.bind(this)
      //this.getImages1 = this.getImages1.bind(this)
      this.getImages = this.getImages.bind(this)
}

      componentWillMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      


      updateWindowDimensions() {
        this.setState({ height: window.innerHeight+'px' });
      }

      _onViewportChange = viewport => {
        this.setState({viewport});
      };
      
      /*
      handleClick = () => {
        axios
        .patch(`http://127.0.0.1:8000/api/1/`, {
          boxChecked:true
          })
          .then(res => {
            console.log(res)
          }).then(axios
            .patch(`http://127.0.0.1:8000/api/2/`, {
              boxChecked:true
              })
        .then(res => {
          console.log(res)
        }))
          .catch(err => console.log(err.response.data));
        }*/

        setDataState(childData){
          this.setState({data:childData})
        }


      getImages(){
        const arr = [];
        if(undefined !== this.state.data && this.state.data.length){
          console.log(this.state.data,'the state data')
          
          for(var i = 0; i<this.state.data.length; i++){
            if(this.state.data[i].boxChecked === true){
              const myl = new MapboxLayer({
                id: (1+i).toString(),
                type: BitmapLayer,
                bounds: [-78.4989250540139,37.9307066927,-78.4950953896, 37.933022282],
                image: this.state.data[i].imageInfo,
                transparentColor: [0,0,0,0]
              })
              arr.push(<CustomLayer layer={myl}/>)
            }
            else{console.log('nothing found')}
          }
          
          
        }
        console.log(arr,'tretert')
        return arr;
      }

      /*
      getImages1(){
        const arr = []
        if(undefined !== this.state.data && this.state.data.length){
        console.log(this.state.data,'reyer')
        
        for(var i = 1;i<=2;i++){
          if(i==1){
        const myl = new MapboxLayer({
          id: i.toString(),
          type: BitmapLayer,
          bounds: [-78.4989250540139,37.9307066927,-78.4950953896, 37.933022282],
          image: this.state.data[i-1].imageInfo,
          transparentColor: [0,0,0,0]
        });
        arr.push(<CustomLayer layer={myl}/>)}
      else{const myl = new MapboxLayer({
        id: i.toString(),
        type: BitmapLayer,
        bounds: [-78.7889250540139,37.9307066927,-78.4950953896, 37.933022282],
        image: this.state.data[i-1].imageInfo,
        transparentColor: [0,0,0,0]
      });
      arr.push(<CustomLayer layer={myl}/>)}
    }
        console.log(arr)
        return arr
        }
        
        
      }*/

      renderimage(){
       return <MapGL
            style={{ width: '100%', height: this.state.height}}
            mapStyle="mapbox://styles/patel2pa/ck1lhtf917qtt1crviwyg2973"
            accessToken={'pk.eyJ1IjoicGF0ZWwycGEiLCJhIjoiY2sxMnkyczM0MDNxOTNiczluMnRyY2tsMiJ9.0maYtnNj3fQVEJ2BLfvJXA'}
            latitude={this.state.viewport.latitude}
            longitude={this.state.viewport.longitude}
            zoom={this.state.viewport.zoom}
            onViewportChange={this._onViewportChange}
          >
              {this.getImages()}
              {/*<CustomLayer layer={this.getImages1()} />*/}
          </MapGL>
      }


  
    render() {
      
      return (
        <div>
          {console.log(this.state.data,'state data2')}
          <SideDrawer parentCallback = {this.setDataState}/>
        <div className = "Wrapper">
          <div className = "BaseMap"> 
            {this.renderimage()}
        </div>

        <div className = "Button1" >
          <button >testButton1</button>
        </div>
        <div className = "Button2">
          <button>testButton2</button>
        </div>
        <div className = "Button3" >
          <button>testButton3</button>
        </div>
      </div>
      
      </div>
      );
    }
  }
  
  //onClick={(e) => this.handleClick()}

/*
  <Source id="_imageSource" type='image' url={"https://www.mapbox.com/images/foo.png"} coordinates={[
        [-78.49884384746906,37.933102066213365], 
        [-78.4989250540139,37.930706692753894], 
        [-78.4951767175799,37.930626916369], 
        [-78.49509538964169,37.93302228299286]
        ]}/>
        <Layer id="overlay" source="_imageSource" type="raster"  />*/


        /*
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

        */