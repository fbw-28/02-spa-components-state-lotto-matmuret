import React, { Component, Fragment } from "react";

import "./style.css";




//rce + invio
class App extends Component {
  state = {
      numberArr: [],
      number: null,
      hide:"none"
    };
  
  randomNumberGenerator = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };
  /* Hide=()=> {
    var x = document.ClassName(".container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } */
  luckynumbers = () => {
    this.setState({ number: this.randomNumberGenerator(10) ,});
    let tempAraay = [];
    let randomNumber = 0;
    for (let i = 0; i < 6; i++) {
      randomNumber = this.randomNumberGenerator(49);
      if (tempAraay.includes(randomNumber)) {
        randomNumber = this.randomNumberGenerator(49);
        i--;
      } else {
        tempAraay.push(randomNumber);
      }
    }
    this.setState({ numberArr:tempAraay,hide:"flex" });
  }
  
  render() {
    return (
      <Fragment>
        <div className="App">
          <h1> Lotto 6/49 </h1>
        </div>
        <div style={{"display":this.state.hide}} class="container" className="container">
          <div class="box"><p>{this.state.numberArr[0]} </p></div>
          <div class="box"><p>{this.state.numberArr[1]} </p> </div>
          <div class="box"><p>{this.state.numberArr[2]} </p> </div>
          <div class="box"><p>{this.state.numberArr[3]} </p> </div>
          <div class="box"><p>{this.state.numberArr[4]} </p> </div>
          <div class="box"><p>{this.state.numberArr[5]} </p> </div>
          <div class="box num"><p>{this.state.number} </p> </div>
        </div>
        <div class="buttons" >
        <button class="reset"
          onClick={() => {
            this.setState({ number: null, numberArr: [],hide:"none"});
          }}
        >
          {" "}
          Reset{" "}
        </button>
        <button class="show" onClick={this.luckynumbers}> Show my lucky numbers </button>
        </div>
      </Fragment>
    );
  }
}

export default App;
