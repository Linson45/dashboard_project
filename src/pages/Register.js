import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../utils/common';
import axios from 'axios';

export const Register = (props) => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        setError(null);
    setLoading(true);
    axios.post('https://reqres.in/api/register', { email:email, password: pass }).then(response => {
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
        <div className="_-01-log-in clip-contents">
        <div className="log-in clip-contents">
            <div className="group-454">
            <h2 className="log-in-to-dashboard-kit">Register</h2>
        <form className="enter-your-email-and-pas" >
            
            {/* <div className="textfield-label-textfield-default">
            <p className="label">Username</p>
            <div className="group-277">
            <input className="transparent" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Username" />
            </div>
            </div> */}
            <div className="textfield-label-textfield-default">
            <p className="label">Email</p>
            <div className="group-277">
            <input  className="transparent" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            </div>
            </div>
            <div className="textfield-label-textfield-default" style={{paddingTop: "32px"}}>
            <p className="label">password</p>
            <div className="group-277">
            <input  className="transparent" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            </div>
            </div>
            <div style={{paddingTop: "32px"}}></div>
            <input  type="button" value={loading ? 'Loading...' : 'Register'}className="button-contained-primary-default" onClick={handleSubmit}/>
        </form>
        <button className="btn-label-1" onClick={() => history('/Login')}>Already have an account? Login here.</button>
        </div>
    </div>
    </div>
    )
}