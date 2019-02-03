import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtUserName: "",
      txtPassword: "",
      txtDesc: "",
      sltGender: 0,
      rdLang: 'vi',
      chkbStatus: true
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event){
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]:value
    }); 
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                  <form onSubmit={this.onHandleSubmit}>
                     <div className="form-group">
                      <label>Username: </label>
                      <input type="text" className="form-control" name="txtUserName" onChange={this.onHandleChange}/>
                    </div>
                    <div className="form-group">
                      <label>Password: </label>
                      <input type="password" className="form-control" name="txtPassword" onChange={this.onHandleChange}/>
                    </div>
                    <div className="form-group">
                      <label>Description: </label>
                      <textarea name="txtDesc" className="form-control" rows="3" onChange={this.onHandleChange}></textarea>
                    </div>
                    
                    <label>Gender:  </label>
                    <select className="form-control" name="sltGender" value={this.state.sltGender} onChange={this.onHandleChange}>
                      <option value={0}>Female</option>
                      <option value={1}>Male</option>
                    </select>
                    <br/>
                    
                    <label>Language: </label>
                    <div className="radio">
                      <label>
                        <input type="radio" name="rdLang" value="vi" onChange={this.onHandleChange} checked={this.state.rdLang === "vi"}/>
                        Vietnamese
                      </label>
                      <br/>
                      <label>
                        <input type="radio" name="rdLang" value="en" onChange={this.onHandleChange} checked={this.state.rdLang === "en"}/>
                        English
                      </label>
                    </div>
                    
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value={true} name="chkbStatus" onChange={this.onHandleChange} checked={this.state.chkbStatus === true}/>
                        Status
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                    <button type="reset" className="btn btn-default">Reset</button>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;