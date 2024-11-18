import aboutImg from '../../assets/AboutSection/pexels-yankrukov-7793688.jpg'
import 'aos/dist/aos.css';
import { FaDollarSign, FaRegStar, FaCheckCircle } from "react-icons/fa";

const About = () => {


     return (

          <div className="mt-10 mb-10 flex flex-col md:flex-row lg:justify-between md:gap-4 items-center text-center lg:text-left md:text-left bg-[#e9f5f5] p-6 rounded-md">

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
                         <div className="flex flex-col sm:flex-row   lg:gap-6 md:gap-3 gap-4 ">
                              <div>
                                   <FaDollarSign className='lg:size-8 text-cyan-900  mx-auto md:size-8  md:mt-2 size-7' />
                              </div>
                              <div className="text-center sm:text-left ">
                                   <h1 className="text-xl font-bold text-cyan-700 mb-3">Our Mission</h1>

                                   <p className="text-base font-medium">Our mission is to empower brands by crafting innovative and impactful creative solutions, driving strategic campaign success.</p>
                              </div>
                         </div>

                         <div className="flex flex-col sm:flex-row  lg:gap-6 md:gap-3 gap-4">
                              <div>
                                   <FaCheckCircle className='lg:size-8 text-cyan-900   mx-auto md:size-8  md:mt-2 size-7' />
                              </div>

                              <div className="text-center sm:text-left">
                                   <h1 className="text-xl font-bold text-cyan-700 mb-3">Our Vision</h1>
                                   <p className="text-base font-medium">We aim to provide brands with strategic and impactful creative solutions for success.</p>
                              </div>
                         </div>

                         <div className="flex flex-col sm:flex-row  lg:gap-6 md:gap-3 gap-4">
                              <div>
                                   <FaRegStar className='lg:size-8 text-cyan-900   mx-auto md:size-8  md:mt-2 size-7' />
                              </div>
                              <div className="text-center sm:text-left">
                                   <h1 className="text-xl font-bold text-cyan-700 mb-3">What Sets Us Apart</h1>
                                   <p className="text-base font-medium">We stand out with our innovative approach to creative solutions and campaign success.</p>
                              </div>
                         </div>
                    </div>

                    <div className="mt-6 flex justify-center lg:justify-start">
                         <button className=" text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">About More Us</button>
                    </div>
               </div>
          </div>


     );
};

export default About;