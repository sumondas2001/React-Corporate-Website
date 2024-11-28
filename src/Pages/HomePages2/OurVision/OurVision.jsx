
const OurVision = () => {

     const imgUrl = 'https://i.ibb.co.com/Vp6Xtmt/linkedin-sales-solutions-4rv-Bjo-QWERk-unsplash.jpg';
     return (

          <div className="flex lg:flex-row-reverse md:flex-col-reverse hover:shadow-2xl shadow-xl  flex-col-reverse lg:gap-14 md:gap-y-10 gap-y-6 items-center mt-10 mb-10  lg:p-5"
               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
          >

               <div className="space-y-6 lg:w-[650px]">
                    <div>
                         <h1 className="lg:text-2xl md:text-xl text-lg font-bold ">Our Vision</h1>

                         <div className="flex  items-center gap-2 lg:mt-3 md:mt-3 mt-2 ">
                              <hr className="lg:w-20 md:w-16 w-10  border-cyan-400 border-2 " />
                              <p className="bg-cyan-400   p-1 w-0"></p>
                         </div>
                    </div>
                    <p className="lg:text-lg md:text-base text-sm font-normal">Our vision is to become a global leader in delivering transformative solutions that redefine industry standards. We aspire to create a future where innovation, sustainability, and excellence drive progress for businesses and communities alike.
                         At Your Company , we envision empowering organizations to achieve their fullest potential by harnessing the power of technology, creativity, and collaboration. Through unwavering dedication and a commitment to positive change,</p>
               </div>

               <div className="">
                    <img className="object-cover rounded-lg cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150 lg:w-[580px] md:w-[700px] w-[425px]  lg:h-[450px] md:h-[300px] h-[200px] " src={imgUrl} alt="" />
               </div>
          </div>

     );
};

export default OurVision;