import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import OurService from "./OurService";

const OurServices = () => {

     const [Services, setServices] = useState([]);

     useEffect(() => {
          axios.get('services.json')
               .then(res => {
                    setServices(res.data);
                    // console.log(res.data)
               })
               .catch(error => {
                    toast.error(error)
               })
     }, [])
     return (
          <div className="mb-10">
               <div className="text-center">
                    <div>
                         <h1 className="text-xl font-medium">Our Services</h1>
                         <hr className="w-28 mt-2 border-t-black mx-auto" />
                         <hr className="w-40 mt-2 border-t-black mx-auto" />
                    </div>
                    <h4 className="text-xl mb-10  text-center mt-10"> <span style={{ color: 'cyan', fontWeight: 'bold', }}>
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
                         Services?.map(service => <OurService
                              key={service.id}
                              service={service}
                         >

                         </OurService>)
                    }
               </div>
          </div>
     );
};

export default OurServices;