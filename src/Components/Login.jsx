import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate} from 'react-router-dom';

const Login = () => {
  const {loginUser, loginWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
    .then(result =>{
      console.log(result.user)
      Swal.fire({
        title: 'success',
        text: 'you have loggedIn successfully.',
        icon: 'success',
        confirmButtonText: 'ok'
      })
      navigate(location.state ? location.state : '/');
    })
    .catch(error =>{
      console.log('hello',error)
    })
  }

  const handleGoogle = ()=>{
    loginWithGoogle()
    .then(result =>{
      Swal.fire({
        title: 'success',
        text: 'you have loggedIn by google successfully.',
        icon: 'success',
        confirmButtonText: 'ok'
      })
      navigate(location.state ? location.state : '/');
    })
    .catch(error =>{
      Swal.fire({
        title: 'warning!',
        text: `${error.message}`,
        icon: 'error',
        confirmButtonText: 'ok'
      })
    })
  }
    return (
        <div className="bg-base-200 py-10">
  <div className="flex-col">
    <div className="text-center mb-4">
      <h1 className="text-5xl font-bold">Login Here!</h1>
    </div>
    <div className="card bg-base-100 lg:w-4/12 mx-auto shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter your email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>don't have an Account | <Link className='text-blue-600' to='/register'>create one</Link></p>
        <div className="form-control mt-6">
          <button onClick={handleGoogle} className="btn btn-outline btn-primary">Login with Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;