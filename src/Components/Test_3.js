import React from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

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
      
  
    render() {
      
      return (
        <MapGL
        style={{ width: '100%', height: '400px' }}
        mapStyle="mapbox://styles/patel2pa/ck12yhywb0jyo1cn7xavx8lik"
        accessToken={'pk.eyJ1IjoicGF0ZWwycGEiLCJhIjoiY2sxMnkyczM0MDNxOTNiczluMnRyY2tsMiJ9.0maYtnNj3fQVEJ2BLfvJXA'}
        latitude={this.state.viewport.latitude}
        longitude={this.state.viewport.longitude}
        zoom={this.state.viewport.zoom}
        onViewportChange={this._onViewportChange}
      />
      );
    }
  }
  