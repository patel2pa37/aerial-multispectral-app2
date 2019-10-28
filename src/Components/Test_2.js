import React, {Component} from 'react';
import DeckGL, {BitmapLayer} from 'deck.gl';
import ParcellLake from './Images/test.png';
import MapGL from 'react-map-gl';
import Draw from '@urbica/react-map-gl-draw';

import SideDrawer from './NavigationBar/SideDrawer'
import './Style.css'
import { EditableGeoJsonLayer, DrawPolygonMode } from 'nebula.gl';

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
      const layer = new EditableGeoJsonLayer({
        id: 'geojson-layer',
        data: this.state.data,
        mode: DrawPolygonMode,
        selectedFeatureIndexes,
  
        onEdit: ({ updatedData }) => {
          this.setState({
            data: updatedData,
          });
        }
      });
      return (
   
        <MapGL
          {...this.state.viewport}
          width="50vw"
          height="50vw"
          onViewportChange={this._onViewportChange}
          mapStyle = {MapStyle.mapboxDefault}
          mapboxApiAccessToken={TOKEN}
        >
          
          <Draw
      onDrawCreate={({features}) => this.setState({features})}
      onDrawUpdate={({features}) => this.setState({features})}
    />
      {/*this.getImages()*/}
  
        </MapGL>
        
      );
    }
  }
  /*
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
      data:[]
    }
    this.setDataState = this.setDataState.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.drawPolygons = this.drawPolygons.bind(this)
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
      console.log(this.state.data,'the state data')
      
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
        else{console.log('nothing found')}
      }
      
      
    }
    console.log(arr,'tretert')
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

  drawPolygons(){
    const layer = new EditableGeoJsonLayer({
      id: 'geojson-layer',
      data1: this.state.data1,
      mode: DrawPolygonMode,
      selectedFeatureIndexes,

      onEdit: ({ updatedData }) => {
        this.setState({
          data1: updatedData,
        });
      }
    });
    return layer
  }

  render() {
    const layer = new EditableGeoJsonLayer({
      id: 'geojson-layer',
      data1: this.state.data1,
      mode: DrawPolygonMode,
      selectedFeatureIndexes,

      onEdit: ({ updatedData }) => {
        this.setState({
          data1: updatedData,
        });
      }
    });
    return (
 
      <MapGL
        {...this.state.viewport}
        width={this.state.width}
        height={this.state.height}
        onViewportChange={this._onViewportChange}
        mapStyle = {MapStyle.mapboxDefault}
        mapboxApiAccessToken={TOKEN}
      >
        
        <DeckGL {...this.state.viewport} layers={[layer]} />
    {this.getImages()}

      </MapGL>
      
    );
  }
}*/

//38.427586,-78.881445, 38.427350,-78.881247

/*

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
            
            <DeckGL {...this.state.viewport} layers={[layer]} />
        {this.getImages()}
    
          </MapGL>
          </div>
          <div className = "Button1" >
              <button onClick = {(e)=>this.getGrid()}>Grid {this.GridButton()}</button>
            </div>
          </div>
          </div>


*/
