import PropTypes from "prop-types";

const OurService = ({ service }) => {
     const { service_description, service_img, service_name } = service;
     return (
          <div className=" card bg-[#E3FDFD] shadow-xl rounded-3xl "

               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
          >
               <img className="rounded-t-3xl object-cover h-60  cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={service_img} alt="" />
               <div className="px-6  ">
                    <h1 className="text-base font-medium mt-3 text-center">{service_name}</h1>
                    <p className="text-xs font-light mt-3 mb-6">{service_description}</p>
               </div>

          </div>


     );
};

export default OurService;

OurService.propTypes = {

     service: PropTypes.object
}