import { Link } from 'react-router-dom';
import loginImg from '../../assets/login/login.svg';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import AOS from 'aos';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
     const { createUser } = useContext(AuthContext);
     const [error, setError] = useState('');



     useEffect(() => {
          AOS.init()
     }, [])


     const handelRegister = (event) => {
          event.preventDefault();
          const from = event.target;
          const name = from.name.value;
          const email = from.email.value;
          const password = from.password.value;
          console.log(name, email, password);



          if (!/^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$/.test(password)) {

               return setError('Minimum six characters, at least one uppercase letter and one lowercase letter, ')
          }




          createUser(email, password)
               .then(res => {

                    toast.success('Register Successfully')
                    from.reset();
                    console.log(res.user)
               })
               .catch(error => {
                    console.log(error);
                    setError(error.message)
               })

     }
     const handelGoogle = () => {
          console.log('google login')
     };
     const handelGithub = () => {

          console.log('git hub login')
     }
     return (
          <div className='mb-20'>
               <h1 className="text-3xl font-bold text-center mt-4 text-cyan-600">Register Now ! </h1>
               <div data-aos="zoom-in-down" className='flex gap-10 justify-center items-center mt-10'>
                    <div data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1500"
                         data-aos-offset="100">
                         <img className='size-96' src={loginImg} alt="" />
                    </div>
                    <div className="card  w-full max-w-sm shrink-0 shadow-2xl" data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1500"
                         data-aos-offset="100">
                         <form onSubmit={handelRegister} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Name</span>
                                   </label>
                                   <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                              </div>
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

                              </div>
                              <div>
                                   {
                                        error ? <p className='text-xs text-red-600 '>{error}</p> : ''

                                   }
                              </div>
                              <div className="form-control mt-2">
                                   <button type='submit' className="btn btn-primary">Register</button>


                              </div>
                         </form>



                         <div >

                              <div className='flex mb-2 justify-around'>
                                   <p className='text-base font-normal'>Already Have An Account </p>
                                   <Link to={'/login'} className='text-lg font-medium underline  hover:font-semibold hover:text-cyan-500'>Login</Link>
                              </div>
                              <h1 className="text-lg mb-4 font-semibold text-center"> Continue With</h1>
                              <div className=' flex justify-center gap-6 mb-6'>
                                   <div>
                                        <button onClick={handelGoogle} >
                                             <FaGoogle className='size-8  text-cyan-500  ' />
                                             <span><p className='text-base font-semibold mt-1'>Google</p></span>

                                        </button>
                                   </div>
                                   <button onClick={handelGithub}>
                                        <FaGithub className='size-8 ' />
                                        <span><p className='text-base font-semibold mt-1'>GitHub</p></span>
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;