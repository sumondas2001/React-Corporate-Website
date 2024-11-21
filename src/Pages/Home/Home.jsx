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


const Home = () => {
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
                    <div className="grid lg:grid-cols-2 mb-10 md:grid-cols-1 grid-cols-1 lg:gap-10 md:gap-3 gap-3">
                         <HaveQu ></HaveQu>
                         <ContactFrom></ContactFrom>
                    </div>

                    <Button></Button>
               </div>
          </div>
     );
};

export default Home;