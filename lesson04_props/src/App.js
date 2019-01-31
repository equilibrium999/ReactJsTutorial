import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';

class App extends Component {
  render() {
    var products = [{
      id:1,
      name:"Apple iPhone 6 Plus 16GB",
      price:"15000000",
      status: true,
      image:"https://images-na.ssl-images-amazon.com/images/I/51We979ipcL._SX385_.jpg"
    },{
      id:2,
      name:"Samsung Galaxy S7",
      price:"19000000",
      status: false,
      image:"https://images-na.ssl-images-amazon.com/images/I/71VEYuQ8yrL._SY550_.jpg"
    },{
      id:3,
      name:"Oppo F1s",
      price:"7000000",
      status: true,
      image:"https://images-na.ssl-images-amazon.com/images/I/41UFVnYtHrL._SX425_.jpg"
    }];

    let elements = products.map((product, index) => {
      let result = "";
      if (product.status) {
        result = <Product key={product.id}
        price={product.price}
        image={product.image}>
      {product.name}
      </Product>
      }
        return result;
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <a className="navbar-brand">Bài 4: Props</a>
            </div>
        </nav>
        
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                 { elements}

                 {/* <Product name="Apple iPhone 6 Plus 16GB"
                 price="15000000"
                 image="https://images-na.ssl-images-amazon.com/images/I/51We979ipcL._SX385_.jpg"/>
                 <Product name="Samsung Galaxy S7"
                 price="19000000"
                 image="https://images-na.ssl-images-amazon.com/images/I/71VEYuQ8yrL._SY550_.jpg"/>
                 <Product name="Oppo F1s"
                 price="7000000"
                 image="https://images-na.ssl-images-amazon.com/images/I/41UFVnYtHrL._SX425_.jpg"/> */}

                 {/* <Product 
                 price="15000000"
                 image="https://images-na.ssl-images-amazon.com/images/I/51We979ipcL._SX385_.jpg">
                 Apple iPhone 6 Plus 16GB
                 </Product>
                 <Product
                 price="19000000"
                 image="https://images-na.ssl-images-amazon.com/images/I/71VEYuQ8yrL._SY550_.jpg">
                 Samsung Galaxy S7
                 </Product>
                 <Product
                 price="7000000"
                 image="https://images-na.ssl-images-amazon.com/images/I/41UFVnYtHrL._SX425_.jpg">
                 Oppo F1s
                 </Product> */}
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
