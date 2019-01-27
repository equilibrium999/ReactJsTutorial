import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="thumbnail">
                  <img src="https://www.91-img.com/pictures/apple-iphone-6-plus-mobile-phone-large-1.jpg" alt=""/>
                  <div className="caption">
                    <h3>iPhone 6 Plus</h3>
                    <p>16.000.000 VNĐ</p>
                    <button type="button" className="btn btn-success">Mua Hàng</button>
                  </div>
              </div>
          </div> 
      </div>
    );
  }
}

export default Product;
