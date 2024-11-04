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


               <div data-aos="fade-down" >
                    <img className="w-[600px] h-[550px]" src={aboutImg} alt="" />
               </div>


               <div data-aos="fade-down" className="w-1/2   ">

                    <div className="mb-6 flex items-center gap-4 ">
                         <div className="bg-cyan-400 p-3 rounded-full inline-flex items-center justify-center">
                              <FaDollarSign className="text-white" size={30}></FaDollarSign>
                         </div>
                         <div>
                              <h1 className="text-2xl mb-4  font-black text-cyan-700 underline">Our Mission</h1>
                              <p className="text-lg font-medium w-8/12">Our mission is to empower brands by crafting innovative and impactful creative solutions. needs strategic campaigns success.</p>
                         </div>
                    </div>
                    <div className="mb-6 flex gap-4 items-center">
                         <div className="bg-cyan-400 p-3 rounded-full inline-flex items-center justify-center">
                              <FaCheckCircle className="text-white" size={30}></FaCheckCircle>
                         </div>
                         <div>
                              <h1 className="text-2xl mb-4  font-black text-cyan-700 underline">Our Vision</h1>
                              <p className="text-lg font-medium w-8/12">Our mission is to empower brands by crafting innovative and impactful creative solutions. needs strategic campaigns success.</p>
                         </div>
                    </div>
                    <div className="mb-6 flex gap-4 items-center">
                         <div className="bg-cyan-400 p-3 rounded-full inline-flex items-center justify-center">
                              <FaRegStar className="text-white" size={30}></FaRegStar>
                         </div>
                         <div>
                              <h1 className="text-2xl mb-4  font-black text-cyan-700 underline">What Sets Us Apart</h1>
                              <p className="text-lg font-medium w-8/12">Our mission is to empower brands by crafting innovative and impactful creative solutions. needs strategic campaigns success.</p>
                         </div>
                    </div>
                    <div className="mt-10 ml-20">
                         <button className="btn text-xl font-bold bg-cyan-400 hover:bg-cyan-700">More About Us</button>
                    </div>
               </div>
          </div>
     );
};

export default About;