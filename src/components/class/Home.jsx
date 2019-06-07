import React, { Component } from 'react';
import '../../assets/stylesheets/Home.scss';

export default class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="container">
        <div className="page-content d-flex">
          <div className="col-sm-12">
            <h3 className="activities text-center m-20">Activities</h3>
            <div className="list-activities row">
              <div className="card col-md-3 activity-card">
                <div className="card-body"></div>
              </div>
              <div className="card col-md-3 activity-card">
                <div className="card-body"></div>
              </div>
              <div className="card col-md-3 activity-card">
                <div className="card-body"></div>
              </div>
            </div>
          </div>
          <div className="create-icon">Create Icon</div>
        </div>
      </div>
     );
  }
}
