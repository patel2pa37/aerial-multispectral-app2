import React from 'react'

import './SideDrawer.css'
import Test3 from '../../Components/Test_3'
import axios from 'axios';

function getData(){
  
}

/*
const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <a href="/"> Overlays</a>
        </li>
        <div>-----------</div>
        <li>
          <a > <input type="checkbox"/>OverLay 1</a>
          <p>Description</p>
          <p>Date </p>
        </li>
        <li>
          <a> <input type="checkbox"/>Overlay 2</a>
          <p>Description</p>
          <p>Date </p>
        </li>
        <li>
          <a> <input type="checkbox"/> Overlay 3</a>
          <p>Description</p>
          <p>Date </p>
        </li>
        <li>
          <a> <input type="checkbox"/> Overlay 4</a>
          <p>Description</p>
          <p>Date </p>
        </li>
      </ul>
    </nav>
  )
}

export default sideDrawer
*/

/*
export default class sideDrawer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        test46:'e',
        itemsChecked:{}
          }
          this.Checkitems = this.Checkitems.bind(this)
        }   
        
        Checkitems(child, e){
          let itemsChecked = this.state.itemsChecked;
          itemsChecked[child.id] = e.target.checked;
          this.setState({itemsChecked})
          return <Test3 imageSelect={this.state.test46}/>
        }
        
        getTest(child){
          const overLays = [1,2,3,4,5]
          return  overLays.map((child, i)=>
          <li>
            <a > <input type="checkbox" key={i}
            onChange={ (e)=>this.Checkitems(child, e) }/>OverLay 1</a>
            <p>Description</p>
            <p>Date </p>
          </li>
          )
        }
  
  render(){
    let drawerClasses = 'side-drawer'
    if (this.props.show) {
    drawerClasses = 'side-drawer open'
  }

return (
  <div>

  <nav className="side-drawer">
    <ul>
{this.getTest()}
    </ul>
</nav>
</div>
    )
  }
}*/

export default class sideDrawer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    data:[]
    }
    this.handleSave = this.handleSave.bind(this)
    this.setstate = this.setstate.bind(this)
  }
  

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/`)
      .then(res => {
        console.log(res.data)
        this.setState({data:res.data})
        this.props.parentCallback(res.data)
      })
  }

  setstate(){axios.get(`http://127.0.0.1:8000/api/`)
  .then(res => {
    //console.log(res.data)
    this.setState({data:res.data})
    console.log(this.state.data)
    this.props.parentCallback(res.data)
    //window.location.reload();

  })}



        getTest(child){
          const overLays = this.state.data
          return  overLays.map((child)=>
          <li>
            <a > <input type="checkbox" key={child.id} checked = {this.state.data[child.id-1].boxChecked}
            onChange= {(e)=>this.handleclick(child.id)} />OverLay {child.id}</a>
            <p>Description</p>
            <p>Date </p>
          </li>
          )
        }

        handleclick(child){
          let dataCopy = JSON.parse(JSON.stringify(this.state.data))
          dataCopy[child-1].boxChecked = !dataCopy[child-1].boxChecked
          this.setState({data:dataCopy})
        }

        handleSave = () =>{
          let dataLength = this.state.data.length
          var i;
          for (i = 1; i<=dataLength;i++){
          if(i == dataLength){

          axios.patch(`http://127.0.0.1:8000/api/${i}/`,{
            boxChecked:this.state.data[i-1].boxChecked
          })
                  .then(res => {
                    console.log(res.data)
          })
        }

          else{
            axios.patch(`http://127.0.0.1:8000/api/${i}/`,
            {
              boxChecked:this.state.data[i-1].boxChecked
            })
            .then(res => {
              console.log(res.data)
            })
          }
        }
          setTimeout(this.setstate,1000)
        }
      
  
  render(){
    let drawerClasses = 'side-drawer'
    if (this.props.show) {
    drawerClasses = 'side-drawer open'
  }

return (
  <div>

  <nav className="side-drawer">
    
    <ul>
    <button onClick = {(e)=>this.handleSave()}>Save</button>
      {this.getTest()}
    </ul>
</nav>
</div>
    )
  }
}

/*
handleClick = () =>{
  axios.patch(`http://127.0.0.1:8000/api/1/`, {
          boxChecked:true
          })
          .then(res => {
            console.log(res)
          })
}*/

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

        /*
handleclick = async n=>{
  for (let i = 0, p = Promise.resolve(); i < n.length; i++) {
    p = p.then(_ => new Promise(resolve =>
        setTimeout(function () {
          axios
          .patch(`http://127.0.0.1:8000/api/1/`, {
            boxChecked:true
            })
            .then(res => {
              console.log(res)
            })
            resolve();
        }, Math.random() * 1000)
    ));
}
}*/

//https://codeburst.io/asynchronous-code-inside-an-array-loop-c5d704006c99