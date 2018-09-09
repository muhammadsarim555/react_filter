import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text/Text/Text';
import Container from './App/App/Container';

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: ["Behari Boti", "Malai Boti", "Nahari", "Chicken Karahi", "Kaleji", "Sajji", "B R B Q", "Kabab"],
      result: [],
    }
  }

  search(e) {
    const { list } = this.state;
    const text = e;

    const result = list.filter((item) => {
      const itemToLower = item.toLowerCase();
      const lowerItem = item.toLowerCase();
      const lowerText = text.toLowerCase();
      return lowerItem.substring(0, lowerText.length).includes(lowerText)
    })
    this.setState({
      result, text
    })
    // console.log(this.state.result);

  }

  gettingList() {
    const { list, result, text } = this.state;
    const itemsResult = text ? result : list;
    
      return (
        <div>
         {text && <h3>You are typing '{text}' </h3>}
<ul>
        {
          itemsResult.map((v, i) => {
            return <li key={i}> {v} </li>
          })
        }
      </ul>
      </div>
    );
  }

  render() {


    return (
      <div className="App">
      <Container >
      <Text />
      </Container >

        <input type="text" placeholder="Search Food" onChange={(e) => this.search(e.target.value)} />
        {this.gettingList()}
      </div>
    );
  }
}

export default App;


// class name_with{
//   constructor (){
//   this.name = "sarim",
//   this.age = 17
//   }
//   }

//   new name_with()