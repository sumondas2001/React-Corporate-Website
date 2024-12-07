import axios from "axios";
import { useEffect, useState } from "react";
import OurTeam from "./OurTeam/OurTeam";
// import { FreeMode, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

const OurTeams = () => {

     const [team, setTeam] = useState([]);



     useEffect(() => {
          axios.get('team.json')
               .then(res => {
                    setTeam(res.data);
                    // console.log(res.data);
               })
               .catch(error => {
                    console.log(error)
               })

     }, [])

     return (
          <div className="mt-10 lg:mb-10 md:mb-6 mb-4"  >
               <div


                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-offset="100"
               >

                    <div>

                         <h1 className="text-2xl font-medium text-center mb-4">Our Teams</h1>

                         <div className="flex items-center justify-center gap-2 mt-4">
                              <hr className="w-9  border-cyan-400 border-2 " />
                              <p className="bg-cyan-400  p-1 w-0"></p>
                              <hr className="w-9  border-cyan-400 border-2 " />
                         </div>
                    </div>

                    <p className="lg:text-base md:text-sm text-xs  font-medium text-center mt-4 mb-10">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Minus minima neque tempora reiciendis.</p>
               </div>

               <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                    className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 ">
                    {
                         team?.map(team => <OurTeam
                              key={team.id}
                              team={team}
                         ></OurTeam>)
                    }

               </div>
               {/* <Swiper
                    breakpoints={{
                         // Mobile
                         0: {
                              slidesPerView: 1,
                         },
                         // Tablet
                         768: {
                              slidesPerView: 2,
                         },
                         // Laptop
                         1024: {
                              slidesPerView: 4,
                         },
                    }}
                    spaceBetween={30}
                    pagination={{
                         clickable: true,
                    }}
                    freeMode={true}
                    modules={[Pagination, FreeMode]}
                    className="mySwiper "
               >
                    {
                         team?.map(team => <SwiperSlide key={team.id} team={team}>




                              <div className="  hover:shadow-2xl shadow-xl  bg-[#E3FDFD] rounded-t-xl pb-6 "
                                   data-aos="fade-up"
                                   data-aos-offset="200"
                                   data-aos-delay="50"
                                   data-aos-duration="1000"
                                   data-aos-easing="ease-in-out"
                                   data-aos-mirror="true"
                                   data-aos-once="false"


                              >
                                   <div>
                                        <img className="h-80 rounded-t-xl w-full object-cover cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={team.img} alt="" />
                                   </div>
                                   <div className='text-center mt-3'>
                                        <h1 className="text-lg font-semibold">{team.name}</h1>
                                        <p className="text-sm font-normal opacity-100" >{team.profession}</p>
                                   </div>
                              </div>

                         </SwiperSlide>


                         )
                    }

               </Swiper> */}
          </div >
     );
};

export default OurTeams;