import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    var a = 5;
    var name = "Minh Tri Le";
    var b = 7;
    var product = {
      id : 1,
      name : "iphone 7 plus",
      price : "15.000.000"
    };
    return (
      <div>
        <h2>
          a: {a} <br/>
          b: {b} <br/>
          a + b: {a + b} <br/>
        </h2>
        <h3>
          name: {name}
        </h3>
        <h3>
          ID: {product.id}<br/>
          Name: {product.name}<br/>
          Price: {product.price} VND
        </h3>
      </div>
    );
  }
}

export default App;
