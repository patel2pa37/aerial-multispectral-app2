import React from 'react';
import MapGL, {Source, Layer, CustomLayer} from '@urbica/react-map-gl';
import { MapboxLayer } from '@deck.gl/mapbox';
import DeckGL, {BitmapLayer} from 'deck.gl';
import SideDrawer from '../Components/NavigationBar/SideDrawer.js'
import "./Style.css"



const data2 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49570048764997,
              37.931263341657285
            ],
            [
              -78.49656257892843,
              37.929987267409416
            ],
            [
              -78.49653441573378,
              37.9299735158403
            ],
            [
              -78.49609989787336,
              37.930616663396506
            ],
            [
              -78.49567013810884,
              37.93125480140289
            ],
            [
              -78.49570048764997,
              37.931263341657285
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49565940927278,
              37.93125057022408
            ],
            [
              -78.49563526939164,
              37.93124105007087
            ],
            [
              -78.49650304465138,
              37.929961001122386
            ],
            [
              -78.496525843428,
              37.929967348001846
            ],
            [
              -78.49565940927278,
              37.93125057022408
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49562468984834,
              37.93123392235057
            ],
            [
              -78.49649104336015,
              37.929952921478794
            ],
            [
              -78.49646556237451,
              37.92994445897105
            ],
            [
              -78.4956023342121,
              37.93122418307579
            ],
            [
              -78.49562468984834,
              37.93123392235057
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49559294648054,
              37.931216778509615
            ],
            [
              -78.4964514055539,
              37.92993857116026
            ],
            [
              -78.49642324235924,
              37.92992799302339
            ],
            [
              -78.49556808416963,
              37.93120273524766
            ],
            [
              -78.49559294648054,
              37.931216778509615
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49555735533357,
              37.93119638847486
            ],
            [
              -78.49640993667947,
              37.929924524739114
            ],
            [
              -78.49638177348481,
              37.92991183097229
            ],
            [
              -78.49553315449998,
              37.931187440048355
            ],
            [
              -78.49555735533357,
              37.93119638847486
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49551854040811,
              37.93118393179988
            ],
            [
              -78.49637000427725,
              37.92990920227461
            ],
            [
              -78.4963418410826,
              37.92989968194768
            ],
            [
              -78.49549252535422,
              37.93117856815562
            ],
            [
              -78.49551854040811,
              37.93118393179988
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49548581983169,
              37.93117327917658
            ],
            [
              -78.49633001214994,
              37.929895388736426
            ],
            [
              -78.49630319005979,
              37.92988904185076
            ],
            [
              -78.4954571130981,
              37.93116319351772
            ],
            [
              -78.49548581983169,
              37.93117327917658
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49544499276908,
              37.93115721893661
            ],
            [
              -78.49629659413131,
              37.92987939017176
            ],
            [
              -78.4962764775637,
              37.92987092765559
            ],
            [
              -78.49541683548023,
              37.93114938286049
            ],
            [
              -78.49544499276908,
              37.93115721893661
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49541012995769,
              37.93114515167562
            ],
            [
              -78.49626204094818,
              37.92986553221561
            ],
            [
              -78.49624058327606,
              37.92985812751259
            ],
            [
              -78.49538708315424,
              37.93113441178238
            ],
            [
              -78.49541012995769,
              37.93114515167562
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49537098990015,
              37.931124891614104
            ],
            [
              -78.49622837170011,
              37.92985287162491
            ],
            [
              -78.49620423181898,
              37.92984017784569
            ],
            [
              -78.49534783823327,
              37.93111134767282
            ],
            [
              -78.49537098990015,
              37.931124891614104
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49533308608369,
              37.93110500089211
            ],
            [
              -78.49619427811837,
              37.929834095708294
            ],
            [
              -78.49616611492371,
              37.92982563318689
            ],
            [
              -78.49531183135247,
              37.93109499397497
            ],
            [
              -78.49533308608369,
              37.93110500089211
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49529573809838,
              37.93109710956888
            ],
            [
              -78.49615295481453,
              37.92982496469424
            ],
            [
              -78.49613283824692,
              37.92981438654106
            ],
            [
              -78.49527855793883,
              37.931087444767066
            ],
            [
              -78.49529573809838,
              37.93109710956888
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49526246468474,
              37.93107369340372
            ],
            [
              -78.4961207846253,
              37.92980411643418
            ],
            [
              -78.49609396253516,
              37.92979353827794
            ],
            [
              -78.49523933552553,
              37.931065514498506
            ],
            [
              -78.49526246468474,
              37.93107369340372
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49522860668947,
              37.931059167713855
            ],
            [
              -78.49607976916434,
              37.929784837591846
            ],
            [
              -78.49605697038771,
              37.92977425943286
            ],
            [
              -78.49520204681704,
              37.931048131105015
            ],
            [
              -78.49522860668947,
              37.931059167713855
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49519131798098,
              37.93104601550971
            ],
            [
              -78.4960489155647,
              37.92977098217057
            ],
            [
              -78.49602611678807,
              37.92976146182578
            ],
            [
              -78.4951664687988,
              37.93103717704472
            ],
            [
              -78.49519131798098,
              37.93104601550971
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49515708106725,
              37.931030830257626
            ],
            [
              -78.496012705743,
              37.92975534362886
            ],
            [
              -78.49598990696637,
              37.929746881098424
            ],
            [
              -78.49513153726747,
              37.931025869053784
            ],
            [
              -78.49515708106725,
              37.931030830257626
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.4951194673269,
              37.93102058006378
            ],
            [
              -78.49597896175533,
              37.92974170725496
            ],
            [
              -78.49595079856067,
              37.92972901345655
            ],
            [
              -78.49509517388492,
              37.931015307220484
            ],
            [
              -78.4951194673269,
              37.93102058006378
            ]
          ]
        ]
      },
      "properties": {}
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -78.49508310394435,
              37.93100896043151
            ],
            [
              -78.49593853041574,
              37.929723094965034
            ],
            [
              -78.49591841384813,
              37.929712516797146
            ],
            [
              -78.49505920923815,
              37.93100430519822
            ],
            [
              -78.49508310394435,
              37.93100896043151
            ]
          ]
        ]
      },
      "properties": {}
    }
  ]
};


const myFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    /* insert features here */
    
  ]
};

const selectedFeatureIndexes = [];

export default class Application extends React.Component {
  constructor(props){
  super(props);
  this.state = {
        viewport: {
          longitude: -78.4989250540139,
          latitude: 37.9307066927,
          zoom: 15,
          height: ''
        },
        data:[],
        Grid: false,
        data2:myFeatureCollection,
        features: [],
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
            mapStyle="mapbox://styles/patel2pa/ck12yhywb0jyo1cn7xavx8lik"
            accessToken={'pk.eyJ1IjoicGF0ZWwycGEiLCJhIjoiY2sxMnkyczM0MDNxOTNiczluMnRyY2tsMiJ9.0maYtnNj3fQVEJ2BLfvJXA'}
            latitude={this.state.viewport.latitude}
            longitude={this.state.viewport.longitude}
            zoom={this.state.viewport.zoom}
            onViewportChange={this._onViewportChange}
          >
              {this.getImages()}
              {/*<CustomLayer layer={this.getImages1()} />*/}
              <Source id="maine" type="geojson" data={data2} />
              <Layer
                  id="maine"
                  type="fill"
                  source="maine"
                  paint={{
                    'fill-color': '#088',
                    'fill-opacity': 0.8
                  }}
                />
          </MapGL>
      }
      
      RenderGrid(){
        if (this.state.Grid == true){
          return <MapGL
            style={{ width: '100%', height: this.state.height}}
            mapStyle="mapbox://styles/patel2pa/ck12yhywb0jyo1cn7xavx8lik"
            accessToken={'pk.eyJ1IjoicGF0ZWwycGEiLCJhIjoiY2sxMnkyczM0MDNxOTNiczluMnRyY2tsMiJ9.0maYtnNj3fQVEJ2BLfvJXA'}
            latitude={this.state.viewport.latitude}
            longitude={this.state.viewport.longitude}
            zoom={this.state.viewport.zoom}
            onViewportChange={this._onViewportChange}
          >
            
              {this.getImages()}<Source id="maine" type="geojson" data={data2} />
          <Layer
              id="maine"
              type="fill"
              source="maine"
              paint={{
                'fill-color': '#088',
                'fill-opacity': 0.8
              }}
            /></MapGL>
        }
        else{
          return<MapGL
          style={{ width: '100%', height: this.state.height}}
          mapStyle="mapbox://styles/patel2pa/ck12yhywb0jyo1cn7xavx8lik"
          accessToken={'pk.eyJ1IjoicGF0ZWwycGEiLCJhIjoiY2sxMnkyczM0MDNxOTNiczluMnRyY2tsMiJ9.0maYtnNj3fQVEJ2BLfvJXA'}
          latitude={this.state.viewport.latitude}
          longitude={this.state.viewport.longitude}
          zoom={this.state.viewport.zoom}
          onViewportChange={this._onViewportChange}
        >
            {this.getImages()} 

        </MapGL>
        
        }
      }

      GridButton(){
        if (this.state.Grid == true){
          return 'On'
        }
        else{
          return 'Off'
        }
      }

      getGrid(){
        this.setState(prevState => ({Grid:!prevState.Grid}))
      }


  
    render() {
      
      let sideDrawer

      if (this.props.parentCallback) {
        sideDrawer =  <SideDrawer parentCallback = {this.setDataState}/>
      }

      return (
        <div>
          {console.log(this.state.data,'state data2')}
         {sideDrawer}
        <div className = "Wrapper">
          <div className = "BaseMap"> 
            {this.RenderGrid()}
        </div>

        <div className = "Button1" >
          <button onClick = {(e)=>this.getGrid()}>Grid {this.GridButton()}</button>
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