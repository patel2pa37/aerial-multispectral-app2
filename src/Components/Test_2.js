/*import React, {Component} from 'react';
import DeckGL, {BitmapLayer} from 'deck.gl';
import ParcellLake from './Images/test.png';
import MapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoicGF0ZWwycGEiLCJhIjoiY2sxMnkyczM0MDNxOTNiczluMnRyY2tsMiJ9.0maYtnNj3fQVEJ2BLfvJXA'; // Set your mapbox token here
const MapStyle = {
    mapboxDefault:'mapbox://styles/patel2pa/ck12yhywb0jyo1cn7xavx8lik',
    openMapTile: 'https://api.maptiler.com/maps/hybrid/style.json?key=gQCnC8ZYWGvM8WdKZNmW'
  }
export default class Test2 extends Component {
    state = {
      viewport: {
        longitude: -78.498925,
        latitude: 38.930706,
        zoom: 15

      }
    };
  

  _onViewportChange = viewport => {
    this.setState({viewport});
  };

  render() {

    return (
      <MapGL
        {...this.state.viewport}
        width="50vw"
        height="50vw"
        onViewportChange={this._onViewportChange}
        mapStyle = {MapStyle.mapboxDefault}
        mapboxApiAccessToken={TOKEN}
      >
        {/*
        <DeckGL
          viewState={this.state.viewport}
          layers={[
            new BitmapLayer({
                id: 'bitmap-layer',
                bounds: [-78.4989250540139,37.9307066927,-78.4950953896, 37.933022282],
                image: ParcellLake,
                transparentColor: [0,255,255,0]
              })
          ]}
        />


      </MapGL>
    );
  }
}
//38.427586,-78.881445, 38.427350,-78.881247*/

