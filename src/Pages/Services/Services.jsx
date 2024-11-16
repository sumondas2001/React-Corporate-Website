import axios from "axios";
import { useEffect, useState } from "react";
import OurService from "../../components/OurServices/OurService";
import PagesCoverImg from "../../components/PagesCoverImg/PagesCoverImg";

const Services = () => {
     // Cover img url

     const imgUrl = 'https://iori.archielite.com/storage/general/box-image-2.png'


     const [services, setServices] = useState([]);
     useEffect(() => {
          axios.get('services.json')
               .then(res => {
                    setServices(res.data);
                    // console.log(res.data)
               })
               .catch(error => {
                    console.log(error)
               })
     }, [])
     return (
          <div className="mb-10 ">
               <div className="mb-10">
                    <PagesCoverImg title={"SERVICE"} imgUrl={imgUrl}></PagesCoverImg>
               </div>


               <div className="mb-10">
                    <h1 className="text-xl text-center font-medium">Our Services</h1>
                    <hr className="w-28 mt-2 border-t-black mx-auto" />
                    <hr className="w-40 mt-2 border-t-black mx-auto" />
               </div>

               <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-8 ">
                    {
                         services.map(service => <OurService key={service.id}
                              service={service}
                         >

                         </OurService>)
                    }
               </div>
          </div>
     );
};

export default Services;