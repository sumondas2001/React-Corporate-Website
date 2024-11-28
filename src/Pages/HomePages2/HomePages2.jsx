import { useContext } from "react";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection";
import ClientReviews from "../../components/ClientReviews/ClientReviews";
import ContactFrom from "../../components/ContactFrom/ContactFrom";
import HaveQu from "../../components/HaveQu/HaveQu";
import OurClients from "../../components/OurClients/OurClients";
import OurServices from "../../components/OurServices/OurServices";
import HeroSection from "./HeroSection/HeroSection";
import OurMission from "./OurMission/OurMission";
import OurVision from "./OurVision/OurVision";
import { AuthContext } from "../../Provider/AuthProvider";

const HomePages2 = () => {
     // window top pages
     const { PageTop } = useContext(AuthContext);
     PageTop();
     return (
          <div>
               <HeroSection ></HeroSection>
               <div className="lg:max-w-[1250px] md:max-w-[700px] max-w-[370px] mx-auto ">
                    <OurMission></OurMission>
                    <OurVision></OurVision>
                    <OurServices></OurServices>
                    <AchievementsSection></AchievementsSection>
                    <ClientReviews></ClientReviews>
                    <OurClients></OurClients>



                    <div className="grid lg:grid-cols-2 mb-10 md:grid-cols-1 grid-cols-1 lg:gap-10 md:gap-3 gap-3">
                         <HaveQu ></HaveQu>
                         <ContactFrom></ContactFrom>
                    </div>
               </div>
          </div>
     );
};

export default HomePages2;