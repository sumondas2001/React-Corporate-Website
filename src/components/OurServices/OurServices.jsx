import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import OurService from "./OurService";
import { Link } from "react-router-dom";

const OurServices = () => {

     const [Services, setServices] = useState([]);

     useEffect(() => {
          axios.get('/services.json')
               .then(res => {
                    setServices(res.data);


               })
               .catch(error => {
                    toast.error(error)
               })
     }, []);



     return (
          <div className="mb-10"
               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
          >
               <div className="text-center">
                    <div

                    >



                         <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold">Our Services</h1>
                         <div className="flex items-center justify-center gap-2 mt-4">
                              <hr className="lg:w-14 md:w-14 w-10  border-cyan-400 border-2 " />
                              <p className="bg-cyan-400  p-1 w-0"></p>
                              <hr className="lg:w-14 md:w-14 w-10  border-cyan-400 border-2 " />
                         </div>
                    </div>
                    <h4 className="text-xl mb-10  text-center mt-10"> <span style={{ color: '#71C9CE', fontWeight: 'bold', }}>
                         <Typewriter
                              words={['What we do']}
                              loop={0}
                              cursor

                              typeSpeed={240}
                              deleteSpeed={150}
                              delaySpeed={1500}

                         />
                    </span> </h4>
               </div>

               <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-8 ">
                    {
                         Services?.slice(0, 6).map(service => <OurService
                              key={service.id}
                              service={service}
                         >

                         </OurService>)
                    }
               </div>

               <div className="text-center mt-10">
                    <Link to={'/services'}>


                         <button className="px-3 border py-2 bg-gradient-to-b from-cyan-400 from-30% to-cyan-600 text-white  hover:from-cyan-600 hover:from-30% hover:to-cyan-300  text-base  font-medium  ">See More</button>
                    </Link>
               </div>
          </div>
     );
};

export default OurServices;