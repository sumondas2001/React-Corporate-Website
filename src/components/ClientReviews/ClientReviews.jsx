import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const ClientReviews = () => {
     const [clientReviews, setClientReviews] = useState([]);

     useEffect(() => {
          axios
               .get("/ClientReviews.json")
               .then((res) => {
                    setClientReviews(res.data);
                    console.log(res.data)
               })
               .catch((error) => {
                    console.log(error);
               });
     }, []);

     return (
          <div className="mb-10">
               <div
                    className="mb-10"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
               >
                    <div>
                         <h1 className="text-2xl font-medium text-center mb-4">
                              Our Clients Feedback
                         </h1>
                         <div className="flex items-center justify-center gap-2 mt-4">
                              <hr className="w-14  border-cyan-400 border-2 " />
                              <p className="bg-cyan-400  p-1 w-0"></p>
                              <hr className="w-14  border-cyan-400 border-2 " />
                         </div>
                    </div>
               </div>


               <div>
                    <Swiper
                         breakpoints={{
                              // Mobile
                              0: {
                                   slidesPerView: 1,
                              },
                              // Tablet
                              768: {
                                   slidesPerView: 2,
                              },
                              // Laptop
                              1024: {
                                   slidesPerView: 3,
                              },
                         }}
                         spaceBetween={20}
                         pagination={{
                              clickable: true,
                         }}

                         modules={[Pagination]}
                         className="mySwiper"



                    >
                         {
                              clientReviews.map(slider => <SwiperSlide key={slider.id} slider={slider}>
                                   <div className=" space-y-3 rounded-xl text-center bg-[#e2f1f1] px-8 py-10">
                                        <img className="rounded-full mx-auto" src={slider.ClientImg} alt="" />

                                        <h1 className="text-base font-medium">{slider.clientName}</h1>
                                        <p className="text-xs font-normal">{slider.clientPosition}</p>
                                        <p className="text-xs font-extralight">{slider.clientReview}</p>
                                   </div >

                              </SwiperSlide>)
                         }
                    </Swiper>
               </div>

          </div >
     );
};

export default ClientReviews;
