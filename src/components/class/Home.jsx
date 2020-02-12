import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { Link } from 'react-router-dom';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopUp from '../pure/PopUp';
import { allActivities, createActivity, getActivity } from '../../actions/activities';
import '../../assets/stylesheets/Home.scss';

export class Home extends Component {
  state = { 
    title: '',
    showPopUp: false
   };

   componentDidMount() {
     const { allActivities } = this.props;
      allActivities();
   };

   onChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
   };

   onSubmit = (event) => {
     event.preventDefault();
     const { title } = this.state;
     const { createActivity } = this.props;
     createActivity(title);
     this.togglePopUp();
   };

   togglePopUp = () => {
     this.setState({
       showPopUp: !this.state.showPopUp
     });
   };

  render() { 
    const { activitiesList } = this.props;
    TimeAgo.addLocale(en);
    return ( 
      <div className="container">
        <div className="page-content d-flex">
          {this.state.showPopUp && <PopUp onChange={this.onChange}onSubmit={this.onSubmit} closePopUp={this.togglePopUp} />}
          <div className="col-sm-12">
            <h3 className="activities text-center m-20">Activities</h3>
            <div className="list-activities row">
            {activitiesList && activitiesList.map(activity => {
              const timeago = new TimeAgo('en-US');
              const new_date = timeago.format(new Date(activity.created_at));
              return (
              <div className="card col-md-3 activity-card" key={activity.id}>
                <div className="card-body text-center">
                <div className="title">{activity.title}</div>
                <div className="date">{new_date}</div>
                <Link to="#">View more</Link></div>
              </div>);
            })}
            </div>
          </div>
          <div className="create-icon">
            <FontAwesomeIcon onClick={this.togglePopUp} icon={faPlusCircle} />
          </div>
        </div>
      </div>
     );
  }
}

const mapStateToProps = ({activities}) => ({
  activities,
  activitiesList: activities.activitiesList,
  activity: activities.activity
});

export default connect(mapStateToProps, {allActivities, createActivity, getActivity})(Home);
