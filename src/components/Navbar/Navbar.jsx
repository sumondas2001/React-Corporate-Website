import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { AwesomeButton } from "react-awesome-button";


const Navbar = () => {
     const { logOut, user } = useContext(AuthContext);

     const handelLogOut = () => {
          logOut()
               .then(() => {
                    toast.success('LogOut Successfully')
               })
               .catch(error => {
                    console.log(error)
               })
     }


     const link = <>


          <li>
               <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? 'underline  text-cyan-600' : ''
                    }
               >
                    <span className="font-semibold"> ABOUT</span>
               </NavLink>
          </li>
          <li>
               <NavLink
                    to="/blog"
                    className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? 'underline  text-cyan-600' : ''
                    }
               >
                    BLOG
               </NavLink>
          </li>
          <li>
               <NavLink
                    to="/contacts"
                    className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? 'underline  text-cyan-600' : ''
                    }
               >
                    CONTACTS
               </NavLink>
          </li>
          <li>
               <NavLink
                    to="/services"
                    className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? 'underline  text-cyan-600' : ''
                    }
               >
                    SERVICES
               </NavLink>
          </li>





     </>
     return (
          <div className="navbar bg-slate-100 py-2  ">
               <div className="navbar-start">
                    <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-5 w-5"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor">
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                              </svg>
                         </div>
                         <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-sm font-bold">
                              {link}
                         </ul>
                    </div>

                    <div>
                         <Link to={'/'} ><img className="size-20  " src="https://i.ibb.co.com/sJZwLBW/pngtree-company-logo-design-trademark-design-creative-logo-png-image-4569380-removebg-preview.png" alt="" /> </Link>
                    </div>

               </div>



               <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-sm font-bold px-1">
                         {link}
                    </ul>
               </div>
               <div className="navbar-end">
                    {user ?

                         <div className="dropdown dropdown-end">
                              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                   <div className="w-10 rounded-full">
                                        <img
                                             alt="Profile Photo"
                                             src={user?.photoURL} />
                                   </div>
                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow ">
                                   <li>
                                        <a className="justify-between text-sm font-medium">
                                             {user?.displayName}
                                        </a>
                                   </li>
                                   <li>
                                        <p className="justify-between text-xs font-normal mb-2 mt-2">
                                             {user?.email}
                                        </p>
                                   </li>

                                   <li className="w-14 ml-20">
                                        <button onClick={handelLogOut} className="text-xs font-light bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg">LogOut</button>

                                   </li>
                              </ul>
                         </div>




                         :
                         <Link to={'/login'} > <AwesomeButton type="primary">Login</AwesomeButton></Link>
                    }
               </div>
          </div>
     );
};

export default Navbar;

