import axios from "axios";
import { useEffect, useState } from "react";
import ClientReview from "./ClientReview";
import Marquee from "react-fast-marquee";


const ClientReviews = () => {

     const [ClientReviews, setClientReviews] = useState([]);

     useEffect(() => {
          axios.get('/ClientReviews.json')
               .then(res => {
                    setClientReviews(res.data);
                    // console.log(res.data)
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
                    <div>
                         <h1 className="text-2xl font-medium text-center mb-4">Our Clients Feedback</h1>
                         <div className="flex items-center justify-center gap-2 mt-4">
                              <hr className="w-14  border-cyan-400 border-2 " />
                              <p className="bg-cyan-400  p-1 w-0"></p>
                              <hr className="w-14  border-cyan-400 border-2 " />
                         </div>
                    </div>
               </div>


               {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-10" data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false">



               </div> */}

               <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
               >
                    <Marquee

                         speed={18}
                         pauseOnHover
                         className="rounded-xl"
                    >

                         {
                              ClientReviews.map(review => <ClientReview
                                   key={review.id}
                                   review={review}
                              ></ClientReview>)
                         }

                    </Marquee>

               </div>




          </div>
     );
};

export default ClientReviews;