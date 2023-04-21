import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../utils/common';
import axios from 'axios';

const Login = props => {
  const history = useNavigate();
  const username = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('https://reqres.in/api/login', {email:email.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      history('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError(error.response.data.error);
    });
  }

  return (
    <div>
      <div className="_-01-log-in clip-contents">
      <div className="log-in clip-contents">
        <div className="group-454">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/56t8n6kidaa-1%3A53?alt=media&token=98d7788d-f0fb-47f7-a8ad-9001ea339a86"
            alt="Not Found"
            className="logo"
          />
          <p className="dashboard-kit">Dashboard Kit</p>
          <p className="log-in-to-dashboard-kit">Log In to Dashboard Kit</p>
          <p className="enter-your-email-and-pas">
            Enter your email and password below
          </p>
          {/* <div className="textfield-label-textfield-default">
            <p className="label">Username</p>
            <div className="group-277">
              <input className="transparent" type="text"  {...username} autoComplete="new-password" />
            </div>
          </div> */}
          <div className="textfield-label-textfield-default">
            <p className="label">email</p>
            <div className="group-277">
              <input className="transparent" type="text"  {...email} autoComplete="new-password" />
            </div>
          </div>
          <div className="textfield-label-icon-default">
            <p className="label-2">password</p>
            <div className="group-1019">
              <input className="transparent" type="password" {...password} autoComplete="new-password" />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/56t8n6kidaa-I1%3A50%3B1%3A20?alt=media&token=d897c2f9-0533-4eb3-bd74-cc57ce354b06"
                alt="Not Found"
                className="icon-hide-active"
              />
            </div>
          </div>
          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
          <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} className="button-contained-primary-default"/>
           
         
          <div className="account">
            <p className="don-thave-an-account">Don’t have an account?</p>
            <div className="button-text-button-primary-default">
              <a className="btn-label-1" onClick={()=>history('/Register')}>Sign up</a>
            </div>
          </div>
        </div>
        <p className="forgot-password">Forgot password?</p>
      </div>
    </div>
    </div>
    
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;