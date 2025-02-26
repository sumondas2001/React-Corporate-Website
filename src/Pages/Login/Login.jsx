import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login/login.svg';
import { FaGoogle } from "react-icons/fa";
import { useContext, useEffect } from 'react';
import AOS from 'aos';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import PagesTitle from '../../components/PagesTitle/PagesTitle';

const Login = () => {

     const { loginUser, googleLogin } = useContext(AuthContext);
     const location = useLocation();
     console.log(location)
     const navigate = useNavigate();
     useEffect(() => {
          AOS.init()
     }, [])

     const handelLogin = (event) => {
          event.preventDefault();
          const from = event.target;
          const email = from.email.value;
          const password = from.password.value;
          console.log(email, password);


          loginUser(email, password)
               .then(res => {
                    console.log(res.user);
                    toast.success('Login Successfully');

                    from.reset();
                    navigate(location.state ? location.state : '/');
               })
               .catch(error => {
                    toast.error(error.message);
                    console.log(error.message);
               })
     }
     const handelGoogle = () => {
          googleLogin()
               .then((res) => {
                    toast.success('Login Successfully');
                    console.log(res.user);

                    navigate(location.state ? location.state : '/');
               })
               .catch(error => {
                    toast.error(error.message)
               })
     };

     return (
          <div className='mb-20 mt-20'>

               <PagesTitle title={"Login"}></PagesTitle>


               <h1 className="text-xl font-bold text-center  text-cyan-600">Login Now ! </h1>
               <div className='md:flex lg:flex  gap-10 justify-center mt-2 items-center'>
                    <div
                         data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000"
                         data-aos-offset="100"
                    >
                         <img className='lg:size-96  md:size-80 size-80' src={loginImg} alt="" />
                    </div>
                    <div
                         data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1000"
                         data-aos-offset="100"
                         className="card  w-full max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelLogin} className="card-body px-8 py-4">
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
                                   <button type='submit' className="btn bg-gradient-to-b from-cyan-400 from-30% to-cyan-600 text-white  hover:from-cyan-600 hover:from-30% hover:to-cyan-300  text-base  font-medium ">Login</button>


                              </div>
                         </form>

                         <div >
                              <div className='flex mb-2 justify-around'>
                                   <p className='text-sm font-normal'>Dont Have An Account </p>
                                   <Link to={'/register'} className='text-base font-medium underline  hover:font-semibold hover:text-cyan-500'>Register</Link>
                              </div>
                              <h1 className="text-base mb-1 font-semibold text-center">OR</h1>
                              <hr className='border-1 mb-4 border-black' />
                              <div className=' flex justify-center gap-6  mb-6'>
                                   <div>
                                        <button onClick={handelGoogle} >
                                             <FaGoogle className='size-8  text-cyan-500  ' />


                                        </button>
                                   </div>

                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;