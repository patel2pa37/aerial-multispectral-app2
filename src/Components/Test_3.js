import React from 'react';
import MapGL, {Source, Layer, CustomLayer} from '@urbica/react-map-gl';
import { MapboxLayer } from '@deck.gl/mapbox';
import DeckGL, {BitmapLayer} from 'deck.gl';
//import 'mapbox-gl/dist/mapbox-gl.css';
import TestImage from './Images/test.png'
import "./Style.css"

const myDeckLayer = new MapboxLayer({
  id: 'deckgl-arc',
  type: BitmapLayer,
  bounds: [-78.4989250540139,37.9307066927,-78.4950953896, 37.933022282],
  image: TestImage,
  transparentColor: [0,0,0,0]
});


export default class Application extends React.Component {
    state = {
        viewport: {
          longitude: -78.4989250540139,
          latitude: 37.9307066927,
          zoom: 15
  
        }
      };

      _onViewportChange = viewport => {
        this.setState({viewport});
      };
      
      
      handleClick = () => {
        
        console.log('this is:');
      }
  
    render() {
      
      return (
        <div className = "Wrapper">
          <div className = "BaseMap"> 
            <MapGL
            style={{ width: '100%', height: '800px'}}
            mapStyle="mapbox://styles/patel2pa/ck1lhtf917qtt1crviwyg2973"
            accessToken={'pk.eyJ1IjoicGF0ZWwycGEiLCJhIjoiY2sxMnkyczM0MDNxOTNiczluMnRyY2tsMiJ9.0maYtnNj3fQVEJ2BLfvJXA'}
            latitude={this.state.viewport.latitude}
            longitude={this.state.viewport.longitude}
            zoom={this.state.viewport.zoom}
            onViewportChange={this._onViewportChange}
          >
              <CustomLayer layer={myDeckLayer} />
          </MapGL>
        </div>

        <div  className = "Button1" >
          <button onClick={(e) => this.handleClick(e)}>testButton1</button>
        </div>
        <div className = "Button2">
          <button>testButton2</button>
        </div>
        <div className = "Button3" >
          <button >testButton3</button>
        </div>
      
      </div>
      );
    }
  }
  

  /*
  <Source id="_imageSource" type='image' url={"https://www.mapbox.com/images/foo.png"} coordinates={[
        [-78.49884384746906,37.933102066213365], 
        [-78.4989250540139,37.930706692753894], 
        [-78.4951767175799,37.930626916369], 
        [-78.49509538964169,37.93302228299286]
        ]}/>
        <Layer id="overlay" source="_imageSource" type="raster"  />*/