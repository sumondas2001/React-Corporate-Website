
const CeoSection2 = () => {
     const imgUrl = 'https://trax.acrothemes.com/bootstrap-v5/images/team-3.jpg';

     return (
          <div

               className="flex lg:flex-row  md:flex-row flex-col lg:justify-evenly md:gap-10 shadow-2xl bg-[#E3FDFD] mb-10 lg:p-10 md:p-6 p-4 mt-10 items-center rounded-xl">
               <div

                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                    className=""
               >
                    <img className="object-cover lg:h-96 md:h-72 w-[400px] h-96 cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={imgUrl} alt="" />
                    <div
                         style={{
                              clipPath: "polygon(15% 0%, 85% 0%, 100% 0%, 100% 0%, 84% 100%, 15% 100%, 0% 100%, 0% 0%)",
                         }}
                         className="mt-3 text-start pr-14 pl-4 -left-2 py-3 absolute bg-cyan-300 click bottom-4">
                         <h1 className=" lg:text-xl md:text-xl text-lg lg:font-bold md:font-semibold font-semibold">CEO </h1>
                         <h1 className="text-base  font-normal">Message</h1>
                    </div>
               </div>
               <div

                    className="lg:space-y-4 md:space-y-4 space-y-2 lg:text-start md:text-start text-center" data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
               >

                    <p className="text-lg  lg:w-[500px] md:w-96 w-80 font-medium">Diamonds are nothing more than chunks of coal that stuck to their jobs.</p>
                    <p className="text-sm font-normal lg:w-[500px] md:w-96 w-80">Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor incididunt labore et dolore magna minim veniam nostrud exercitation ullamco.</p>


               </div>

          </div >
     );
};

export default CeoSection2;