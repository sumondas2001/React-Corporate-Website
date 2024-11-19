import { Link } from 'react-router-dom';
import loginImg from '../../assets/login/login.svg';
import { FaGoogle, } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import AOS from 'aos';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import 'react-awesome-button/dist/styles.css';
import PagesTitle from '../../components/PagesTitle/PagesTitle';


const Register = () => {
     const { createUser, googleLogin, updateProfile } = useContext(AuthContext);
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

                    toast.success('Register Successfully');
                    updateProfile(name)
                    from.reset();
                    console.log(res.user)
               })
               .catch(error => {
                    console.log(error);
                    setError(error.message)
               })

     }
     const handelGoogle = () => {
          googleLogin()
               .then(() => {
                    toast.success('Login Successfully')
               })
               .catch(error => {
                    toast.error(error.message)
               })
     };

     return (
          <div className='mb-20'>

               <PagesTitle title={"Register"}></PagesTitle>

               <h1 className="text-xl font-bold text-center mt-4 text-cyan-600">Register Now ! </h1>
               <div className='lg:flex md:flex  gap-10 justify-center items-center mt-10'>
                    <div data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000"
                         data-aos-offset="100"

                    >
                         <img className='lg:size-96 md:size-80 size-80 ' src={loginImg} alt="" />
                    </div>
                    <div className="card  w-full max-w-sm shrink-0 shadow-2xl"

                         data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1000"
                         data-aos-offset="100"
                    >
                         <form onSubmit={handelRegister} className="card-body px-8 py-4">
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
                                   <button type='submit' className="btn  text-sm font-semibold bg-[#5cc2c7] hover:bg-[#52afb4]">Register</button>


                              </div>
                         </form>



                         <div >

                              <div className='flex mb-2 justify-around'>
                                   <p className='text-sm font-normal'>Already Have An Account </p>
                                   <Link to={'/login'} className='text-base font-medium underline  hover:font-semibold hover:text-cyan-500'>Login</Link>
                              </div>
                              <h1 className="text-base mb-1 font-semibold text-center">OR</h1>
                              <hr className='border-1 mb-4 border-black' />
                              <div className=' flex justify-center gap-6 mb-6'>
                                   <div>
                                        <button onClick={handelGoogle} >
                                             <FaGoogle className='size-8  text-cyan-500  ' />


                                        </button>




                                   </div>

                              </div>
                         </div>
                    </div>
               </div >
          </div >
     );
};

export default Register;