import axios from "axios";
import { useEffect, useState } from "react";
import OurTeam from "./OurTeam/OurTeam";


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

               <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
                    {
                         team?.map(team => <OurTeam
                              key={team.id}
                              team={team}
                         ></OurTeam>)
                    }

               </div>
          </div>
     );
};

export default OurTeams;