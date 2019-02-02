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
    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onClick = () => {
    console.log("Đây là app component!");
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

  onAddProduct = () => {
    alert(this.refs.name.value);
  }

  onAddToCart(text){
    alert(text);
  }

  render() {
    let elements = this.state.products.map((product, index) => {
      let result = null;
      if (this.state.isActive) {
        result = <tr key={index}>
        <td>{index}</td>
        <td>{product.name}</td>
        <td><span className="label label-success">{product.price } VNĐ</span></td>
        <td><a className="btn btn-primary" onClick={() => {this.onAddToCart(product.name)}}>Mua Ngay</a></td>
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
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="panel panel-danger">
                  <div className="panel-heading">
                      <h3 className="panel-title">Thêm Sản Phẩm</h3>
                  </div>
                    <div className="panel-body">
                      <div className="form-group">
                      <label>Tên sản phẩm</label>
                      <input type="text" className="form-control" ref="name"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Submit</button>
                      </div>
                  </div>
              </div>
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Mua Ngay</th>
                  </tr>
                </thead>
                <tbody>
                  {elements}
                </tbody>
              </table>
              <button type="button" className="btn btn-warning" onClick={this.onSetState}>Active: {this.state.isActive === true ? "true" : "false"}</button>
              
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-warning" onClick={this.onClick}>Click Me!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
