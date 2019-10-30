import React, {Component} from 'react';
import DeckGL, {BitmapLayer} from 'deck.gl';
import MapGL,{Marker, GeolocateControl} from 'react-map-gl';
import Pin from './NavigationBar/pin'

import SideDrawer from './NavigationBar/SideDrawer'
import './Style.css'

const myFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    /* insert features here */
  ]
};

const selectedFeatureIndexes = [];
const TOKEN = 'pk.eyJ1IjoicGF0ZWwycGEiLCJhIjoiY2sxMnkyczM0MDNxOTNiczluMnRyY2tsMiJ9.0maYtnNj3fQVEJ2BLfvJXA'; // Set your mapbox token here
const MapStyle = {
    mapboxDefault:'mapbox://styles/patel2pa/ck12yhywb0jyo1cn7xavx8lik',
    openMapTile: 'https://api.maptiler.com/maps/hybrid/style.json?key=gQCnC8ZYWGvM8WdKZNmW'
  }

  const geolocateStyle = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,
    
  };

  
export default class Test2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewport: {
        longitude: -78.4989,
        latitude: 37.9307,
        zoom: 15,
      },
      width:'',
      height:'',
      data1: myFeatureCollection,
      data:[],
      markerData:[]
    }
    this.setDataState = this.setDataState.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)

    this._onViewportChange = this._onViewportChange.bind(this)
  }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ height: window.innerHeight+'px',width:window.innerWidth+'px' });
    }
  
  _onViewportChange = viewport => {
    this.setState({viewport});
  };

  setDataState(childData){
    this.setState({data:childData})
  }

  getImages(){
    const arr = [];
    if(undefined !== this.state.data && this.state.data.length){
     
      
      for(var i = 0; i<this.state.data.length; i++){
        if(this.state.data[i].boxChecked === true){
          arr.push(<DeckGL
            viewState={this.state.viewport}
            layers={[
              new BitmapLayer({
                  id: 'bitmap-layer',
                  bounds: [-78.4989250540139,37.9307066927,-78.4950953896, 37.933022282],
                  image: this.state.data[i].imageInfo,
                  transparentColor: [0,255,255,0]
                })
            ]}
          />)
        }
        else{}
      }
      
      
    }
    
    return arr;
  }

  getGrid(){
    this.setState(prevState => ({Grid:!prevState.Grid}))
  }

  GridButton(){
    if (this.state.Grid == true){
      return 'On'
    }
    else{
      return 'Off'
    }
  }

  _onClickMethod(map,e){
    console.log(e.lngLat)
    this.setState({markerData:e.lngLat})
  }
  
  renderMarkers(){
    let markerArray = []
    if(undefined !== this.state.markerData && this.state.markerData.length){
      return  <Marker latitude={this.state.markerData[1]} longitude={this.state.markerData[0]} >
      <Pin size={20} />
      </Marker>

    }
  }

  render() {
    let sideDrawer

      if (this.props.parentCallback) {
        sideDrawer =  <SideDrawer parentCallback = {this.setDataState}/>
      }
    return (<div>
      {sideDrawer}
      <MapGL
        {...this.state.viewport}
        width={this.state.width}
        height={this.state.height}
        onViewportChange={this._onViewportChange}
        mapStyle = {MapStyle.mapboxDefault}
        mapboxApiAccessToken={TOKEN}
        onClick = {(e)=>this._onClickMethod(MapGL,e)}
      >
        
      
      {this.renderMarkers()}

    {this.getImages()}
    <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: false}}
          //trackUserLocation = {true}
    />

      </MapGL>
     
      </div>
    );
  }
}




/*
  export default class Test2 extends Component {

        state = {
        viewport: {
          longitude: -78.4989,
          latitude: 37.9307,
          zoom: 15,
        },
        features: [],
        width:'',
        height:'',
        data1: myFeatureCollection,
        data:myFeatureCollection
    }
  
     
    
    _onViewportChange = viewport => {
      this.setState({viewport});
    };
  
 
  
    render() {
     
      return (
        <div>
        <div>
          {<SideDrawer parentCallback = {this.setDataState}/>}
          <div className = "BaseMap"> 

          <MapGL
            {...this.state.viewport}
            width={this.state.width}
            height={this.state.height}
            onViewportChange={this._onViewportChange}
            mapStyle = {MapStyle.mapboxDefault}
            mapboxApiAccessToken={TOKEN}
          >
            
            
    
          </MapGL>
          </div>
          <div className = "Button1" >
              <button onClick = {(e)=>this.getGrid()}>Grid {this.GridButton()}</button>
            </div>
          </div>
          </div>
        
        
      );
    }
  }*/