import React, { Fragment , useState } from 'react';
import {Link} from 'react-router-dom' 
const Login = () => {
    const [formData,setFormData] = useState({
        email:'',
        password:''
    });

    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value})

    const onSubmit = async e => {
        e.preventDefault();
       
            console.LOG('SUCCESSFUL')
    }

    const {name,email,password,password2} = formData
	return <Fragment>
			<h1 className="large text-primary">Sign In</h1>
			<p className="lead">
				<i className="fas fa-user" /> Sign In to Your Account
			</p>
			<form className="form" onSubmit={e => onSubmit(e)}>
				<div className="form-group">
					<input type="email" placeholder="Email Address" value={email} onChange={e => onChange(e)} name="email" required />
					<small className="form-text">
						This site uses Gravatar so if you want a profile image, use a Gravatar email
					</small>
				</div>
				<div className="form-group">
					<input type="password" value={password} onChange={e => onChange(e)} placeholder="Password" name="password" minLength="6" />
				</div>
			</form>
			<p className="my-1">
				Don't have an account? <Link to="/register">Sign Up</Link>
			</p>
		</Fragment>
};

export default Login;
