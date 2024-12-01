import { useContext } from "react";
import PagesCoverImg from "../../../components/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../../components/PagesTitle/PagesTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import CeoSection2 from "./CeoSection2/CeoSection2";
import OurTeams2 from "./OurTeams2/OurTeams2";
import AboutUs from "../../../components/AboutUs/AboutUs";
import About from "../../../components/About/About";

const AboutPages2 = () => {
     // window top pages
     const { PageTop } = useContext(AuthContext);
     PageTop();
     const imgUrl = 'https://i.ibb.co.com/xS7r5Tb/austin-distel-Tlu-Mvvr-Z57g-unsplash.jpg'
     return (
          <div>
               <div>
                    <PagesTitle title={'AboutPages2'}></PagesTitle>
                    <PagesCoverImg imgUrl={imgUrl} title={'ABOUT PAGES 2'}></PagesCoverImg>
               </div>

               <div className="lg:max-w-[1250px] md:max-w-[700px] max-w-[370px] mx-auto ">
                    <AboutUs></AboutUs>
                    <CeoSection2></CeoSection2>
                    <OurTeams2></OurTeams2>
                    <About></About>
               </div>
          </div >
     );
};

export default AboutPages2;