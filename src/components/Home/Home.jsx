import About from "../../components/About/About";
import Slider from "../Slider/slider";
import Growth from "../Growth/Growth";
import OurServices from "../OurServices/OurServices";
import HaveQu from "../HaveQu/HaveQu";
import ContactFrom from "../ContactFrom/ContactFrom";
import OurClients from "../OurClients/OurClients";
import ClientReviews from "../ClientReviews/ClientReviews";
import PagesTitle from "../PagesTitle/PagesTitle";
import AchievementsSection from "../AchievementsSection/AchievementsSection";


const Home = () => {
     return (
          <div>
               <PagesTitle title={"Home"}></PagesTitle>
               <Slider></Slider>
               <About></About>
               <Growth></Growth>
               <OurServices></OurServices>
               <OurClients></OurClients>
               <AchievementsSection></AchievementsSection>

               <ClientReviews></ClientReviews>
               <div className="grid lg:grid-cols-2 mb-10 md:grid-cols-1 grid-cols-1 lg:gap-10 md:gap-3 gap-3">
                    <HaveQu ></HaveQu>
                    <ContactFrom></ContactFrom>
               </div>
          </div>
     );
};

export default Home;