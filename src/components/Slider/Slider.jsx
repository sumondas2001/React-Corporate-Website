
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";



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
          // <div className="carousel w-full h-[300px] md:h-[400px]  lg:h-[590px]">
          //      <div id="slide1" className="carousel-item relative w-full">
          //           <img
          //                src={img1}
          //                className="w-full  h-[300px] md:h-[400px]  lg:h-[590px] rounded-xl object-cover  " />
          //           <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          //                <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
          //                     <div >
          //                          <h1 className="md:text-2xl lg:text-3xl  text-base  font-bold text-white">Innovating for a Sustainable Future</h1>
          //                          <p className="text-sm  lg:font-normal md:font-normal font-extralight mt-3 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          //                     </div>
          //                     <div >


          //                          <button className=" text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">Discover More</button>


          //                     </div>
          //                </div>
          //           </div>
          //           <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
          //                <a href="#slide6" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //                <a href="#slide2"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //           </div>
          //      </div>
          //      <div id="slide2" className="carousel-item relative w-full">
          //           <img
          //                src={img2}
          //                className="w-full  h-[300px] md:h-[400px]  lg:h-[590px] rounded-xl object-cover" />
          //           <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          //                <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
          //                     <div >
          //                          <h1 className="md:text-2xl lg:text-3xl  text-base  font-bold text-white">Innovating for a Sustainable Future</h1>
          //                          <p className="text-sm  lg:font-normal md:font-normal font-extralight mt-3 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          //                     </div>
          //                     <div className=" ">
          //                          <button className=" text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">Discover More</button>

          //                     </div>
          //                </div>
          //           </div>
          //           <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
          //                <a href="#slide1" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //                <a href="#slide3"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //           </div>
          //      </div>
          //      <div id="slide3" className="carousel-item relative w-full">
          //           <img
          //                src={img3}
          //                className="w-full  h-[300px] md:h-[400px]  lg:h-[590px] rounded-xl object-cover" />
          //           <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          //                <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
          //                     <div >
          //                          <h1 className="md:text-2xl lg:text-3xl  text-base  font-bold text-white">Innovating for a Sustainable Future</h1>
          //                          <p className="text-sm  lg:font-normal md:font-normal font-extralight mt-3 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          //                     </div>
          //                     <div className=" ">

          //                          <button className=" text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">Discover More</button>


          //                     </div>
          //                </div>
          //           </div>
          //           <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
          //                <a href="#slide2" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //                <a href="#slide4"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //           </div>
          //      </div>
          //      <div id="slide4" className="carousel-item relative w-full">
          //           <img
          //                src={img4}
          //                className="w-full  h-[300px] md:h-[400px]  lg:h-[590px] rounded-xl object-cover" />
          //           <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          //                <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
          //                     <div >
          //                          <h1 className="md:text-2xl lg:text-3xl  text-base  font-bold text-white">Innovating for a Sustainable Future</h1>
          //                          <p className="text-sm  lg:font-normal md:font-normal font-extralight mt-3 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          //                     </div>
          //                     <div className=" ">

          //                          <button className=" text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">Discover More</button>


          //                     </div>
          //                </div>
          //           </div>
          //           <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
          //                <a href="#slide3" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //                <a href="#slide5"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //           </div>
          //      </div>
          //      <div id="slide5" className="carousel-item relative w-full">
          //           <img
          //                src={img5}
          //                className="w-full  h-[300px] md:h-[400px]  lg:h-[590px] rounded-xl object-cover  " />
          //           <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          //                <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
          //                     <div >
          //                          <h1 className="md:text-2xl lg:text-3xl  text-base  font-bold text-white">Innovating for a Sustainable Future</h1>
          //                          <p className="text-sm  lg:font-normal md:font-normal font-extralight mt-3 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          //                     </div>
          //                     <div className=" ">

          //                          <button className=" text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">Discover More</button>
          //                     </div>
          //                </div>
          //           </div>
          //           <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
          //                <a href="#slide4" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //                <a href="#slide6"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //           </div>
          //      </div>
          //      <div id="slide6" className="carousel-item relative w-full">
          //           <img
          //                src={img6}
          //                className="w-full  h-[300px] md:h-[400px]  lg:h-[590px] rounded-xl object-cover" />
          //           <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          //                <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]  ">
          //                     <div >
          //                          <h1 className="md:text-2xl lg:text-3xl  text-base  font-bold text-white">Innovating for a Sustainable Future</h1>
          //                          <p className="text-sm  lg:font-normal md:font-normal font-extralight mt-3 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          //                     </div>
          //                     <div className=" ">

          //                          <button className=" text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">Discover More</button>

          //                     </div>
          //                </div>
          //           </div>
          //           <div className="absolute bottom-10  left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
          //                <a href="#slide5" ><CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //                <a href="#slide1"  ><CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" /></a>
          //           </div>
          //      </div>






          // </div>

          <div className="carousel w-full h-[300px] md:h-[400px] lg:h-[590px]">
               {
                    allSlider.map((slide, index) => (
                         <div
                              id={`slide${slide.id}`}
                              key={slide.id}
                              className="carousel-item relative w-full"
                         >
                              <img
                                   src={slide.image}
                                   alt={`Slide ${slide.id}`}
                                   className="w-full h-[300px] md:h-[400px] lg:h-[590px] rounded-xl object-cover"
                              />
                              <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                                   <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]">
                                        <div>
                                             <h1 className="md:text-2xl lg:text-3xl text-base font-bold text-white">
                                                  {slide.title}
                                             </h1>
                                             <p className="text-sm lg:font-normal md:font-normal font-extralight mt-3 text-white">
                                                  {slide.description}
                                             </p>
                                        </div>
                                        <div>
                                             <button className="text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">
                                                  Discover More
                                             </button>
                                        </div>
                                   </div>
                              </div>
                              <div className="absolute bottom-10 left-5 right-20 justify-end flex -translate-y-1/2 transform gap-10">
                                   <a
                                        href={`#slide${index === 0 ? allSlider.length : index}`}
                                   >
                                        <CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" />
                                   </a>
                                   <a
                                        href={`#slide${(index + 1) % allSlider.length + 1}`}
                                   >
                                        <CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" />
                                   </a>
                              </div>
                         </div>
                    ))
               }
          </div>
     );
};

export default Slider;






// import axios from "axios";
// import { useEffect, useState } from "react";
// import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

// const Slider = () => {
//      const [allSlider, setAllSlider] = useState([]);

//      useEffect(() => {
//           axios.get('/slider.json')
//                .then(res => {
//                     setAllSlider(res.data)
//                })
//      }, [])
//      const [currentIndex, setCurrentIndex] = useState(0);

//      const handlePrev = () => {
//           setCurrentIndex((prevIndex) =>
//                prevIndex === 0 ? allSlider.length - 1 : prevIndex - 1
//           );
//      };

//      const handleNext = () => {
//           setCurrentIndex((prevIndex) =>
//                prevIndex === allSlider.length - 1 ? 0 : prevIndex + 1
//           );
//      };

//      return (
//           <div className="carousel w-full h-[300px] md:h-[400px] lg:h-[590px]">
//                {allSlider.map((slide, index) => (
//                     <div
//                          key={slide.id}
//                          className={`carousel-item relative w-full ${index === currentIndex ? "block" : "hidden"
//                               }`}
//                     >
//                          <img
//                               src={slide.image}
//                               alt={`Slide ${slide.id}`}
//                               className="w-full h-[300px] md:h-[400px] lg:h-[590px] rounded-xl object-cover"
//                          />
//                          <div className="absolute rounded-xl h-full md:pl-14 lg:pl-14 pl-8 top-0 left-0 right-0 justify-start flex gap-6 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
//                               <div className="md:space-y-7 lg:space-y-7 space-y-4 lg:w-1/3 md:w-1/2 w-[250px]">
//                                    <div>
//                                         <h1 className="md:text-2xl lg:text-3xl text-base font-bold text-white">
//                                              {slide.title}
//                                         </h1>
//                                         <p className="text-sm lg:font-normal md:font-normal font-extralight mt-3 text-white">
//                                              {slide.description}
//                                         </p>
//                                    </div>
//                                    <div>
//                                         <button className="text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">
//                                              Discover More
//                                         </button>
//                                    </div>
//                               </div>
//                          </div>
//                          <div className="absolute bottom-10 left-5 right-20 justify-end flex gap-10">
//                               <button onClick={handlePrev}>
//                                    <CgArrowLongLeft className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" />
//                               </button>
//                               <button onClick={handleNext}>
//                                    <CgArrowLongRight className="lg:text-4xl md:text-3xl text-xl text-white opacity-80" />
//                               </button>
//                          </div>
//                     </div>
//                ))}
//           </div>
//      );
// };

// export default Slider;
