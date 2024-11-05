import { AwesomeButton } from "react-awesome-button";
import img1 from "../../assets/homeCarousel/pexels-cottonbro-3205570.jpg";
import img2 from '../../assets/homeCarousel/pexels-divinetechygirl-1181355.jpg';
import img3 from '../../assets/homeCarousel/pexels-divinetechygirl-1181396.jpg';
import img4 from '../../assets/homeCarousel/pexels-jopwell-2422277.jpg';
import img5 from '../../assets/homeCarousel/pexels-marily-torres-227778-776615.jpg';
import img6 from '../../assets/homeCarousel/pexels-rethaferguson-3811082.jpg';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const Slider = () => {
     return (
          <div className="carousel w-full h-[300px] md:h-[400px]  lg:h-[590px]">
               <div id="slide1" className="carousel-item relative w-full">
                    <img
                         src={img1}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 md:w-1/3 ">
                              <div data-aos="fade-up"
                                   data-aos-easing="ease-out-cubic"
                                   data-aos-duration="1000"
                                   data-aos-offset="0">
                                   <h1 className="text-2xl font-bold text-white">Innovating for a Sustainable Future</h1>
                                   <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              </div>
                              <div data-aos="fade-up"
                                   data-aos-easing="ease-out-cubic"
                                   data-aos-duration="0"
                                   data-aos-offset="100">
                                   <AwesomeButton type="primary">Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide6" ><FaArrowLeft className="text-2xl text-white opacity-50" /></a>
                         <a href="#slide2"  ><FaArrowRight className="text-2xl  text-white opacity-50" /></a>
                    </div>
               </div>
               <div id="slide2" className="carousel-item relative w-full">
                    <img
                         src={img2}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 w-1/3 ">
                              <h1 className="text-2xl font-bold text-white">Innovating for a Sustainable Future</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className="">
                                   <AwesomeButton type="primary">Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide2" ><FaArrowLeft className="text-2xl text-white opacity-50" /></a>
                         <a href="#slide3"  ><FaArrowRight className="text-2xl  text-white opacity-50" /></a>
                    </div>
               </div>
               <div id="slide3" className="carousel-item relative w-full">
                    <img
                         src={img3}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 w-1/3 ">
                              <h1 className="text-2xl font-bold text-white">Innovating for a Sustainable Future</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className="">
                                   <AwesomeButton type="primary">Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide3" ><FaArrowLeft className="text-2xl text-white opacity-50" /></a>
                         <a href="#slide4"  ><FaArrowRight className="text-2xl  text-white opacity-50" /></a>
                    </div>
               </div>
               <div id="slide4" className="carousel-item relative w-full">
                    <img
                         src={img4}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 w-1/3 ">
                              <h1 className="text-2xl font-bold text-white">Innovating for a Sustainable Future</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className="">
                                   <AwesomeButton type="primary">Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide4" ><FaArrowLeft className="text-2xl text-white opacity-50" /></a>
                         <a href="#slide5"  ><FaArrowRight className="text-2xl  text-white opacity-50" /></a>
                    </div>
               </div>
               <div id="slide5" className="carousel-item relative w-full">
                    <img
                         src={img5}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 w-1/3 ">
                              <h1 className="text-2xl font-bold text-white">Innovating for a Sustainable Future</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className="">
                                   <AwesomeButton type="primary">Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide5" ><FaArrowLeft className="text-2xl text-white opacity-50" /></a>
                         <a href="#slide6"  ><FaArrowRight className="text-2xl  text-white opacity-50" /></a>
                    </div>
               </div>
               <div id="slide6" className="carousel-item relative w-full">
                    <img
                         src={img6}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 w-1/3 ">
                              <h1 className="text-2xl font-bold text-white">Innovating for a Sustainable Future</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className="">
                                   <AwesomeButton type="primary">Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide5" ><FaArrowLeft className="text-2xl text-white opacity-50" /></a>
                         <a href="#slide1"  ><FaArrowRight className="text-2xl  text-white opacity-50" /></a>
                    </div>
               </div>





          </div>
     );
};

export default Slider;