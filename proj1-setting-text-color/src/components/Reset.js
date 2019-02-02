import React, { Component } from 'react';

class Reset extends Component {
   constructor(props){
       super(props);
   }

   onResetDefault =() =>{
    this.props.onSettingDefault(true);
   }

  render() {
    return (
        <button type="button" className="btn btn-primary" onClick={this.onResetDefault}>Reset</button>
    );
  }
}

export default Reset;
