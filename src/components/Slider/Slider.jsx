import { AwesomeButton } from "react-awesome-button";
import img1 from "../../assets/homeCarousel/pexels-cottonbro-3205570.jpg";
import img2 from '../../assets/homeCarousel/pexels-divinetechygirl-1181355.jpg';
import img3 from '../../assets/homeCarousel/pexels-divinetechygirl-1181396.jpg';
import img4 from '../../assets/homeCarousel/pexels-jopwell-2422277.jpg';
import img5 from '../../assets/homeCarousel/pexels-marily-torres-227778-776615.jpg';
import img6 from '../../assets/homeCarousel/pexels-rethaferguson-3811082.jpg';
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";



const Slider = () => {
     return (
          <div className="carousel w-full h-[300px] md:h-[400px]  lg:h-[590px]">
               <div id="slide1" className="carousel-item relative w-full">
                    <img
                         src={img1}
                         className="w-full rounded-xl object-fill  " />
                    <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
                              <div >
                                   <h1 className="text-2xl font-bold text-white">Innovating for a Sustainable Future</h1>
                                   <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              </div>
                              <div >
                                   <AwesomeButton type="primary">Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide6" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                         <a href="#slide2"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                    </div>
               </div>
               <div id="slide2" className="carousel-item relative w-full">
                    <img
                         src={img2}
                         className="w-full rounded-xl object-cover" />
                    <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
                              <h1 className="md:text-2xl lg:text-3xl  text-lg  font-bold text-white">Innovating for a Sustainable Future</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className=" ">
                                   <AwesomeButton type="primary" >Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide1" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                         <a href="#slide3"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                    </div>
               </div>
               <div id="slide3" className="carousel-item relative w-full">
                    <img
                         src={img3}
                         className="w-full rounded-xl object-cover" />
                    <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
                              <h1 className="md:text-2xl lg:text-3xl  text-lg  font-bold text-white">Innovating for a Sustainable Future</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className=" ">
                                   <AwesomeButton type="primary" >Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide2" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                         <a href="#slide4"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                    </div>
               </div>
               <div id="slide4" className="carousel-item relative w-full">
                    <img
                         src={img4}
                         className="w-full rounded-xl object-cover" />
                    <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
                              <h1 className="md:text-2xl lg:text-3xl  text-lg  font-bold text-white">Innovating for a Sustainable Future</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className=" ">
                                   <AwesomeButton type="primary" >Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide3" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                         <a href="#slide5"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                    </div>
               </div>
               <div id="slide5" className="carousel-item relative w-full">
                    <img
                         src={img5}
                         className="w-full rounded-xl object-cover  " />
                    <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
                              <h1 className="md:text-2xl lg:text-3xl  text-lg  font-bold text-white">Innovating for a Sustainable Future</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className=" ">
                                   <AwesomeButton type="primary" >Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide4" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                         <a href="#slide6"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                    </div>
               </div>
               <div id="slide6" className="carousel-item relative w-full">
                    <img
                         src={img6}
                         className="w-full rounded-xl object-cover" />
                    <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
                              <h1 className="md:text-2xl lg:text-3xl  text-lg  font-bold text-white">Innovating for a Sustainable Future</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className=" ">
                                   <AwesomeButton type="primary" >Discover More</AwesomeButton>


                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                         <a href="#slide5" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                         <a href="#slide1"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
                    </div>
               </div>






          </div>
     );
};

export default Slider;