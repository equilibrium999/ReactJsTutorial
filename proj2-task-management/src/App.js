import React, { Component } from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isFormOpen: false
        };
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem("tasks")) {
            var tasks = JSON.parse(localStorage.getItem("tasks"));
            this.setState({
                tasks: tasks
            });
        }
    }

    onGenerateData = () => {
        var tasks = [
            {
                id: this.generateId(),
                name: "Programming Study",
                status: true
            },{
                id: this.generateId(),
                name: "Swimming",
                status: false
            },{
                id: this.generateId(),
                name: "Trekking",
                status: true
            }
        ];
        this.setState({tasks:tasks});
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    s4() {
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateId(){
        return this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4();
    }
    
    onToggleForm = () => {
        this.setState({
            isFormOpen: !this.state.isFormOpen
        });
    }

    onCloseForm = () => {
        this.setState({
            isFormOpen: false
        });
    }
    
  render() {
      var {tasks, isFormOpen}=this.state;
      var elmTaskForm = isFormOpen ? <TaskForm onCloseForm={this.onCloseForm}/> : "";
    return (
      <div className="container">
        <div className="text-center">
            <h1>Task Management</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={isFormOpen ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                {/* Form */}
                {elmTaskForm}
            </div>
            <div className={isFormOpen ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                    <span className="fa fa-plus mr-5"></span>Add Task
                </button>
                <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}>
                    Generate Data
                </button>
                {/* Search - Sort */}
                <Control/>
                {/* List */}
                <TaskList tasks = {tasks}/>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
