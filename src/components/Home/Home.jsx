import About from "../../components/About/About";
import Slider from "../Slider/slider";
import Growth from "../Growth/Growth";
import OurServices from "../OurServices/OurServices";


const Home = () => {
     return (
          <div>
               <Slider></Slider>
               <About></About>
               <Growth></Growth>
               <OurServices></OurServices>
          </div>
     );
};

export default Home;