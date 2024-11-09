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
                    console.log(res.data);
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
                    <h1 className="text-2xl font-medium text-center mb-4">Our Clients</h1>
                    <hr className="w-28 mt-2 border-t-black mx-auto" />
                    <hr className="w-40 mt-2 border-t-black mx-auto" />
               </div>
               <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false">
                    <Marquee speed={40}>
                         {
                              clients.map(client => <OurClient client={client} key={client.id}></OurClient>)
                         }
                    </Marquee>


               </div>
          </div>
     );
};

export default OurClients;