import { Link } from 'react-router-dom';
import loginImg from '../../assets/login/login.svg';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {

     const handelLogin = (event) => {
          event.preventDefault();
          const from = event.target;
          const email = from.email.value;
          const password = from.password.value;
          console.log(email, password)
     }
     const handelGoogle = () => {
          console.log('google login')
     };
     const handelGithub = () => {
          console.log('git hub login')
     }
     return (
          <div className='mb-20'>
               <h1 className="text-3xl font-bold text-center mt-4 text-cyan-600">Login Now ! </h1>
               <div className='flex gap-10 justify-center mt-10'>
                    <div>
                         <img className='size-96' src={loginImg} alt="" />
                    </div>
                    <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelLogin} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <button type='submit' className="btn btn-primary">Login</button>


                              </div>
                         </form>

                         <div >
                              <div className='flex mb-2 justify-around'>
                                   <p className='text-base font-normal'>New here?</p>
                                   <Link to={'/register'} className='text-lg font-medium underline  hover:font-semibold hover:text-cyan-500'>Create an account</Link>
                              </div>
                              <h1 className="text-lg mb-4 font-semibold text-center"> Continue With</h1>
                              <div className=' flex justify-center gap-6 '>
                                   <button onClick={handelGoogle}>
                                        <FaGoogle className='size-8 text-cyan-500 mb-6 ' />
                                   </button>
                                   <button onClick={handelGithub}>
                                        <FaGithub className='size-8    mb-6 ' />
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;