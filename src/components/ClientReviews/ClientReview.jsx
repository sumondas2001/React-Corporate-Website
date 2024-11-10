import PropTypes from "prop-types";

const ClientReview = ({ review }) => {
     // console.log(review)
     const { clientName, clientPosition, ClientImg, clientReview } = review;
     return (
          <div className="space-y-3  text-center shadow-xl p-8 rounded-lg">
               <img className="rounded-full mx-auto" src={ClientImg} alt="" />

               <h1 className="text-base font-medium">{clientName}</h1>
               <p className="text-xs font-normal">{clientPosition}</p>
               <p className="text-xs font-extralight">{clientReview}</p>
          </div >
     );
};

export default ClientReview;


ClientReview.propTypes = {

     review: PropTypes.object,

}