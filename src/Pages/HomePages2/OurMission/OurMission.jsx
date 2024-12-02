
const OurMission = () => {

     const imgURl = 'https://i.ibb.co.com/hYHSPCb/smartworks-coworking-c-W4l-LTav-U80-unsplash-3.jpg';
     return (
          <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse lg:gap-14 md:gap-y-10 gap-y-6 items-center mt-10 mb-10  lg:p-5 shadow-xl hover:shadow-2xl"
               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
          >

               <div className="space-y-6 lg:w-[650px]">
                    <div>
                         <h1 className="lg:text-2xl md:text-xl text-lg font-bold ">Our Mission</h1>

                         <div className="flex  items-center gap-2 lg:mt-3 md:mt-3 mt-2 ">
                              <hr className="lg:w-16 md:w-16 w-10  border-cyan-400 border-2 " />
                              <p className="bg-cyan-400   p-1 w-0"></p>
                         </div>
                    </div>
                    <p className="lg:text-lg md:text-base text-sm font-normal px-2 pb-4">Our mission is to inspire progress and deliver excellence by empowering businesses with innovative solutions. We are committed to creating value for our clients through cutting-edge strategies, sustainable practices, and unparalleled service. At Your Company, we aim to build long-lasting relationships founded on trust, transparency, and a shared vision for success. By prioritizing integrity and fostering collaboration, </p>
               </div>

               <div className="">
                    <img className="object-cover lg:rounded-r-xl md:rounded-t-xl lg:rounded-t-none rounded-t-xl   cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150 lg:w-[580px] md:w-[700px] w-[425px]  lg:h-[450px] md:h-[300px] h-[200px] " src={imgURl} alt="" />
               </div>
          </div>
     );
};

export default OurMission;