import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import './slider.css'



const Slider = () => {
     const [allSlider, setSlider] = useState([]);




     useEffect(() => {
          axios.get('/slider.json')
               .then(res => {
                    setSlider(res.data);
               })
               .catch(error => {
                    console.error(error);
                    toast.error("Failed to load slider data.");
               });
     }, []);


     return (

          <div className="sliderWidth ">


               <Swiper
                    spaceBetween={3}
                    centeredSlides={true}
                    speed={1000}
                    loop={true}
                    autoplay={{
                         delay: 3000,
                         disableOnInteraction: false,
                    }}
                    pagination={{
                         clickable: true,
                    }}
                    navigation={true}


                    modules={[Autoplay, Pagination, Navigation]}

                    className="mySwiper "
               >
                    {allSlider.map(slider => (
                         <SwiperSlide key={slider.id} slider={slider}>
                              <div className="carousel-item lg:h-full md:h-full h-[400px] relative w-full">
                                   <img
                                        src={slider.image}
                                        alt={`Slide ${slider.id}`}
                                        className="w-full h-screen object-cover"
                                   />
                                   <div className="absolute h-full  lg:pl-[85px] md:pl-14 pl-12 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                                        <div className="md:space-y-5 lg:space-y-7 space-y-1 lg:w-1/2 md:w-1/2 w-[250px]">
                                             <div>
                                                  <h1 className="md:text-2xl lg:text-3xl text-base font-bold text-white">
                                                       {slider.title}
                                                  </h1>
                                                  <p className="text-sm lg:font-normal md:font-normal font-extralight mt-3 text-white">
                                                       {slider.description}
                                                  </p>
                                             </div>
                                             <div>
                                                  <Link to={'/services'}>
                                                       <button
                                                            type="submit"
                                                            className="lg:px-3 md:px-3 px-2  mt-6 border lg:py-2 md:py-2 py-[6px] bg-gradient-to-b from-cyan-400 from-30% to-cyan-600 text-white  hover:from-cyan-600 hover:from-30% hover:to-cyan-300  text-base  font-medium "
                                                       >
                                                            Discover More
                                                       </button>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>
          </div>
     );
};

export default Slider;
