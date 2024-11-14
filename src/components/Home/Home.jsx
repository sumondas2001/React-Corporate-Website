import About from "../../components/About/About";
import Slider from "../Slider/slider";
import Growth from "../Growth/Growth";
import OurServices from "../OurServices/OurServices";
import HaveQu from "../HaveQu/HaveQu";
import ContactFrom from "../ContactFrom/ContactFrom";
import OurClients from "../OurClients/OurClients";
import ClientReviews from "../ClientReviews/ClientReviews";
import PagesTitle from "../PagesTitle/PagesTitle";


const Home = () => {
     return (
          <div>
               <PagesTitle title={"Home"}></PagesTitle>
               <Slider></Slider>
               <About></About>
               <Growth></Growth>
               <OurServices></OurServices>
               <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-10 md:gap-3 gap-3">
                    <HaveQu ></HaveQu>
                    <ContactFrom></ContactFrom>
               </div>
               <OurClients></OurClients>

               <ClientReviews></ClientReviews>
          </div>
     );
};

export default Home;