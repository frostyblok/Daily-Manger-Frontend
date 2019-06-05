import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth.js';
import LoginForm from '../forms/LoginForm.jsx';
import AuthPage from '../common/AuthPage.jsx';

export class Login extends Component {
  state = { 
    email: '',
    password: ''
   }

   onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
   };

   componentDidUpdate() {
     const { history, currentUser } = this.props;
     if (currentUser.type === 'LOGIN_USER') {
       history.push('/');
     }
   }

   onSubmit = (event) => {
     event.preventDefault();
    const { email, password } = this.state;
    const { loginUser } = this.props;
    const payload = { email, password };
    loginUser(payload);
   }
  render() { 
    return ( 
      <AuthPage>
        <LoginForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </AuthPage>
     );
  }
}

const mapStateToProps = ({currentUser}) => {
  return { currentUser };
}

export default connect(mapStateToProps, {loginUser})(Login);
 