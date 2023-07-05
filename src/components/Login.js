import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Login = () => {
  const {signIn, googleSignIn, facebookSignIn, githubSignIn} = useContext(AuthContext)

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log('Logged In successfully', user);
      form.reset();
    })
    .catch(error => {
      console.error(error);
    })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      console.log('Google User',user);
    })
    .catch(error => {
      console.error(error);
    })
  }

  const handleFacebookSignIn = () => {
    facebookSignIn()
    .then(result => {
      const user = result.user;
      console.log('Successfully Logged In by Facebook', user);
    })
    .catch(error => {
      console.error(error);
    })
  }

  const handleGithubSignIn = () => {
    githubSignIn()
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <div className='w-4/5 m-auto align-middle'>
      <div className="hero h-3/4 bg-black ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

      {/* Google Button */}

   <div class="avatar placeholder">
   <div>
         <button onClick={handleGoogleSignIn} class="bg-yellow-500 text-white text-bold p-2 px-3 rounded-md">GOOGLE</button>
       </div>
  </div>
   <div class="avatar placeholder ml-5">
       <div>
         <button onClick={handleFacebookSignIn} class="bg-blue-900 text-white text-bold p-2 px-3 rounded-md">FACEBOOK</button>
       </div>
  </div>
   <div class="avatar placeholder ml-5">
       <div>
         <button onClick={handleGithubSignIn} class="bg-orange-600 text-white text-bold p-2 px-3 rounded-md">
         
          GITHUB
          </button>
       </div>
  </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black m-10">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
          <label className="label flex">
          <Link to="/registration" className="label-text-alt link link-hover">New to DEVIM? Sign up here</Link>
          <Link to="#" className="label-text-alt link link-hover">Forget Password?</Link>
          
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;