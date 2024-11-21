
const AboutUs = () => {
     return (

          <div className="py-10  mb-10"

          >

               <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"

                    data-aos-duration="5000"
                    data-aos-offset="100"

               >
                    <h1 className="text-2xl  font-bold text-center">About Us</h1>
                    <div className="flex items-center justify-center gap-2 mt-3 mb-10">
                         <hr className="w-9  border-cyan-400 border-2 " />
                         <p className="bg-cyan-400  p-1 w-0"></p>
                         <hr className="w-9  border-cyan-400 border-2 " />
                    </div>
               </div>

               <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"

                    data-aos-duration="5000"
                    data-aos-offset="100"
               >

                    <p className="lg:text-lg md:text-base text-xs lg:w-4/5 md:w-4/5 w-full mx-auto font-medium text-center ">Welcome to Your Company , where innovation meets excellence. As a leading corporate entity, we specialize in delivering tailored solutions designed to empower businesses and drive sustainable growth. Founded on the principles of integrity, innovation, and customer-centricity, we are committed to transforming challenges into opportunities for our clients.With a team of skilled professionals who bring extensive industry expertise and a forward-thinking mindset, we tailor our services to meet your unique needs.</p>
               </div>

          </div>


     );
};

export default AboutUs;