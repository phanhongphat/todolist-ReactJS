import React, { Component } from 'react';

class MainForm extends Component {

    constructor (props) {
      super(props);
      this.state = {

      }
    }

    handleDelete = (id) =>{
      this.props.onDelete(id);
    }

  render() {

      var {tasks} = this.props; 

      var elementTask = tasks.map((task , index) => {
          return (
                  <tr key={index} task = {task} index ={index}>
                    <td className="text-center">{index + 1}</td>
                    <td>{task.name}</td>
                    <td className="text-center">{
                      task.level == 0 ? <span className="label label-default">Small</span> : 
                      task.level == 1 ? <span className="label label-info">Medium</span> :
                        <span className="label label-danger">High</span> 
                      }
                      </td>
                    <td>
                      <button type="button" className="btn btn-warning">Edit</button>
                      <button onClick = {() => this.handleDelete(task.id)} type="button" className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
            )
    });

    return (
          <div className="panel panel-success" >
              <div className="panel-heading">List Task</div>
              <table className="table table-hover ">
                <thead>
                  <tr>
                    <th style={{width : '10% '}} className="text-center">#</th>
                    <th>Task</th>
                    <th style={{width : '20% '}} className="text-center">Level</th>
                    <th style={{width : '20% '}}>Action</th>
                  </tr>
                </thead>

                <tbody>
                 { elementTask }
                </tbody>
              </table>
            </div>
    );
  }
}

export default MainForm;
