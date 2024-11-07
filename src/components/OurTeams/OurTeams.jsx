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
          <div className="mt-10 mb-10">
               <div>

                    <h1 className="text-2xl  font-bold text-cyan-500 text-center mt-10">Our Team</h1>
                    <hr className="w-28 mt-2 border-t-black mx-auto" />
                    <hr className="w-40 mt-2 border-t-black mx-auto" />

                    <p className="text-lg font-medium text-center mt-4 mb-10">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Minus minima neque tempora reiciendis.</p>
               </div>

               <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
                    {
                         team.map(team => <OurTeam
                              key={team.id}
                              team={team}
                         ></OurTeam>)
                    }

               </div>
          </div>
     );
};

export default OurTeams;