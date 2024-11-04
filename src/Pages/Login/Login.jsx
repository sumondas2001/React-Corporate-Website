import loginImg from '../../assets/login/login.svg'

const Login = () => {

     const handelLogin = (event) => {
          event.preventDefault();
          const from = event.target;
          const email = from.email.value;
          const password = from.password.value;
          console.log(email, password)
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
               

                    </div>
               </div>
          </div>
     );
};

export default Login;