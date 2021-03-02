import React , {Component} from 'react'


 
class Profile extends Component {
    
    constructor(props)
    {
        super(props)
        this.state={
            counter: 0 
        }
        
    }
    
    
    componentDidMount()
    {
        this.TimerId =setInterval(()=>{this.setState((prevState)=>({
          counter : prevState.counter+1
        }))}, 1000)
    }
    componentWillUnmount()
    {
        clearInterval(this.TimerId)
    }
   
   render(){
    console.log(this.state.counter)
       return(
           <>
           <div style={{display:'flex', flexDirection:'column', justifyContent: 'space-around' , alignContent:'center' , margin:'20%'}}>
           <div style={{margin:'20px'}}> Hello this is my profile </div>
           <div stye ={{margin:'20px'}}>{this.props.myName}</div>
           <div style={{margin:'20px'}}>{this.props.myProfession} </div>
           <div>this is a counter : {this.state.counter}</div>
            <div>
                <img src= {this.props.myImg} alt="this is my Image"/>
            </div>
            </div>
            
            </>
       )
       

   }
}
export default Profile