import React, { Component } from 'react';

class FormAdd extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name : '',
      level : 1
    }
  }

  onChange = (event) => {
        var target = event.target;
        var name   = target.name;
        var value  = target.value;
    this.setState({
      [name] : value
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var task = {
      name : this.state.name,
      level: this.state.level
    };
    this.props.handleSubmit(task);  
  }

  render() {
    return (
          <div className="row">
              <div className="col-md-offset-7 col-md-5">
                <form handleSubmit = {this.handleSubmit} className="form-inline" >

                  <div className="form-group">
                    <label className="sr-only">label</label>
                    <input 
                          name        ="name" 
                          type        ="text" 
                          className   ="form-control ml-5" 
                          placeholder ="Typing name..." 
                          value       = {this.state.name}
                          onChange    = {this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="sr-only">label</label>
                    <select 
                          name="level" 
                          className="form-control mr-10" 
                          value       = {this.state.level}
                          onChange    = {this.onChange}
                    >
                      <option value="0">Small</option>
                      <option value="1">Medium</option>
                      <option value="2">High</option>
                    </select>
                  </div>

                  <button onClick = {this.handleSubmit} type="submit" className="btn btn-primary mr-10"> Submit</button>
                  <button type="button" className="btn btn-default mr-10"> Cancel</button>
                </form>
              </div>
    </div>
    );
  }
}

export default FormAdd;
