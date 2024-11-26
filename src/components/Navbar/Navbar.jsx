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

          <li>
               <details>
                    <summary>HOME</summary>
                    <ul className=" ">
                         <li>
                              <NavLink
                                   to="/"
                                   className={({ isActive }) =>
                                        isActive ? ' focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                                   }
                              >
                                   Home
                              </NavLink>
                         </li>
                         <li>
                              <NavLink
                                   to="/homePages2"
                                   className={({ isActive }) =>
                                        isActive ? ' focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                                   }
                              >
                                   Home2
                              </NavLink>

                         </li>
                    </ul>
               </details>
          </li>


          <li>
               <NavLink
                    to="/aboutPages"
                    className={({ isActive }) =>
                         isActive ? ' focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                    }
               >
                    ABOUT
               </NavLink>
          </li>

          <li>
               <details>
                    <summary>BLOG</summary>
                    <ul className="p-2">
                         <li>
                              <NavLink
                                   to="/blog"
                                   className={({ isActive }) =>
                                        isActive ? ' focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                                   }
                              >
                                   BLOG
                              </NavLink>
                         </li>
                         <li>

                              <NavLink
                                   to="/blog2"
                                   className={({ isActive }) =>
                                        isActive ? ' focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                                   }
                              >
                                   BLOG2
                              </NavLink>
                         </li>
                    </ul>
               </details>
          </li>

          <li>
               <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                         isActive ? ' focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                    }
               >
                    CONTACTS
               </NavLink>
          </li>
          <li>
               <NavLink
                    to="/services"
                    className={({ isActive }) =>
                         isActive ? ' focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]' : ''
                    }
               >
                    SERVICES
               </NavLink>
          </li>
          {/* <li>
               <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                         <li><a>Submenu 1</a></li>
                         <li><a>Submenu 2</a></li>
                    </ul>
               </details>
          </li> */}

     </>
     return (
          <div className=" bg-gray-300  text-black py-0 ">
               <div className="navbar   px-0 lg:max-w-[1210px] md:max-w-[700px] max-w-[350px] mx-auto  ">
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
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 lg:w-52 md:w-44 w-36 p-2 shadow text-base font-semibold px-1  ">
                                   {link}
                              </ul>
                         </div>

                         <div >
                              <Link to={'/'} ><img className="lg:w-[68px] h-16 md:w-16 w-16  " src="https://i.ibb.co.com/XsRK1S7/Blue-Abstract-Business-Company-Logo-1.png" alt="" /> </Link>
                         </div>

                    </div>



                    <div className="navbar-center hidden lg:flex px-2      z-10 ">
                         <ul className="menu menu-horizontal text-base font-semibold px-2">
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
                                             <p className=" text-base font-medium">
                                                  {user?.displayName}
                                             </p>
                                        </li>
                                        <li>
                                             <p className=" text-sm font-medium mb-1 mt-1">
                                                  {user?.email}
                                             </p>
                                        </li>

                                        <li className=" ">
                                             <button onClick={handelLogOut} className="text-sm font-medium text-black hover:bg-red-500 p-2 rounded-lg ">LogOut</button>

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

