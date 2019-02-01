import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : [{
        id:1,
        name:"Apple iPhone 6 Plus 16GB",
        price:"15.000.000",
        status: true,
        image:"https://images-na.ssl-images-amazon.com/images/I/51We979ipcL._SX385_.jpg"
      },{
        id:2,
        name:"Samsung Galaxy S7",
        price:"19.000.000",
        status: true,
        image:"https://images-na.ssl-images-amazon.com/images/I/71VEYuQ8yrL._SY550_.jpg"
      },{
        id:3,
        name:"Oppo F1s",
        price:"7.000.000",
        status: true,
        image:"https://images-na.ssl-images-amazon.com/images/I/41UFVnYtHrL._SX425_.jpg"
      }],
      isActive : true
    };

    // this.onSetState = this.onSetState.bind(this);
  }

  onSetState = () => {
    // if (this.state.isActive) {
    //   this.setState({
    //     isActive: false
    //   });
    // } else {
    //   this.setState({
    //     isActive: true
    //   });
    // }

    this.setState({
       isActive: !this.state.isActive
    });
  }

  render() {
    let elements = this.state.products.map((product, index) => {
      let result = null;
      if (this.state.isActive) {
        result = <tr key={index}>
        <td>{index}</td>
        <td>{product.name}</td>
        <td><span className="label label-success">{product.price } VND</span></td>
      </tr>
      }
        return result;
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <a className="navbar-brand">State</a>
            </div>
        </nav>
        
        <div className="container">
          <div className="row">
            <div className="row">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {elements}
                </tbody>
              </table>
              
              <button type="button" className="btn btn-warning" onClick={this.onSetState}>Active: {this.state.isActive === true ? "true" : "false"}</button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
