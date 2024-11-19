import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";



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
          <li className="lg:hidden ">
               <NavLink
                    to="/"
                    className={({ isActive }) =>
                         isActive ? 'underline focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                    }
               >
                    Home
               </NavLink>
          </li>

          <li>
               <NavLink
                    to="/aboutPages"
                    className={({ isActive }) =>
                         isActive ? 'underline focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                    }
               >
                    ABOUT
               </NavLink>
          </li>
          <li>
               <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                         isActive ? 'underline focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                    }
               >
                    BLOG
               </NavLink>
          </li>
          <li>
               <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                         isActive ? 'underline focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                    }
               >
                    CONTACTS
               </NavLink>
          </li>
          <li>
               <NavLink
                    to="/services"
                    className={({ isActive }) =>
                         isActive ? 'underline focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                    }
               >
                    SERVICES
               </NavLink>
          </li>






     </>
     return (
          <div className=" mb-4 ">
               <div className="navbar px-0 lg:max-w-[1210px] md:max-w-[700px] max-w-[350px] mx-auto  ">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-6 "
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
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 lg:w-52 md:w-44 w-36 p-2 shadow text-base font-bold px-1  ">
                                   {link}
                              </ul>
                         </div>

                         <div >
                              <Link to={'/'} ><img className="lg:w-20 md:w-16 w-16   " src="https://i.ibb.co.com/sJZwLBW/pngtree-company-logo-design-trademark-design-creative-logo-png-image-4569380-removebg-preview.png" alt="" /> </Link>
                         </div>

                    </div>



                    <div className="navbar-center hidden lg:flex  z-10">
                         <ul className="menu menu-horizontal text-base font-bold px-2">
                              {link}
                         </ul>
                    </div>
                    <div className="navbar-end  z-10">
                         {user ?

                              <div className="dropdown dropdown-end">
                                   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                                        {
                                             user?.photoURL ?
                                                  <div className="w-10 rounded-full">
                                                       <img
                                                            alt="Profile Photo"
                                                            src={user?.photoURL} />
                                                  </div>
                                                  :
                                                  <FaUserCircle className="text-3xl"></FaUserCircle>
                                        }
                                   </div>
                                   <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 py-2 shadow ">
                                        <li>
                                             <p className=" text-sm font-medium">
                                                  {user?.displayName}
                                             </p>
                                        </li>
                                        <li>
                                             <p className=" text-xs font-normal mb-2 mt-2">
                                                  {user?.email}
                                             </p>
                                        </li>

                                        <li className=" ">
                                             <button onClick={handelLogOut} className="text-sm font-light text-black hover:bg-cyan-700 p-2 rounded-lg ">LogOut</button>

                                        </li>
                                   </ul>
                              </div>




                              :
                              <Link to={'/login'} >  <button className=" text-sm text-white font-bold px-4 flex items-center hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">Login</button></Link>
                         }
                    </div>
               </div>
          </div>
     );
};

export default Navbar;

