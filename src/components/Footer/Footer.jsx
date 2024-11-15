import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
     return (
          <div className="bg-gray-800 px-4 md:px-10 lg:px-[70px] pb-8 pt-2">
               <div className="flex flex-col mt-6 lg:flex-row justify-between">
                    {/* Logo and Description */}
                    <div className="text-center lg:text-left mb-8 lg:mb-0">
                         <div>
                              <Link to="/">
                                   <img
                                        className="mx-auto size-20 lg:mx-0"
                                        src="https://i.ibb.co.com/sJZwLBW/pngtree-company-logo-design-trademark-design-creative-logo-png-image-4569380-removebg-preview.png"
                                        alt="Company Logo"
                                   />
                              </Link>
                              <p className="text-white text-sm font-light lg:w-[400px] md:w-full mx-auto lg:mx-0">
                                   At Visabee Consultants, our mission is to empower individuals to reach their goals and realize their full potential...
                              </p>
                         </div>
                         {/* Newsletter Subscription */}
                         <div className="mt-8">
                              <p className="text-base mb-2 text-white font-medium">Subscribe to our newsletter</p>
                              <div className="flex flex-col md:flex-row items-center md:justify-center lg:justify-start">
                                   <input
                                        className="px-4 py-2 rounded w-full md:w-64 mb-4 md:mb-0"
                                        type="text"
                                        placeholder="Your Email Address"
                                   />
                                   <button className="bg-cyan-400 hover:bg-cyan-500 px-4 py-2 text-sm font-medium md:ml-4">Subscribe</button>
                              </div>
                         </div>
                    </div>

                    {/* Quick Contact and Services */}
                    <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-10">
                         <div>
                              <ul className="text-xs font-light text-white space-y-3">
                                   <li className="text-lg text-center md:mb-10 font-semibold">Quick Contact</li>
                                   {["About Us", "Contacts", "Blog", "Services"].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-base font-normal">
                                             <AiOutlineArrowRight />
                                             <Link className="hover:underline hover:text-cyan-600">{item}</Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div>
                              <ul className="text-xs font-light text-white space-y-3">
                                   <li className="text-lg text-center md:mb-10 font-semibold">Our Services</li>
                                   {["Market research", "Business planning", "Digital advisory", "Consulting", "International Business"].map((service) => (
                                        <li key={service} className="flex items-center gap-2 text-base font-normal">
                                             <AiOutlineArrowRight />
                                             <Link className="hover:underline hover:text-cyan-600">{service}</Link>
                                        </li>
                                   ))}
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
               <div className="text-white flex gap-4 mt-10 justify-center">
                    <a href="https://www.facebook.com/sumondas1010/">
                         <FaFacebook className="text-cyan-600 text-2xl" />
                    </a>
                    <a href="#">
                         <FaInstagram className="text-[#E1306C] text-2xl" />
                    </a>
                    <a href="#">
                         <FaLinkedin className="text-[rgb(10,102,194)] text-2xl" />
                    </a>
               </div>

               {/* Footer */}
               <div className="mt-6">
                    <hr className="border-gray-500" />
                    <div>
                         <h1 className="text-center text-xs font-normal mt-4 text-white">
                              © Copyright 2024. Theme by
                         </h1>
                    </div>
               </div>
          </div>

     );
};

export default Footer;