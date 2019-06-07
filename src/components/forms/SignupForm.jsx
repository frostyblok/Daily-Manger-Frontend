import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = ({onSubmit, onChange, signupBtn}) => {
  return ( 
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" onChange={(event) => onChange(event)} id="name" placeholder="Enter name" required />
      </div>
      <div className="form-group">
        <input type="email" className="form-control" onChange={(event) => onChange(event)} id="email" placeholder="Enter email" required />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" onChange={(event) => onChange(event)} id="password" placeholder="Password" required />
      </div>
      <button type="submit" className="btn btn-primary">{signupBtn}</button>
      <div className="account-prompt-text text-center">
        <p>Already have an account? <Link to="/login">login here</Link></p>
      </div>
    </form>
   );
}
 
export default SignupForm;
