import axios from "axios";
import { useContext, useEffect, useState } from "react";
import OurService from "../../components/OurServices/OurService";
import PagesCoverImg from "../../components/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../components/PagesTitle/PagesTitle";
import { AuthContext } from "../../Provider/AuthProvider";

const Services = () => {
     // window top pages
     const { PageTop } = useContext(AuthContext);
     PageTop();

     const imgUrl = 'https://iori.archielite.com/storage/general/box-image-2.png'


     const [services, setServices] = useState([]);
     useEffect(() => {
          axios.get('/services.json')
               .then(res => {
                    setServices(res.data);
                    console.log(res.data)
               })
               .catch(error => {
                    console.log(error)
               })
     }, [])
     return (
          <div className="mb-10 ">
               <PagesTitle title={'Services'}></PagesTitle>


               <div className="mb-10">
                    <PagesCoverImg title={"SERVICE"} imgUrl={imgUrl}></PagesCoverImg>
               </div>


               <div className="mb-10"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-offset="100"


               >
                    <h1 className="text-xl  font-medium">Our Services</h1>
                    <div className="flex items-center gap-2 mt-2">
                         <hr className="w-20 border-cyan-400 border-2 " />
                         <p className="bg-cyan-400  p-1 w-0"></p>
                    </div>
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