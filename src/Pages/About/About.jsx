import AboutSectionImg from "../../components/AboutSectionImg/AboutSectionImg";
import AboutUs from "../../components/AboutUs/AboutUs";
import CeoSection from "../../components/CeoSection/CeoSection";
import OurTeams from "../../components/OurTeams/OurTeams";
import PagesTitle from "../../components/PagesTitle/PagesTitle";

const About = () => {


     return (
          <div>
               <PagesTitle title={"About"}></PagesTitle>


               <AboutSectionImg></AboutSectionImg>
               <CeoSection></CeoSection>
               <OurTeams></OurTeams>
               <AboutUs></AboutUs>
          </div>
     );
};

export default About;