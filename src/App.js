import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
export default class App extends Component {
  state = {
    Fulname: "amal",
    bio: "islamic finance",
    img:"https://sf.viepratique.fr/wp-content/uploads/sites/2/2014/02/shutterstock_162125588.jpg",
    pro: "doctorat",
    isShown: true,
    count:0
  };
  handelshow =() =>{this.setState({
    isShown:!this.state.isShown
  })}
  componentDidMount (){
    setInterval(() => {
      this.setState({ count:this.state.count+1

      })
    }, 1000);
  }

  render() {
    return (
    <div>
      <p>{this.state.count}</p>
        <button onClick={this.handelshow} >show profile </button>
      {this.state.isShown===true?<div>
        <h1> {this.state.Fulname}</h1>
      <h2>{this.state.bio}</h2>
      <h4>{this.state.pro}</h4>
      <img src={this.state.img} alt =""/>
      </div>:<h1>click on the button to show the profile </h1>}  
    </div>)
  }
}

