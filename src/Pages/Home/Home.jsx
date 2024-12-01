import About from "../../components/About/About";
// import Growth from "../Growth/Growth";
import HaveQu from "../../components/HaveQu/HaveQu";
import ContactFrom from "../../components/ContactFrom/ContactFrom";
import OurClients from "../../components/OurClients/OurClients";
import ClientReviews from "../../components/ClientReviews/ClientReviews";
import PagesTitle from "../../components/PagesTitle/PagesTitle";
import AchievementsSection from "../../components/AchievementsSection/AchievementsSection";
import Button from "../../components/Button/Button";
import Slider from "../../components/Slider/slider";
import OurServices from "../../components/OurServices/OurServices";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {
     // window top pages
     const { PageTop } = useContext(AuthContext);
     PageTop();
     return (
          <div>
               <PagesTitle title={"Home"}></PagesTitle>
               <Slider></Slider>
               <div className="lg:max-w-[1250px] md:max-w-[700px] max-w-[370px] mx-auto ">
                    <About></About>
                    {/* <Growth></Growth> */}
                    <OurServices></OurServices>
                    <OurClients></OurClients>
                    <AchievementsSection></AchievementsSection>

                    <ClientReviews></ClientReviews>

                    <HaveQu ></HaveQu>

                    <ContactFrom></ContactFrom>

                    <Button></Button>
               </div>
          </div>
     );
};

export default Home;