import React, { Component } from 'react';
import logo from '../.././logo.svg';
import '../.././App.css';

class Search extends Component {
  constructor(){
    super()
   
  }

  work(){
    return(
      <h1>the work is being tested </h1>
    );
  }



  render() {

    return (
      <div className="App">
      {this.work()}
      <h1>sarimkha aksdhfk</h1>

      </div>
    );
  }
}

export default Search;


// class name_with{
//   constructor (){
//   this.name = "sarim",
//   this.age = 17
//   }
//   }
  
//   new name_with()