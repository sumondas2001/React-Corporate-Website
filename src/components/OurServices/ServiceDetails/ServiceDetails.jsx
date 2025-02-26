import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import PagesCoverImg from "../../PagesCoverImg/PagesCoverImg";
import { FaCaretRight } from "react-icons/fa6";
import PagesTitle from "../../PagesTitle/PagesTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import HowWeWork from "../../HowWeWork/HowWeWork";


const ServiceDetails = () => {
     // window top pages
     const { PageTop } = useContext(AuthContext);
     PageTop();

     const [service, setService] = useState([]);


     const { service_description, service_img, service_name } = service;
     const [allServices, setAllServices] = useState([]);

     const { id } = useParams();
     // COVER img url
     const imgUrl = 'https://www.hitechparks.com/web/apps/corporate/uploads/slider/6_1604077959.jpg';



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

     return (
          <div className="mb-10">
               <PagesTitle title={'Service Details'}></PagesTitle>

               <div

                    className="mb-14">
                    <PagesCoverImg imgUrl={imgUrl} title={'SERVICES DETAILS'}> </PagesCoverImg>
               </div>


               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[350px] mx-auto ">
                    <div

                         className="flex lg:flex-row md:flex-row flex-col-reverse  lg:gap-20 gap-10 md:gap-10">
                         <div
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="1000"
                              data-aos-offset="100"


                              className=" lg:w-1/3 md:w-1/3 w-full shadow-lg rounded-xl  shadow-slate-300">
                              {
                                   allServices.map((service) => (
                                        <NavLink
                                             key={service.id}
                                             className={({ isActive }) =>
                                                  `border-2  items-center flex ${isActive ? 'bg-cyan-400 border-l-4 border-l-red-600' : 'hover:bg-cyan-400 hover:border-l-4 hover:border-l-red-600'
                                                  }`
                                             }
                                             to={`/servicesDetails/${service.id}`}
                                        >
                                             <ul className="flex items-center lg:px-3 md:px-1 px-2">
                                                  <FaCaretRight />
                                                  <li className="lg:px-4 md:px-2  px-3 py-4 text-base font-normal">{service.service_name}</li>
                                             </ul>
                                        </NavLink>
                                   ))
                              }

                         </div>

                         <div
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="1000"
                              data-aos-offset="100"
                              className="lg:space-y-8 md:space-y-7 space-y-6 lg:w-2/3 md:w-2/3">
                              <img className="lg:w-[800px] md:w-[500px] w-full rounded-2xl lg:h-[370px] md:h-[360px] h-[220px] object-cover  cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={service_img} alt="" />
                              <h1 className="lg:text-3xl md:text-2xl text-2xl font-bold">{service_name}</h1>
                              <p className="text-base font-light ">{service_description}</p>

                              <div>

                                   <Link to={`/serviceDetails/${id}/serviceQuoteFrom`}>




                                        <button className="px-3 mt-6 border py-2  bg-gradient-to-b from-cyan-400 from-30% to-cyan-600 text-white  hover:from-cyan-600 hover:from-30% hover:to-cyan-300  text-base  font-medium ">Get A Quote</button>
                                   </Link>
                              </div>
                         </div>

                    </div>
                    <HowWeWork></HowWeWork>
               </div>
          </div >
     );
};

export default ServiceDetails;