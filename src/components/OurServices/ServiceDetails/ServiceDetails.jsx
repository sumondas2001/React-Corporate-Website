import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import PagesCoverImg from "../../PagesCoverImg/PagesCoverImg";
import { FaCaretRight } from "react-icons/fa6";
import { AwesomeButton } from "react-awesome-button";


const ServiceDetails = () => {
     const [service, setService] = useState([]);
     // console.log(service)
     const [allServices, setAllServices] = useState([]);
     console.log(allServices)
     const { id } = useParams();
     // COVER img url
     const imgUrl = 'https://www.hitechparks.com/web/apps/corporate/uploads/slider/6_1604077959.jpg';

     const { service_description, service_img, service_name } = service;


     useEffect(() => {
          axios.get('/services.json')
               .then(res => {


                    const data = res.data?.find(singleService => singleService.id === parseFloat(id));
                    setService(data)
               })
               .catch(error => {
                    console.log(error)
               })
     }, [id]);


     useEffect(() => {
          axios.get('/services.json')
               .then(res => {


                    setAllServices(res.data)
               })
               .catch(error => {
                    console.log(error)
               })
     }, []);

     console.log(id)
     return (
          <div className="mb-10">
               <div className="mb-14">
                    <PagesCoverImg imgUrl={imgUrl} title={'DETAILS'}> </PagesCoverImg>
               </div>


               <div className="flex lg:flex-row md:flex-row flex-col-reverse  lg:gap-20 gap-10 md:gap-10">
                    <div className=" lg:w-1/3 md:w-1/3 w-full shadow-xl rounded-xl  shadow-slate-300">
                         {
                              allServices.map((service) => (
                                   <NavLink
                                        key={service.id}
                                        className={({ isActive }) =>
                                             ` border-2 items-center flex ${isActive ? 'bg-[#A6E3E9]' : 'hover:bg-[#A6E3E9]'
                                             }`
                                        }
                                        to={`/services/servicesDetails/${service.id}`}
                                   >
                                        <ul className="flex items-center lg:px-3 md:px-1 px-2">
                                             <FaCaretRight />
                                             <li className="lg:px-4 md:px-2 px-3 py-4 text-base font-normal">{service.service_name}</li>
                                        </ul>
                                   </NavLink>
                              ))
                         }

                    </div>

                    <div className="lg:space-y-8 md:space-y-7 space-y-6 lg:w-2/3 md:w-2/3">
                         <img className="lg:w-[800px] md:w-[500px] w-full rounded-2xl lg:h-[370px] md:h-[360px] h-[220px] object-cover" src={service_img} alt="" />
                         <h1 className="lg:text-3xl md:text-2xl text-2xl font-bold">{service_name}</h1>
                         <p className="text-sm font-light">{service_description}</p>

                         <div className="">
                              <AwesomeButton className="bg-[#A6E3E9]">Get A Quote</AwesomeButton>


                         </div>
                    </div>

               </div>
          </div >
     );
};

export default ServiceDetails;