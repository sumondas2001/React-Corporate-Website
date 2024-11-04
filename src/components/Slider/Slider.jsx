import img1 from "../../assets/homeCarousel/pexels-cottonbro-3205570.jpg";
import img2 from '../../assets/homeCarousel/pexels-divinetechygirl-1181355.jpg';
import img3 from '../../assets/homeCarousel/pexels-divinetechygirl-1181396.jpg';
import img4 from '../../assets/homeCarousel/pexels-jopwell-2422277.jpg';
import img5 from '../../assets/homeCarousel/pexels-marily-torres-227778-776615.jpg';
import img6 from '../../assets/homeCarousel/pexels-rethaferguson-3811082.jpg';

const Slider = () => {
     return (
          <div className="carousel w-full h-[600px]">
               <div id="slide1" className="carousel-item relative w-full">
                    <img
                         src={img1}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 w-1/3 ">
                              <h1 className="text-6xl font-bold text-white">Innovating for a Sustainable Future</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className="">
                                   <button className="bg-[#FF3811] text-sm font-semibold text-white px-6 py-4 rounded-lg hover:bg-[#f06549] mr-6">Discover More</button>
                                   <button className=" text-sm font-semibold text-white px-6 py-4 rounded-lg btn-outline btn">Discover More</button>
                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-0 left-5 right-5 justify-end flex -translate-y-1/2 transform gap-6">
                         <a href="#slide6" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❮</a>
                         <a href="#slide2" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❯</a>
                    </div>
               </div>
               <div id="slide2" className="carousel-item relative w-full">
                    <img
                         src={img2}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 w-1/3 ">
                              <h1 className="text-6xl font-bold text-white">Empowering Your Business with Advanced Solutions</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className="">
                                   <button className="bg-[#FF3811] text-sm font-semibold text-white px-6 py-4 rounded-lg hover:bg-[#f06549] mr-6">Discover More</button>
                                   <button className=" text-sm font-semibold text-white px-6 py-4 rounded-lg btn-outline btn">Discover More</button>
                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-0 left-5 right-5 justify-end flex -translate-y-1/2 transform gap-6">
                         <a href="#slide2" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❮</a>
                         <a href="#slide3" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❯</a>
                    </div>
               </div>
               <div id="slide3" className="carousel-item relative w-full">
                    <img
                         src={img3}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 w-1/3 ">
                              <h1 className="text-6xl font-bold text-white">Building Partnerships, Delivering Results</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className="">
                                   <button className="bg-[#FF3811] text-sm font-semibold text-white px-6 py-4 rounded-lg hover:bg-[#f06549] mr-6">Discover More</button>
                                   <button className=" text-sm font-semibold text-white px-6 py-4 rounded-lg btn-outline btn">Discover More</button>
                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-0 left-5 right-5 justify-end flex -translate-y-1/2 transform gap-6">
                         <a href="#slide3" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❮</a>
                         <a href="#slide4" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❯</a>
                    </div>
               </div>
               <div id="slide4" className="carousel-item relative w-full">
                    <img
                         src={img4}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 w-1/3 ">
                              <h1 className="text-6xl font-bold text-white">ATransforming Challenges into Opportunities</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className="">
                                   <button className="bg-[#FF3811] text-sm font-semibold text-white px-6 py-4 rounded-lg hover:bg-[#f06549] mr-6">Discover More</button>
                                   <button className=" text-sm font-semibold text-white px-6 py-4 rounded-lg btn-outline btn">Discover More</button>
                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-0 left-5 right-5 justify-end flex -translate-y-1/2 transform gap-6">
                         <a href="#slide4" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❮</a>
                         <a href="#slide5" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❯</a>
                    </div>
               </div>
               <div id="slide5" className="carousel-item relative w-full">
                    <img
                         src={img5}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 w-1/3 ">
                              <h1 className="text-6xl font-bold text-white">Your Vision, Our Expertise</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className="">
                                   <button className="bg-[#FF3811] text-sm font-semibold text-white px-6 py-4 rounded-lg hover:bg-[#f06549] mr-6">Discover More</button>
                                   <button className=" text-sm font-semibold text-white px-6 py-4 rounded-lg btn-outline btn">Discover More</button>
                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-0 left-5 right-5 justify-end flex -translate-y-1/2 transform gap-6">
                         <a href="#slide5" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❮</a>
                         <a href="#slide6" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❯</a>
                    </div>
               </div>
               <div id="slide6" className="carousel-item relative w-full">
                    <img
                         src={img6}
                         className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full pl-14 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                         <div className="space-y-7 w-1/3 ">
                              <h1 className="text-6xl font-bold text-white">Excellence in Every Project, Every Time</h1>
                              <p className="text-sm font-normal text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                              <div className="">
                                   <button className="bg-[#FF3811] text-sm font-semibold text-white px-6 py-4 rounded-lg hover:bg-[#f06549] mr-6">Discover More</button>
                                   <button className=" text-sm font-semibold text-white px-6 py-4 rounded-lg btn-outline btn">Discover More</button>
                              </div>
                         </div>
                    </div>
                    <div className="absolute bottom-0 left-5 right-5 justify-end flex -translate-y-1/2 transform gap-6">
                         <a href="#slide5" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❮</a>
                         <a href="#slide1" className="btn  btn-circle hover:bg-[#76efff] bg-[#49dcf0] ">❯</a>
                    </div>
               </div>



          </div>
     );
};

export default Slider;