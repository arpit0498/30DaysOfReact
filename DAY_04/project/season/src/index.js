import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
    constructor(props){
      super(props);
    //This is the only time we do direct assignment to this.state
      this.state ={lat: null};
        window.navigator.geolocation.getCurrentPosition(
        (position) => {
            //we called setState
            this.setState({lat:position.coords.latitude});

            //we did not!!!
            //this.state.lat=position.cords.latitude
        },
        (err) =>{
            this.setState({errorMessage:err.message});
        }
    );
    }

    //react says we have to define render
    render(){
      
        return(
        <div>
            Latitude:{this.state.lat}    
        <br/>    
            Error:{this.state.errorMessage}
        </div>
        );
    }
}

ReactDOM.render (
    <App /> , document.querySelector('#root')
);