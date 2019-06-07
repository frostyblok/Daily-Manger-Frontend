import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthPage from '../common/AuthPage.jsx';
import SignupForm from '../forms/SignupForm.jsx';
import { signupUser } from '../../actions/auth.js';
import Helpers from '../../helpers/authLoader.js';

export class Signup extends Component {
  state = { 
    name: '',
    email: '',
    password: ''
   }

   onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
   };

   componentDidUpdate() {
     const { history, currentUser } = this.props;
     if (currentUser.type === 'SIGNUP_USER') {
       history.push('/');
     }
   }

   onSubmit = (event) => {
     event.preventDefault();
    const { name, email, password } = this.state;
    const { signupUser } = this.props;
    const payload = { name, email, password };
    signupUser(payload)
   }
  render() { 
    const btnStatus = Helpers.authLoader(this);
    return ( 
      <AuthPage>
        <SignupForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          signupBtn={btnStatus}
        />
      </AuthPage>
     );
  }
}

const mapStateToProps = ({currentUser}) => {
  return { currentUser };
}

export default connect(mapStateToProps, {signupUser})(Signup);
 