import aboutImg from '../../assets/AboutSection/pexels-yankrukov-7793688.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaDollarSign, FaRegStar, FaCheckCircle } from "react-icons/fa";

const About = () => {

     useEffect(() => {
          AOS.init()
     }, [])
     return (
          <div className="mt-10 mb-10 flex gap-14 ">


               <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                    data-aos-offset="100">
                    <img className="w-[600px] h-[550px]" src={aboutImg} alt="" />
               </div>


               <div className="w-1/2   " data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2500"
                    data-aos-offset="100">

                    <div className="mb-6 flex items-center gap-4 ">
                         <div className="bg-cyan-400 p-3 rounded-full inline-flex items-center justify-center">
                              <FaDollarSign className="text-white" size={26}></FaDollarSign>
                         </div>
                         <div>
                              <h1 className="text-xl mb-4  font-bold text-cyan-700 underline">Our Mission</h1>
                              <p className="text-lg font-medium w-8/12">Our mission is to empower brands by crafting innovative and impactful creative solutions. needs strategic campaigns success.</p>
                         </div>
                    </div>
                    <div className="mb-6 flex gap-4 items-center">
                         <div className="bg-cyan-400 p-3 rounded-full inline-flex items-center justify-center">
                              <FaCheckCircle className="text-white" size={26}></FaCheckCircle>
                         </div>
                         <div>
                              <h1 className="text-xl mb-4  font-bold text-cyan-700 underline">Our Vision</h1>
                              <p className="text-lg font-medium w-8/12">Our mission is to empower brands by crafting innovative and impactful creative solutions. needs strategic campaigns success.</p>
                         </div>
                    </div>
                    <div className="mb-6 flex gap-4 items-center">
                         <div className="bg-cyan-400 p-3 rounded-full inline-flex items-center justify-center">
                              <FaRegStar className="text-white" size={26}></FaRegStar>
                         </div>
                         <div>
                              <h1 className="text-xl mb-4  font-bold text-cyan-700 underline">What Sets Us Apart</h1>
                              <p className="text-lg font-medium w-8/12">Our mission is to empower brands by crafting innovative and impactful creative solutions. needs strategic campaigns success.</p>
                         </div>
                    </div>
                    <div className="mt-6 ml-20">
                         <button className=" rounded-lg p-3 text-base font-semibold bg-cyan-400 hover:bg-cyan-700">More About Us</button>
                    </div>
               </div>
          </div>
     );
};

export default About;