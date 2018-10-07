import React, { Component } from 'react';

class FormAdd extends Component {
  render() {
    return (
          <div className="row">
              <div className="col-md-offset-7 col-md-5">
                <form action="" method="POST" className="form-inline"  >
                  <div className="form-group">
                    <label className="sr-only">label</label>
                    <input type="text" className="form-control ml-5" placeholder="Task Name" />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">label</label>
                    <select name="ds" id="inputDs" className="form-control mr-10" required="required">
                      <option value="0">Small</option>
                      <option value="1">Medium</option>
                      <option value="2">High</option>
                    </select>
                  </div>

                  <button type="button" className="btn btn-primary mr-10"> Submit</button>
                  <button type="button" className="btn btn-default mr-10"> Cancel</button>
                </form>
              </div>
    </div>
    );
  }
}

export default FormAdd;
