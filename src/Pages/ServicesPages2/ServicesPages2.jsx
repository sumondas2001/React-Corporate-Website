import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PagesCoverImg from "../../components/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../components/PagesTitle/PagesTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import ServicePages2 from "./ServicePages2/ServicePages2";
import HowWeWork from "../../components/HowWeWork/HowWeWork";

const ServicesPages2 = () => {
     // window top pages
     const { PageTop } = useContext(AuthContext);
     PageTop();

     const imgUrl = 'https://i.ibb.co.com/CPqgD5p/louise-viallesoubranne-Ot-O5-I2-R-494-unsplash.jpg'


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
               <PagesTitle title={'Services2'}></PagesTitle>


               <div className="mb-10">
                    <PagesCoverImg title={"SERVICES 2"} imgUrl={imgUrl}></PagesCoverImg>
               </div>


               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] mx-auto  ">
                    <div className="mb-10"
                         data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1000"
                         data-aos-offset="100"


                    >
                         <h1 className="text-2xl  font-medium">Our Services</h1>
                         <div className="flex items-center gap-2 mt-2">
                              <hr className="w-20 border-cyan-400 border-2 " />
                              <p className="bg-cyan-400  p-1 w-0"></p>
                         </div>
                    </div>

                    <div className="grid lg:grid-cols-2  grid-cols-1 gap-10 ">
                         {
                              services.map(service => <ServicePages2 key={service.id}
                                   service={service}
                              >

                              </ServicePages2>)
                         }
                    </div>
                    <HowWeWork></HowWeWork>
               </div>
          </div>
     );
};

export default ServicesPages2;