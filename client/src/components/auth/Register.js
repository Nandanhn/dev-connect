import React, { Fragment , useState } from 'react';
import {Link} from 'react-router-dom'

const Register = () => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value})

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            console.log('password do not match')
        }
        else{
            console.LOG('SUCCESSFUL')
        }
    }

    const {name,email,password,password2} = formData
	return <Fragment>
			<h1 className="large text-primary">Sign Up</h1>
			<p className="lead">
				<i className="fas fa-user" /> Create Your Account
			</p>
			<form className="form" onSubmit={e => onSubmit(e)}>
				<div className="form-group">
					<input type="text" placeholder="Name" value={name} onChange={e => onChange(e)} name="name" required />
				</div>
				<div className="form-group">
					<input type="email" placeholder="Email Address" value={email} onChange={e => onChange(e)} name="email" required />
					<small className="form-text">
						This site uses Gravatar so if you want a profile image, use a Gravatar email
					</small>
				</div>
				<div className="form-group">
					<input type="password" value={password} onChange={e => onChange(e)} placeholder="Password" name="password" minLength="6" />
				</div>
				<div className="form-group"> 
					<input type="password" value={password2} onChange={e => onChange(e)} placeholder="Confirm Password" name="password2" minLength="6" />
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			<p className="my-1">
				Already have an account? <Link to="login.html">Sign In</Link>
			</p>
		</Fragment>
};

export default Register;
