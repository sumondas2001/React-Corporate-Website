import About from "../../components/About/About";
import Slider from "../Slider/slider";
import Growth from "../Growth/Growth";
import OurServices from "../OurServices/OurServices";
import HaveQu from "../HaveQu/HaveQu";


const Home = () => {
     return (
          <div>
               <Slider></Slider>
               <About></About>
               <Growth></Growth>
               <OurServices></OurServices>
               <HaveQu></HaveQu>
          </div>
     );
};

export default Home;