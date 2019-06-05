import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({onSubmit, onChange}) => {
  return ( 
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type="email" className="form-control" onChange={(event) => onChange(event)} id="email" placeholder="Enter email" required />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" onChange={(event) => onChange(event)} id="password" placeholder="Password" required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <div className="account-prompt-text">
        <p>Don't have an account yet? <Link to="/signup">signup here</Link></p>
      </div>
    </form>
   );
}
 
export default LoginForm;
