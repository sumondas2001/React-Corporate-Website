import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Achievement from "./Achievement";

const AchievementsSection = () => {
     const [achievements, setAchievements] = useState([]);
     // console.log(achievements)
     useEffect(() => {
          axios.get('/achievements.json')
               .then(res => {
                    setAchievements(res.data)
               })
               .catch(error => {
                    toast.error(error)
               })
     }, [])
     return (
          <div className="lg:mb-20 lg:mt-20 mb-10 mt-10">
               <div className="mb-16"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-offset="20"
               >
                    <h1 className="lg:text-3xl text-xl font-semibold">Achievements Count</h1>
                    <div className="flex items-center  gap-2 mt-4">
                         <hr className="lg:w-32 w-20  border-cyan-400 border-2 " />
                         <p className="bg-cyan-400  p-1 w-0"></p>
                    </div>
               </div>
               <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-offset="20"
                    className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-4 md:gap-10 gap-8 box-content mt-10 bg-[#E3FDFD] py-20 rounded-xl">
                    {
                         achievements.map((achievement) => <Achievement
                              key={achievement.id}
                              achievement={achievement}
                         >
                         </Achievement>)
                    }
               </div>

          </div>
     );
};

export default AchievementsSection;