import PropTypes from "prop-types";

const ClientReview = ({ review }) => {
     // console.log(review)
     const { clientName, clientPosition, ClientImg, clientReview } = review;
     return (
          <div className="space-y-3 rounded-xl text-center bg-[#e2f1f1] px-8 py-10">
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