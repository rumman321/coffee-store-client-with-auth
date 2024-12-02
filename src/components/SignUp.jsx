import React, { createContext, useContext } from "react";
import AuthProvider, { AuthContext } from "./Provider/AuthProvider";

const SignUp = () => {
  const {createUser}=useContext(AuthContext)
    const handleSignUp=(e)=>{
        e.preventDefault()
        const form = e.target; 
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value

        createUser(email,password)
        .then(result=>{
          console.log("user crated at firebase",result.user)
          const createdAt=(result?.user?.metadata?.creationTime)
          const newUser={name,email,createdAt}

          //save new user
          fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(newUser)

          })
          .then(res=>res.json())
          .then(data=>{
            console.log('userCreated to db ',data)
            if(data.insertedId){
              console.log('data created in db')
            }
          })
        })
        .catch(err=>{
          console.log(err)
        })

        
        //form.reset()
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
