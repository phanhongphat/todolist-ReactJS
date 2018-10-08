import React, { Component } from 'react';
import './App.css';
import MainForm from './components/MainForm';
import FormAdd from './components/FormAdd';
import items from './components/items';

 var uuidv4 = require('uuid/v4');

class App extends Component {

  constructor (props) {
    super (props);
    this.state = { 
      tasks : items
    };
  }

  componentWillMount(){                                   // save tasks in localStorage and take the ID(not change)
    if (localStorage && localStorage.getItem('tasks')){       // != null
        var tasks = JSON.parse(localStorage.getItem('tasks'));  
        this.setState({
            tasks : tasks 
        });
    }
  }

  handleSubmit = (task) => {      
      var {tasks} = this.state;
      tasks.push({
          id : uuidv4(),
          name : task.name,
          level : task.level
      });

      this.setState({
          tasks : tasks
      });
      localStorage.setItem('tasks' , JSON.stringify(tasks));
  }


  render() {

      var tasks = this.state.tasks;

    return (
       <div className="container">

    {/* <!-- TITLE : START --> */}
    <div className="page-header">
      <h1>Project 01 - ToDo List <small>ReactJS</small></h1>
    </div>
    { /*  <!-- TITLE : END --> */ }

    { /* <!-- CONTROL (SEARCH + SORT + ADD) : START --> */ }
    <div className="row">
     { /* <!-- SEARCH : START --> */ }
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Typing search..." />
          <span className="input-group-btn">
            <button  className="btn btn-info" type="button">Go!</button>
          </span>
        </div>
      </div>
     { /* <!-- SEARCH : END --> */ }

     { /* <!-- SORT : START --> */ }
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Sort by <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a role="button">Name ASC</a></li>
            <li><a role="button">Name DESC</a></li>
            <li role="separator" className="divider"></li>
            <li><a role="button">Level ASC</a></li>
            <li><a role="button">Level DESC</a></li>
          </ul>
          <span className="label label-success label-medium">NAME - DESC</span>
        </div>
      </div>
    { /* <!-- SORT : END --> */ }

     { /* <!-- ADD : START --> */ }
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" className="btn btn-info btn-block">Add Task</button>
      </div>
     { /* <!-- ADD : END --> */ }

    </div>
    { /* <!-- CONTROL (SEARCH + SORT + ADD) : END --> */ }
    
    { /* <!-- FORM : START --> */ }
      <FormAdd handleSubmit = { this.handleSubmit }/>
   { /* <!-- FORM : END --> */ }

    { /* <!-- LIST : START --> */ }

      <MainForm tasks = { tasks }/>

  </div>
    );
  }
}

export default App;
