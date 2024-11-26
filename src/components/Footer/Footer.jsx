import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {

     return (
          <div className="bg-gray-900 ">
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[380px] mx-auto pb-8 pt-2">
                    <div className="flex flex-col mt-6 lg:flex-row justify-between">
                         {/* Logo and Description */}
                         <div className="text-center lg:text-left mb-8 lg:mb-0">
                              <div>
                                   <Link to="/">
                                        <img
                                             className="mx-auto size-20 lg:mx-0"
                                             src="https://i.ibb.co.com/XsRK1S7/Blue-Abstract-Business-Company-Logo-1.png"
                                             alt="Company Logo"
                                        />
                                   </Link>
                                   <p className="text-white text-sm font-thin lg:w-[400px] md:w-full mx-auto lg:mx-0">
                                        Discover our corporate excellence through innovation, integrity, and commitment. Empowering businesses with tailored solutions to drive growth, efficiency, and success. Connect with us for your future endeavors.
                                   </p>
                              </div>
                              {/* Newsletter Subscription */}
                              <div className="lg:mt-8 md:mt-4 mt-2 ">
                                   <p className="text-base mb-2 text-white font-medium">Subscribe to our newsletter</p>
                                   <div className="flex  lg:items-center md:items-center items-start md:justify-center justify-evenly lg:justify-start ">
                                        <input
                                             className="px-4 py-2 rounded lg:w-full md:w-64 w-56 mb-4 md:mb-0"
                                             type="text"
                                             placeholder="Your Email Address"
                                        />
                                        <button className="bg-cyan-400 lg:mt-0 md:mt-0 mt-[2px]  hover:bg-cyan-500 px-4  text-sm font-medium md:ml-4  border py-2  bg-gradient-to-tr from-cyan-400 from-30% to-cyan-800 text-white  hover:from-cyan-600 hover:from-30% hover:to-cyan-300   ">Subscribe</button>

                                   </div>
                              </div>
                         </div>

                         {/* Quick Contact and Services */}
                         <div className="flex  lg:justify-between lg:items-start md:items-start  md:justify-around justify-around lg:space-x-20">

                              <ul className="text-xs font-light text-white lg:space-y-4 md:space-y-3 space-y-3">
                                   <div>
                                        <li className="text-lg text-center font-semibold">Quick Contact</li>
                                        <div className="flex items-center mt-3 gap-2 lg:mb-6 md:mb-6 mb-6 ">
                                             <hr className="w-16  border-cyan-400 border-2 " />
                                             <p className="bg-cyan-400  p-1 w-0"></p>
                                        </div>
                                   </div>

                                   <li className="flex items-center gap-2 text-base font-normal">
                                        <AiOutlineArrowRight className="text-cyan-400 text-lg" />
                                        <Link to={'/'} className="hover:underline hover:text-cyan-600">Home</Link>
                                   </li>
                                   <li className="flex items-center gap-2 text-base font-normal">
                                        <AiOutlineArrowRight className="text-cyan-400 text-lg" />
                                        <Link to={'/aboutPages'} className="hover:underline hover:text-cyan-600">About Us</Link>
                                   </li>
                                   <li className="flex items-center gap-2 text-base font-normal">
                                        <AiOutlineArrowRight className="text-cyan-400 text-lg" />
                                        <Link to={'/contacts'} className="hover:underline hover:text-cyan-600">Contacts</Link>
                                   </li>
                                   <li className="flex items-center gap-2 text-base font-normal">
                                        <AiOutlineArrowRight className="text-cyan-400 text-lg" />
                                        <Link to={'/blog'} className="hover:underline hover:text-cyan-600">Blog</Link>
                                   </li>
                                   <li className="flex items-center gap-2 text-base font-normal">
                                        <AiOutlineArrowRight className="text-cyan-400 text-lg" />
                                        <Link to={'/services'} className="hover:underline hover:text-cyan-600">Services</Link>
                                   </li>
                              </ul>


                              <div>
                                   <ul className="text-xs font-light text-white lg:space-y-4 md:space-y-3 space-y-3">
                                        <div>
                                             <li className="text-lg font-semibold">Our Services</li>
                                             <div className="flex items-center mt-3 gap-2 lg:mb-6 md:mb-6 mb-6 ">
                                                  <hr className="w-16  border-cyan-400 border-2 " />
                                                  <p className="bg-cyan-400  p-1 w-0"></p>
                                             </div>
                                        </div>
                                        <li className="flex items-center gap-2 text-base font-normal">
                                             <AiOutlineArrowRight className="text-cyan-400 text-lg" />
                                             <Link to={'/servicesDetails/1'} className="hover:underline hover:text-cyan-600">Market research</Link>
                                        </li>
                                        <li className="flex items-center gap-2 text-base font-normal">
                                             <AiOutlineArrowRight className="text-cyan-400 text-lg" />
                                             <Link to={'/servicesDetails/1'} className="hover:underline hover:text-cyan-600">Business planning</Link>
                                        </li>
                                        <li className="flex items-center gap-2 text-base font-normal">
                                             <AiOutlineArrowRight className="text-cyan-400 text-lg" />
                                             <Link to={'/servicesDetails/1'} className="hover:underline hover:text-cyan-600">Digital advisory</Link>
                                        </li>
                                        <li className="flex items-center gap-2 text-base font-normal">
                                             <AiOutlineArrowRight className="text-cyan-400 text-lg" />
                                             <Link to={'/servicesDetails/1'} className="hover:underline hover:text-cyan-600">Consulting</Link>
                                        </li>
                                        <li className="flex items-center gap-2 text-base font-normal">
                                             <AiOutlineArrowRight className="text-cyan-400 text-lg" />
                                             <Link to={'/servicesDetails/1'} className="hover:underline hover:text-cyan-600">International Business</Link>
                                        </li>
                                   </ul>
                              </div>
                         </div>

                         {/* Google Map Embed */}
                         <div className="mt-10 lg:mt-0">
                              <iframe
                                   className="lg:w-64 md:w-full w-full h-[240px]"
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.2635490807625!2d90.41202048648901!3d23.831689628558014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e78f46ee1%3A0x3e009fd37c89634f!2sNikunja%202%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1731227615008!5m2!1sen!2sbd"
                                   allowFullScreen
                                   loading="lazy"
                                   referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                         </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="text-white flex gap-4 lg:mt-10 md:mt-4 mt-4 justify-center">
                         <a href="https://www.facebook.com/sumondas1010/">
                              <FaFacebook className="size-6 hover:text-cyan-600  " />
                         </a>
                         <a href="#">
                              <FaInstagram className="size-6 hover:text-cyan-600" />
                         </a>
                         <a href="#">
                              <FaLinkedin className="size-6 hover:text-cyan-600" />
                         </a>
                    </div>

                    {/* Footer */}
                    <div className="mt-6">
                         <hr className="border-gray-500" />
                         <div>
                              <h1 className="text-center text-xs font-normal mt-4 text-white">
                                   © Copyright 2024. Theme by ( ----- )
                              </h1>
                         </div>
                    </div>
               </div>
          </div>

     );
};

export default Footer;