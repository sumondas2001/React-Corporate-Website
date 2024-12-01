import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServicePages2 = ({ service }) => {
     const { id, service_description, service_img, service_name } = service;
     return (
          <div className="  flex lg:flex-row md:flex-row flex-col gap-2  items-center bg-[#E3FDFD] shadow-xl rounded-r-xl hover:shadow-2xl  "

               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
          >
               <div className="lg:w-2/5 md:w-2/5  ">
                    <img className=" lg:h-[250px] md:h-[250px] h-[220px] w-[370px] object-cover  cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150 " src={service_img} alt="" />
               </div>
               <div className="space-y-4 lg:w-3/5 md:w-3/5 w-full  px-4">
                    <h1 className="text-lg font-semibold  ">{service_name}</h1>
                    <p className="text-sm font-normal  ">{service_description?.slice(0, 200)} ...</p>

                    <button className="font-semibold text-sm pb-6 hover:text-cyan-600  "><Link to={`/servicesDetails/${id}`} >Read More</Link></button>


               </div >


          </div >


     );
};

export default ServicePages2;

ServicePages2.propTypes = {

     service: PropTypes.object
}