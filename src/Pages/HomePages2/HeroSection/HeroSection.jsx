
const HeroSection = () => {
     const imgUrl = 'https://i.ibb.co.com/MNsv5pN/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg'

     return (
          <div className="lg:mb-20 md:mb-16   relative bg-[#e7ffff] lg:pl-10 md:pl-6 pl-3 ">
               <div className="flex justify-between items-center ">

                    <div className="lg:space-y-6 md:space-y-3 space-y-2 lg:mt-0 md:mt-0 mt-14  "
                         data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1000"
                         data-aos-offset="100"
                    >
                         <div>
                              <span className="lg:text-base md:text-sm text-xs lg:font-medium md:font-medium font-light">We Are Expert In This Field</span>
                              <div className="flex  items-center gap-2 lg:mt-3 md:mt-3 mt-1 ">
                                   <hr className="lg:w-20 md:w-16 w-10  border-cyan-400 border-2 " />
                                   <p className="bg-cyan-400 p-1 w-0"></p>
                              </div>
                         </div>

                         <h1 className="lg:text-3xl md:text-xl text-xs lg:font-bold md:font-semibold font-medium">Grow Your Business More Efficiently</h1>
                         <p className="lg:text-lg md:text-sm text-xs lg:font-medium md:font-medium font-extralight">Agilos helps you to convert your data into a strategic asset and get top-notch business insights.</p>

                         <button className=" lg:px-5 md:px-4 px-3 border lg:py-3 md:py-2 py-1  bg-gradient-to-tr from-cyan-400 from-30% text-white to-cyan-800  hover:from-cyan-600 hover:from-20% hover:to-cyan-300  lg:text-base  md:text-base text-xs  lg:font-semibold md:font-medium font-normal ">Read More</button>
                    </div>
                    <img

                         className="object-cover  lg:h-screen md:h-[420px] h-[270px]  rounded-bl-full lg:w-[800px]  md:w-[400px] w-[220px] " src={imgUrl} alt="" />
               </div>

          </div>
     );
};

export default HeroSection;