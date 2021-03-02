import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'
import myImage from './profile.png'
import Profile from './profile/Profile.js'
class App extends Component {
  constructor(){
    super()
    this.state ={ 
  fullName:"Zied Ben Yahia",
  bio: "", 
  imgSrc: myImage, 
  profession: "Mechatronics engineer", 
  show : false , 
  
    }
  }
  handleClick=()=>{
    this.setState(prevState =>({
      show: !prevState.show  
    })) 
  }
  
  render() {
   
    return(
      <>
      <button onClick={this.handleClick}> Show profile </button>
      {this.state.show? 
      <>
      <Profile myName ={this.state.fullName} myProfession={this.state.profession} 
      myImg= {this.state.imgSrc} /> 
      </> : null
      }
      </>
    )
}
}


export default App;
