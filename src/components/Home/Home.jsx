import About from "../../components/About/About";
import Slider from "../Slider/slider";
import Growth from "../Growth/Growth";
import OurTeams from "../OurTeams/OurTeams";


const Home = () => {
     return (
          <div>
               <Slider></Slider>
               <About></About>
               <Growth></Growth>
               <OurTeams></OurTeams>
          </div>
     );
};

export default Home;