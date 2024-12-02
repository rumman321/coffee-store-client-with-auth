import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const {signInUser}=useContext(AuthContext)
    const handleSignIn=(e)=>{
        e.preventDefault()
        const form = e.target; 
        
        const email=form.email.value
        const password=form.password.value

        signInUser(email,password)
        .then(result=>{
            console.log(result.user)

            //update last login time
            const lastSignInTime  = result?.user?.metadata?.lastSignInTime
            const loginInfo={email,lastSignInTime}

            fetch(`http://localhost:5000/users`,{
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(loginInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('sign in info updated in db', data)
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSignIn}>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
              <p>new to the website Please <Link to='/signup'>SignUp</Link> </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignIn;