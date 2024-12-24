import AboutUs from "../../components/AboutUs/AboutUs";
import CeoSection from "../../components/CeoSection/CeoSection";
import OurTeams from "../../components/OurTeams/OurTeams";
import PagesCoverImg from "../../components/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../components/PagesTitle/PagesTitle";
import About from "../../components/About/About";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AboutPages = () => {
     // window top pages
     const { PageTop } = useContext(AuthContext);
     PageTop();
     const imgUrl = 'https://i.ibb.co.com/Pt67FD1/contact-us-classic-02.jpg'


     return (
          <div>
               <PagesTitle title={"About"}></PagesTitle>

               <PagesCoverImg imgUrl={imgUrl} title={"ABOUT"}></PagesCoverImg>
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[350px] mx-auto  ">
                    <CeoSection></CeoSection>
                    <OurTeams></OurTeams>
                    <About></About>
                    <AboutUs></AboutUs>
               </div>
          </div>
     );
};

export default AboutPages;