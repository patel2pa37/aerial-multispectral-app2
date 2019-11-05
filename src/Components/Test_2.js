import React, {Component} from 'react';
import DeckGL, {BitmapLayer} from 'deck.gl';
import MapGL,{Marker, GeolocateControl, Popup} from 'react-map-gl'
import Pin from './NavigationBar/pin'
import SideDrawer from './NavigationBar/SideDrawer'
import './Style.css'
import testImage from './Images/rgba.png'
import RGBA from './Images/merged.png'
//node_modules/react-map-gl/dist/es6/index

const TOKEN = 'pk.eyJ1IjoicGF0ZWwycGEiLCJhIjoiY2sxMnkyczM0MDNxOTNiczluMnRyY2tsMiJ9.0maYtnNj3fQVEJ2BLfvJXA'; // Set your mapbox token here
const MapStyle = {
    mapboxDefault:'mapbox://styles/patel2pa/ck1lhtf917qtt1crviwyg2973',
    openMapTile: 'https://api.maptiler.com/maps/hybrid/style.json?key=gQCnC8ZYWGvM8WdKZNmW'
  }

  const geolocateStyle = {
    position: 'absolute',
    top: 0,
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
      data:[],
      markerData:[[-78.49710828437009, 37.93041227710639],[-78.49693662299572, 37.93120774351641],[-78.49549895896115, 37.930767699330175]],
      popupInfo:null,
      delete:false,
      add: false,
      inputValue: []
    }
    this.setDataState = this.setDataState.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this._onClickMethod = this._onClickMethod.bind(this)
    this._onViewportChange = this._onViewportChange.bind(this)
  }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ height: window.innerHeight-40+'px',width:window.innerWidth+'px' });
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
                  transparentColor: [0,0,0,0]
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
    //console.log(e.lngLat)
    //this.setState({markerData:e.lngLat})
    if (this.state.add){
    var joined = this.state.markerData.concat([e.lngLat]);
    this.setState({ markerData: joined })
    console.log(e)}
  }
  
  _onDblClickMethod(e){
    console.log(e.target)
  }

  renderMarkers(){
    let markerArray = []
    if(undefined !== this.state.markerData && this.state.markerData.length){
      for(var i = 0;i<this.state.markerData.length;i++){
      markerArray.push(<Marker latitude={this.state.markerData[i][1]} longitude={this.state.markerData[i][0]}>
      <Pin size={20} key = {i} onClick = {()=>this._onDblClickMethod(i)} />
      </Marker>)
      }
      console.log(markerArray)
    }
    return markerArray
  }

  testRenderMarker(){
    const markerData_ = this.state.markerData
    return this.state.markerData.map((child, index)=>
    <Marker latitude={this.state.markerData[index][1]} longitude={this.state.markerData[index][0]} >
      <Pin size={20} key={index} onClick={(e)=>this.testclick(e,index)} />
    </Marker>)

  }

  testclick(e, i){
 console.log(i)
 if(this.state.delete){
   this.setState({delete:false})
 this.setState(state => {
  const markerData = state.markerData.filter((item, j) => i !== j);
  return {
    markerData,
  };
})
}else{
  this.setState({popupInfo:[this.state.markerData[i],i]})
  
}
};

testPopup = (lat, lon) => {
  const {popupInfo} = this.state;

  return (
    popupInfo && (<Popup
        tipSize={8}
        anchor="bottom"
        longitude={this.state.popupInfo[0][0]}
        latitude={ this.state.popupInfo[0][1]}
        closeOnClick={false}
        onClose={() => this.setState({popupInfo: null})}
      >
        <input value={this.state.inputValue[this.state.popupInfo[1]]} onChange={evt => this.updateInputValue(evt, this.state.popupInfo[1])}/>
      </Popup>))
}

updateInputValue = (evt,index) =>{
  const updatedArray = [...this.state.inputValue];
   updatedArray[index] = evt.target.value;
   this.setState({
    inputValue: updatedArray,
    });
/*
  this.setState({
    inputValue: evt.target.value
  });*/
}

_renderDrawTools = () => {
  // copy from mapbox
  return (
    <div className='Button1'>
      <div >
        <button
          title="Polygon tool (p)"
          onClick = {()=>this.setState({add:true})}
        >Add pins</button>
        <button
          className="Button"
          title="Delete"
          onClick = {()=>this.setState({add:false,delete:true})}
        >Delete pins</button>
      </div>
    </div>
  );
};
  

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
        onClick = {(e)=>this._onClickMethod(MapGL, e)}
        touchRotate = {true}
      >
      <DeckGL
            viewState={this.state.viewport}
            layers={[
              new BitmapLayer({
                  id: 'bitmap-layer',
                  bounds: [-78.4977459718528, 37.92754239722171,-78.49195042016456, 37.9330963517],
                  image: RGBA       
                })
            ]}
          />
          
      {this.getImages()}
      {this.testRenderMarker()}
      {this.testPopup()}
    <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: false}}
          trackUserLocation = {true}
    />
{this._renderDrawTools()}
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
  //g
