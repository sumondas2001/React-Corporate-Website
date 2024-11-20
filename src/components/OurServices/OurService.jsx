import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OurService = ({ service }) => {
     const { id, service_description, service_img, service_name } = service;
     return (
          <div className=" card bg-[#E3FDFD] shadow-xl rounded-2xl hover:shadow-2xl"

               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
          >
               <img className="rounded-t-2xl object-cover h-60  cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={service_img} alt="" />
               <div className="px-6  ">
                    <h1 className="text-lg font-semibold mt-3 ">{service_name}</h1>
                    <p className="text-sm font-normal mt-3 ">{service_description?.slice(0, 145)} <span className="font-semibold "> ....</span></p>

                    <div className=" justify-end flex mb-6">
                         <Link to={`/servicesDetails/${id}`} >
                              <FaArrowRightLong className="mr-6 text-2xl  text-[#5a989b]" />
                         </Link>
                    </div>

               </div>


          </div>


     );
};

export default OurService;

OurService.propTypes = {

     service: PropTypes.object
}