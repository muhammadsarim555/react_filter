import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    const firstName = "Muhammad"
    const name = "sarim";
    const number = 6;

    const obj = [ 
      {
        name : "sarim",
        age : 17,

      },
      {
        name  :"khan",
        age : 70,
      },
    
    
  ]
console.log(obj);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <a href="https://www.google.com" target="_blank" title="Google" >Click for Google  </a>
        </header>
        <p className="App-intro">
          Welcome To {firstName} {name}.
        </p>
          {console.log(obj  , "arrayofobject")}
        <ul>
          {
            obj.map((v,i) =>{
              return <li> {v.name} {v.age}  </li>
            
              })
        }
        </ul>

        {(number ===4 ) ? console.log( "this is right") : console.log( "not right")
        
}
      </div>
    );
  }
}

export default App;
