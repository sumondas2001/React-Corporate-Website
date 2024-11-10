

const CeoSection = () => {
     return (
          <div className="flex lg:flex-row md:flex-row flex-col lg:justify-evenly md:gap-10 shadow-2xl mb-10 lg:p-10 md:p-6 p-4 items-center">
               <div data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
               >
                    <img className="object-cover lg:h-96 md:h-72 " src={'https://trax.acrothemes.com/bootstrap-v5/images/team-3.jpg'} alt="" />
               </div>
               <div className="lg:space-y-4 md:space-y-4 space-y-2 lg:text-start md:text-start text-center" data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
               >
                    <h1 className="lg:text-2xl md:text-xl text-xl mt-3  lg:font-bold md:font-semibold font-semibold">CEO </h1>
                    <h1 className="lg:text-lg md:text-base text-base font-semibold">Message</h1>
                    <p className="text-sm font-medium">Diamonds are nothing more than chunks of coal that stuck to their jobs.</p>
                    <p className="text-sm font-light lg:w-96 md:w-96 w-80">Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor incididunt labore et dolore magna minim veniam nostrud exercitation ullamco.</p>


               </div>

          </div>
     );
};

export default CeoSection;