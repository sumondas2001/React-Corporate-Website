import { FaEnvelopeOpenText, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import PagesTitle from "../../components/PagesTitle/PagesTitle";
import PagesCoverImg from "../../components/PagesCoverImg/PagesCoverImg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import ContactFrom2 from "./ContactsFrom2/ContactsFrom2";


const Contacts = () => {
     // window top pages
     const { PageTop } = useContext(AuthContext);
     PageTop();

     const imgUrl = 'https://i.ibb.co.com/VSwdvzT/contact-us-classic-03.jpg';
     return (
          <div className="mb-10">

               <PagesTitle title={"Contacts"}></PagesTitle>

               <PagesCoverImg imgUrl={imgUrl} title={'CONTACTS'}></PagesCoverImg>


               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[350px] mx-auto  ">
                    <div
                         data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1000"
                         data-aos-offset="100"
                    >
                         <div className="mt-10">
                              <h1 className="text-2xl  font-medium  mb-4">Get in Touch</h1>
                              <div className="flex items-center gap-2 mt-2">
                                   <hr className="w-14  border-cyan-400 border-2 " />
                                   <p className="bg-cyan-400  p-1 w-0"></p>
                              </div>
                         </div>
                         <div
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="1000"
                              data-aos-offset="100"
                              className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-6 md:gap-10 gap-8 text-center  mt-8 mb-10  bg-[#E3FDFD] lg:py-20 md:py-10 py-6  rounded-xl ">


                              <div className="space-y-3 lg:border-r lg:border-black">
                                   <FaEnvelopeOpenText className="mx-auto lg:size-9 md:size-7 size-6" />
                                   <h1 className="lg:text-lg md:text-sm text-xs font-medium text-cyan-600">Email</h1>
                                   <p className=" hover:text-cyan-700 lg:text-base md:text-sm text-xs font-normal">example@mail.com</p>
                              </div>
                              <div className="space-y-3 lg:border-r lg:border-black">
                                   <FaPhoneAlt className="mx-auto lg:size-9 md:size-7 size-6" />
                                   <h1 className="lg:text-lg md:text-sm text-xs font-medium text-cyan-600">Call Us</h1>
                                   <p className=" hover:text-cyan-700 lg:text-base md:text-sm text-xs font-normal">+8801812121212</p>
                              </div>
                              <div className="space-y-3 lg:border-r lg:border-black">
                                   <FaRegClock className="mx-auto lg:size-9 md:size-7 size-6" />
                                   <h1 className="lg:text-xl md:text-sm text-xs font-medium text-cyan-600">Office Time</h1>
                                   <p className=" hover:text-cyan-700 lg:text-base md:text-sm text-xs font-normal">Monday to Friday 9:00am - 6:00pm</p>
                              </div>
                              <div className="space-y-3 ">
                                   <FaLocationDot className="mx-auto lg:size-9 md:size-7 size-6" />
                                   <h1 className="lg:text-lg md:text-sm text-xs font-medium text-cyan-600">Address</h1>
                                   <p className=" hover:text-cyan-700 lg:text-base md:text-sm text-xs font-normal">Nikunja-2,Dhaka,Bangladesh</p>
                              </div>
                         </div>
                    </div>

                    <div data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1000"
                         data-aos-offset="100">

                         <div className="flex lg:gap-10 md:gap-4 lg:flex-row md:flex-col flex-col">
                              <div className="lg:w-1/2 w-full md:mb-10 lg:mb-0 mb-10">
                                   <GetInTouch></GetInTouch>
                              </div>
                              <div className="lg:w-1/2 w-full">
                                   <h1 className="text-xl font-medium ">How we can help you?</h1>
                                   <ContactFrom2></ContactFrom2>
                              </div>
                         </div>
                    </div>

                    <div className="mt-10 "
                         data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1000"
                         data-aos-offset="100"
                    >
                         <div className="mb-10">
                              <h1 className="text-3xl font-semibold">Our Location</h1>
                              <div className="flex items-center gap-2 mt-2">
                                   <hr className="w-32  border-cyan-400 border-2 " />
                                   <p className="bg-cyan-400  p-1 w-0"></p>
                              </div>
                         </div>
                         <iframe
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="1000"
                              data-aos-offset="100"
                              className="w-full lg:h-[500px] md:h-96 h-72 object-cover rounded-sm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.2635490807625!2d90.41202048648901!3d23.831689628558014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e78f46ee1%3A0x3e009fd37c89634f!2sNikunja%202%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1731227615008!5m2!1sen!2sbd" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

               </div>




          </div>
     );
};

export default Contacts;