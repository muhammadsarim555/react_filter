import React, { Component } from 'react';
import Container from '../../App/App/Container';
class Text extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {


    return (
      <div className="App">
      {/* <Container >  */}

      <h1> Hello , i am composable Component.</h1>
      {/* </Container> */}
      </div>
    );
  }
}

export default Text;


// class name_with{
//   constructor (){
//   this.name = "sarim",
//   this.age = 17
//   }
//   }

//   new name_with()