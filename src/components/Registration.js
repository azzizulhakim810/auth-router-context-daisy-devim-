import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Registration = () => {
  const {createUser} = useContext(AuthContext); 

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
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
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black m-10">

      <form onSubmit={handleSubmit} className="card-body">

        {/* Name Field  */}

        <div className="form-control">
          <label className="label">
            <span className="label-text ">Name</span>
          </label>

          <input name='name' type="text" placeholder="name" className="input input-bordered" required />
        </div>

        {/* Email Field */}

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
          <label className="label">
          <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default Registration;