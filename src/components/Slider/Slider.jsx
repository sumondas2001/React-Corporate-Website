import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";



const Slider = () => {

     const [allSlider, setSlider] = useState([]);
     useEffect(() => {
          axios.get('/slider.json')
               .then(res => {
                    setSlider(res.data)
               })
               .catch(error => {
                    console.log(error);
                    toast.error(error)
               })
     }, [])


     return (
          <div className="sliderWidth">
               <Swiper
                    spaceBetween={3}
                    centeredSlides={true}
                    speed={2000}
                    autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                    }}
                    pagination={{
                         clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper "
               >

                    {

                         allSlider.map(slider => <SwiperSlide key={slider.id} slider={slider}>

                              <div

                                   className={"carousel-item relative w-full"}
                              >
                                   <img
                                        src={slider.image}
                                        alt={`Slide ${slider.id}`}
                                        className="w-full h-[300px] md:h-[400px] lg:h-[600px]   object-cover"
                                   />
                                   <div className="absolute  h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                                        <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]">
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

                                                       <button type="submit" className="px-3 mt-6 border py-2  bg-gradient-to-tr from-cyan-300 from-20% to-cyan-700  hover:from-cyan-600 hover:from-20% hover:to-cyan-300  text-base  font-semibold "> Discover More</button>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>

                              </div>

                         </SwiperSlide>)
                    }
               </Swiper>
          </div>
     );
};

export default Slider;




