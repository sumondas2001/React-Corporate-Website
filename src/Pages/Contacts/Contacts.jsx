import { Link } from "react-router-dom";
import ContactsImg from "../../components/ContactsImg/ContactsImg";
import { FaEnvelopeOpenText, FaPhoneAlt, FaMoneyCheck } from "react-icons/fa";
import ContactFrom from "../../components/ContactFrom/ContactFrom";
import PagesTitle from "../../components/PagesTitle/PagesTitle";


const Contacts = () => {
     return (
          <div className="mb-10">

               <PagesTitle title={"Contacts"}></PagesTitle>


               <ContactsImg></ContactsImg>
               <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-offset="100"

                    className="flex text-center  mt-14 mb-10 lg:justify-evenly md:justify-evenly gap-4">


                    <div className="space-y-3">
                         <FaEnvelopeOpenText className="mx-auto lg:size-9 md:size-7 size-6" />
                         <h1 className="lg:text-lg md:text-sm text-xs font-medium">How can we help you?</h1>
                         <Link className="underline hover:text-cyan-700 lg:text-base md:text-sm text-xs font-normal">Send us an email</Link>
                    </div>
                    <div className="space-y-3">
                         <FaPhoneAlt className="mx-auto lg:size-9 md:size-7 size-6" />
                         <h1 className="lg:text-lg md:text-sm text-xs font-medium">Feel free to get in touch?</h1>
                         <Link className="underline hover:text-cyan-700 lg:text-base md:text-sm text-xs font-normal">Give us a call toady</Link>
                    </div>
                    <div className="space-y-3">
                         <FaMoneyCheck className="mx-auto lg:size-9 md:size-7 size-6" />
                         <h1 className="lg:text-lg md:text-sm text-xs font-medium">Ready to request a quote?</h1>
                         <Link className="underline hover:text-cyan-700 lg:text-base md:text-sm text-xs font-normal">Describe your project</Link>
                    </div>
               </div>

               <div className="space-y-3">
                    <p className="text-base font-light text-center">Fill out the form and we’ll be in touch soon!</p>
                    <h1 className="text-xl font-medium text-center">How we can help you?</h1>


                    <div className="flex justify-center ">
                         <ContactFrom></ContactFrom>
                    </div>
               </div>

               <div className="mt-10 ">
                    <div className="mb-10">
                         <h1 className="text-2xl font-medium text-center mb-4">Our Location</h1>
                         <hr className="w-48 mt-2 border-t-black mx-auto" />
                         <hr className="w-60 mt-2 border-t-black mx-auto" />
                    </div>
                    <iframe
                         data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1000"
                         data-aos-offset="100"
                         className="w-full lg:h-[420px] md:h-72 h-64 object-cover rounded-sm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.2635490807625!2d90.41202048648901!3d23.831689628558014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e78f46ee1%3A0x3e009fd37c89634f!2sNikunja%202%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1731227615008!5m2!1sen!2sbd" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
               </div>


          </div>
     );
};

export default Contacts;