import axios from "axios";
import { useEffect, useState } from "react";
import ClientReview from "./ClientReview";
import Marquee from "react-fast-marquee";
import { Carousel } from "react-responsive-carousel";

const ClientReviews = () => {

     const [ClientReviews, setClientReviews] = useState([]);

     useEffect(() => {
          axios.get('ClientReviews.json')
               .then(res => {
                    setClientReviews(res.data);
                    console.log(res.data)
               })
               .catch(error => {
                    console.log(error)
               })
     }, [])
     return (
          <div className="mb-10">
               <div className="mb-10" data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false">
                    <h1 className="text-2xl font-medium text-center mb-4">Our Clients Feedback</h1>
                    <hr className="w-28 mt-2 border-t-black mx-auto" />
                    <hr className="w-40 mt-2 border-t-black mx-auto" />
               </div>


               <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-10" data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false">

                    {
                         ClientReviews.map(review => <ClientReview
                              key={review.id}
                              review={review}
                         ></ClientReview>)
                    }

               </div>

          </div>
     );
};

export default ClientReviews;