import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import DeckGL, {ArcLayer} from 'deck.gl';
import './Style.css'


const glAPI = "pk.eyJ1IjoicGF0ZWwycGEiLCJhIjoiY2sxMnkyczM0MDNxOTNiczluMnRyY2tsMiJ9.0maYtnNj3fQVEJ2BLfvJXA"
const MapStyle = {
  mapboxDefault:'mapbox://styles/patel2pa/ck12yhywb0jyo1cn7xavx8lik',
  openMapTile: 'https://api.maptiler.com/maps/hybrid/style.json?key=gQCnC8ZYWGvM8WdKZNmW'
}

class Map extends Component {

  state = {
    viewport: {
      width: "50vw",
      height: "50vw",
      latitude: 38.426526,
      longitude: -78.889614,
      zoom:4,
      bearing: 0,
      pitch: 30
    }
  };

  _onViewportChange = viewport => {
    this.setState({viewport});
  }

  render() {
    return (
      <div className = 'Basemap'>

      <ReactMapGL 
        {...this.state.viewport}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken = {glAPI}
        mapStyle = {MapStyle.mapboxDefault}
        >
        
      </ReactMapGL>
      </div>
    );
  }
}

export default Map;
//mapbox://styles/mapbox/satellite-v9
//mapbox://styles/patel2pa/ck12yhywb0jyo1cn7xavx8lik