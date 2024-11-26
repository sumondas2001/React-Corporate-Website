import PropTypes from "prop-types";

const OurClient = ({ client }) => {
     // console.log(client);
     const { CompanyImg } = client;
     return (
          <div
               className="ml-2 hover:cursor-pointer border border-cyan-300 rounded "
          >
               <img className="w-[293px] h-24 object-cover   mix-blend-multiply" src={CompanyImg} alt="" />
          </div>
     );
};

export default OurClient;


OurClient.propTypes = {

     client: PropTypes.object,

}
