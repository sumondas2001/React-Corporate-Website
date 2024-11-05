import About from "../../components/About/About";
import Slider from "../Slider/slider";
import Timeline from "../Growth/Growth";
import OurTeam from "../OurTeam/OurTeam";


const Home = () => {
     return (
          <div>
               <Slider></Slider>
               <About></About>
               {/* <Timeline></Timeline> */}
               <OurTeam></OurTeam>
          </div>
     );
};

export default Home;