import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login pt-5" style={{'height' : '100%'}}>
            <div className={'container'}>
                <div className={'card p-5 m-5 shadow-lg'} style={{'maxWidth': '900px'}}>
                    <h1 className={'mx-5 px-5'}>Sign In</h1>
                    <form className={'m-5 p-5'}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.
                                </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Submit</button>
                    </form>
                    <Link className={'mx-5 px-5'} to={'/register'}>Dont Have an account? Register.</Link>
                </div>
            </div>
        </div>
    )
};

export default Login
