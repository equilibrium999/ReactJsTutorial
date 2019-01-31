import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src={this.props.image} alt={this.props.children}/>
            {/* <img src={this.props.image} alt={this.props.name}/> */}
            <div className="caption">
              {/* <h3>{this.props.name}</h3> */}
              <h3>{this.props.children}</h3>
              <p>{this.props.price} VNĐ
              </p>
              <p>
                 <a className="btn btn-primary">Mua Ngay</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
