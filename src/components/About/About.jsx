import aboutImg from '../../assets/AboutSection/pexels-yankrukov-7793688.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { AwesomeButton } from 'react-awesome-button';
import { FaDollarSign, FaRegStar, FaCheckCircle } from "react-icons/fa";

const About = () => {

     useEffect(() => {
          AOS.init()
     }, []);
     return (
          <div className="mt-10 mb-10 flex flex-col md:flex-row lg:justify-between md:gap-4 items-center text-center lg:text-left md:text-left bg-[#E3FDFD] p-6 rounded-md">

               <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-offset="100">
                    <img className="object-cover lg:w-[550px]  md:w-[400px] w-[500px] rounded-3xl mb-3 md:h-[550px] h-[300px] cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={aboutImg} alt="" />
               </div>

               <div className="md:w-1/2 w-5/6 lg:w-1/2 lg:px-14 px-4" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                    data-aos-offset="100">

                    <div className="space-y-6">
                         <div className="flex flex-col sm:flex-row   lg:gap-6 md:gap-3 gap-4">
                              <div>
                                   <FaDollarSign className='lg:size-8 text-cyan-900  mx-auto md:size-8  md:mt-2 size-7' />
                              </div>
                              <div className="text-center sm:text-left">
                                   <h1 className="text-xl font-bold text-cyan-700 underline">Our Mission</h1>
                                   <p className="text-base font-medium">Our mission is to empower brands by crafting innovative and impactful creative solutions, driving strategic campaign success.</p>
                              </div>
                         </div>

                         <div className="flex flex-col sm:flex-row  lg:gap-6 md:gap-3 gap-4">
                              <div>
                                   <FaCheckCircle className='lg:size-8 text-cyan-900   mx-auto md:size-8  md:mt-2 size-7' />
                              </div>

                              <div className="text-center sm:text-left">
                                   <h1 className="text-xl font-bold text-cyan-700 underline">Our Vision</h1>
                                   <p className="text-base font-medium">We aim to provide brands with strategic and impactful creative solutions for success.</p>
                              </div>
                         </div>

                         <div className="flex flex-col sm:flex-row  lg:gap-6 md:gap-3 gap-4">
                              <div>
                                   <FaRegStar className='lg:size-8 text-cyan-900   mx-auto md:size-8  md:mt-2 size-7' />
                              </div>
                              <div className="text-center sm:text-left">
                                   <h1 className="text-xl font-bold text-cyan-700 underline">What Sets Us Apart</h1>
                                   <p className="text-base font-medium">We stand out with our innovative approach to creative solutions and campaign success.</p>
                              </div>
                         </div>
                    </div>

                    <div className="mt-6 flex justify-center lg:justify-start">
                         <AwesomeButton type="primary ">About More Us</AwesomeButton>
                    </div>
               </div>
          </div>

     );
};

export default About;