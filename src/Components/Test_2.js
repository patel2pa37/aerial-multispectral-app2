import React, {Component} from 'react';
import DeckGL, {BitmapLayer} from 'deck.gl';
import ParcellLake from './Images/BNDVI1.png';
import MapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoicGF0ZWwycGEiLCJhIjoiY2sxMnkyczM0MDNxOTNiczluMnRyY2tsMiJ9.0maYtnNj3fQVEJ2BLfvJXA'; // Set your mapbox token here
const MapStyle = {
    mapboxDefault:'mapbox://styles/patel2pa/ck12yhywb0jyo1cn7xavx8lik',
    openMapTile: 'https://api.maptiler.com/maps/hybrid/style.json?key=gQCnC8ZYWGvM8WdKZNmW'
  }
export default class Test2 extends Component {
    state = {
      viewport: {
        longitude: -78.881445,
        latitude: 38.427586,
        zoom: 17

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
        mapStyle = {MapStyle.openMapTile}
        mapboxApiAccessToken={TOKEN}
      >
        <DeckGL
          viewState={this.state.viewport}
          layers={[
            new BitmapLayer({
                id: 'bitmap-layer',
                bounds: [-78.88323,38.424915,-78.881614, 38.426526,],
                image: ParcellLake
              })
          ]}
        />
      </MapGL>
    );
  }
}
//38.427586,-78.881445, 38.427350,-78.881247