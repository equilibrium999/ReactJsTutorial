import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  showInfoProduct(product){
    if (product.status) {
      return <h3>
        ID: {product.id}<br/>
        Name: {product.name}<br/>
        Price: {product.price} VND <br/>
        Status: {product.status ? 'Active' : 'Pending'}
      </h3>
    }
  }


  render() {
    var a = 5;
    var name = "Minh Tri Le";
    var b = 7;
    var product = {
      id : 1,
      name : "iphone 7 plus",
      price : "15.000.000",
      status: true
    };
    var users = [
      {id:1, name: "Nguyen Van A", age: 18},{id:2, name: "Tran Van B", age: 19},{id:3, name: "Ly Van C", age: 20}
    ];
    var elements = users.map((user, index) => {
      return <div key={user.id}>
        <h2>Tên: {user.name}</h2>
        <p>Tuổi:  {user.age}</p>
      </div>
    });
    return (
      <div className="ml-30">
        <h2>
          a: {a} <br/>
          b: {b} <br/>
          a + b: {a + b} <br/>
        </h2>
        <h3>
          name: {name}
        </h3>
        {/* <h3>
          ID: {product.id}<br/>
          Name: {product.name}<br/>
          Price: {product.price} VND <br/>
          Status: {product.status ? 'Active' : 'Pending'}
        </h3> */}
        {this.showInfoProduct(product)}
        <br/>
        <hr/>
        {elements}
      </div>
    );
  }
}

export default App;
