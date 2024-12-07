import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

import logo from "../../../src/assets/logo/logo.png";

const Navbar = () => {
     const { logOut, user } = useContext(AuthContext);
     // mobile device and tablet  dropDown icon

     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

     const location = useLocation();

     useEffect(() => {
          setIsDropdownOpen(false)
     }, [location])

     const handelDropdownToggle = () => {
          setIsDropdownOpen(!isDropdownOpen);
     }


     const handleLogOut = () => {
          logOut()
               .then(() => {
                    toast.success("LogOut Successfully");
               })
               .catch((error) => {
                    console.log(error);
               });
     };

     const links = (
          <>
               <li>
                    <details>
                         <summary className="lg:text-white md:text-black text-black">
                              HOME
                         </summary>
                         <ul>
                              <li className="text-black">

                                   <NavLink
                                        to="/"

                                        className={({ isActive }) =>
                                             isActive
                                                  ? " focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]"
                                                  : ""
                                        }
                                   >
                                        Home
                                   </NavLink>
                              </li>
                              <li className="text-black">
                                   <NavLink

                                        to="/homePages2"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? " focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]"
                                                  : ""
                                        }
                                   >
                                        Home2
                                   </NavLink>
                              </li>
                         </ul>
                    </details>
               </li>
               <li>
                    <details>
                         <summary className="lg:text-white md:text-black text-black">
                              ABOUT
                         </summary>
                         <ul className="">
                              <li className="text-black">
                                   <NavLink
                                        to="/aboutPages"

                                        className={({ isActive }) =>
                                             isActive
                                                  ? " focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]"
                                                  : ""
                                        }
                                   >
                                        About
                                   </NavLink>
                              </li>
                              <li className="text-black">
                                   <NavLink

                                        to="/aboutPages2"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? " focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]"
                                                  : ""
                                        }
                                   >
                                        About2
                                   </NavLink>
                              </li>
                         </ul>
                    </details>
               </li>

               <li>
                    <details>
                         <summary className="lg:text-white md:text-black text-black">
                              BLOG
                         </summary>
                         <ul className="p-2">
                              <li className="text-black">
                                   <NavLink
                                        to="/blog"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? " focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]"
                                                  : ""
                                        }
                                   >
                                        BLOG
                                   </NavLink>
                              </li>
                              <li className="text-black">
                                   <NavLink
                                        to="/blog2"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? " focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]"
                                                  : ""
                                        }
                                   >
                                        BLOG2
                                   </NavLink>
                              </li>
                         </ul>
                    </details>
               </li>

               <li className="lg:text-white md:text-black text-black">
                    <NavLink
                         to="/contacts"
                         className={({ isActive }) =>
                              isActive
                                   ? " focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]"
                                   : ""
                         }
                    >
                         CONTACTS
                    </NavLink>
               </li>

               <li>
                    <details>
                         <summary className="lg:text-white md:text-black text-black">
                              SERVICES
                         </summary>
                         <ul className="">
                              <li className="text-black">
                                   <NavLink
                                        to="/services"

                                        className={({ isActive }) =>
                                             isActive
                                                  ? " focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]"
                                                  : ""
                                        }
                                   >
                                        Services
                                   </NavLink>
                              </li>
                              <li className="text-black">
                                   <NavLink

                                        to="/servicesPages2"
                                        className={({ isActive }) =>
                                             isActive
                                                  ? " focus:bg-transparent  focus:text-[#3cd0d8] text-[#3cd0d8]"
                                                  : ""
                                        }
                                   >
                                        services2
                                   </NavLink>
                              </li>
                         </ul>
                    </details>
               </li>
          </>
     );

     return (
          <div className=" fixed text-white left-0 top-0 right-0  mx-auto bg-opacity-30 z-50 bg-slate-800 ">
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] py-1 navbar px-0 mx-auto">
                    <div className="navbar-start md:w-10 lg:w-0">
                         <div className="dropdown">
                              {/* Toggle Dropdown */}
                              <div
                                   onClick={handelDropdownToggle}
                                   tabIndex={0}
                                   role="button"
                                   className="mr-4 lg:hidden "
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                   </svg>
                              </div>
                              {/* // Conditionally render dropdown */}
                              {
                                   isDropdownOpen && (
                                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 lg:w-52  md:w-44 w-36 p-2 shadow text-base font-semibold px-1">
                                             {links}
                                        </ul>
                                   )
                              }

                         </div>
                    </div>

                    <div className="z-50 navbar-start">
                         <Link to={"/"}>
                              <img className="w-32 brightness-200" src={logo} alt="" />
                         </Link>
                    </div>

                    <div className="navbar-center  hidden lg:flex px-2 z-50">

                         <ul className="menu menu-horizontal brightness-150 text-base font-semibold px-2">
                              {links}
                         </ul>


                    </div>

                    <div className="navbar-end z-50">
                         {user ? (
                              <div className="dropdown dropdown-end text-black">
                                   <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                   >
                                        {user?.photoURL ? (
                                             <div className="lg:w-10 md:w-8 w-8 rounded-full">
                                                  <img alt="Profile Photo" src={user?.photoURL} />
                                             </div>
                                        ) : (
                                             <FaUserCircle className="text-3xl"></FaUserCircle>
                                        )}
                                   </div>
                                   <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 py-2 shadow"
                                   >
                                        <li>
                                             <p className="text-base font-medium">{user?.displayName}</p>
                                        </li>
                                        <li>
                                             <p className="text-sm font-medium mb-1 mt-1">
                                                  {user?.email}
                                             </p>
                                        </li>
                                        <li className="">
                                             <button
                                                  onClick={handleLogOut}
                                                  className="text-sm font-medium text-black hover:bg-red-500 p-2 rounded-lg"
                                             >
                                                  LogOut
                                             </button>
                                        </li>
                                   </ul>
                              </div>
                         ) : (
                              <Link to={"/login"}>
                                   <button className="text-sm text-white font-bold px-4 flex items-center hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">
                                        Login
                                   </button>
                              </Link>
                         )}
                    </div>
               </div>
          </div>
     );
};
export default Navbar;







