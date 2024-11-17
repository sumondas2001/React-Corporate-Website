import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import OurClient from "./OurClient";

const OurClients = () => {

     const [clients, setClients] = useState([]);


     useEffect(() => {
          axios.get('OurClients.json')
               .then(res => {
                    setClients(res.data);
                    // console.log(res.data);

               })
               .catch(error => {
                    confirm.length(error)
               })
     }, [])
     return (
          <div className="mt-10 mb-10" >
               <div className="mb-10" data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false">
                    <div>
                         <h1 className="text-2xl font-medium text-center mb-4">Our Clients</h1>

                         <div className="flex items-center justify-center gap-2 mt-4">
                              <hr className="w-14  border-cyan-400 border-2 " />
                              <p className="bg-cyan-400  p-1 w-0"></p>
                              <hr className="w-14  border-cyan-400 border-2 " />
                         </div>
                    </div>
               </div>
               <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false">
                    <Marquee speed={25} pauseOnHover>
                         {
                              clients.map(client => <OurClient client={client} key={client.id}></OurClient>)
                         }
                    </Marquee>


               </div>
          </div>
     );
};

export default OurClients;