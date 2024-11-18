
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';



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
          <Swiper
               spaceBetween={30}
               centeredSlides={true}
               speed={1000}
               autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
               }}
               pagination={{
                    clickable: true,
               }}
               modules={[Autoplay, Pagination]}
               className="mySwiper"
          >

               {

                    allSlider.map(slider => <SwiperSlide key={slider.id} slider={slider}>

                         <div

                              className={"carousel-item relative w-full"}
                         >
                              <img
                                   src={slider.image}
                                   alt={`Slide ${slider.id}`}
                                   className="w-full h-[300px] md:h-[400px] lg:h-[590px] rounded-xl object-cover"
                              />
                              <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
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
                                             <button className="text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">
                                                  Discover More
                                             </button>
                                        </div>
                                   </div>
                              </div>

                         </div>

                    </SwiperSlide>)
               }
          </Swiper>
     );
};

export default Slider;




