import AboutUs from "../../components/AboutUs/AboutUs";
import CeoSection from "../../components/CeoSection/CeoSection";
import OurTeams from "../../components/OurTeams/OurTeams";
import PagesCoverImg from "../../components/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../components/PagesTitle/PagesTitle";

const About = () => {
     const imgUrl = 'https://i.ibb.co.com/Pt67FD1/contact-us-classic-02.jpg'


     return (
          <div>
               <PagesTitle title={"About"}></PagesTitle>

               <PagesCoverImg imgUrl={imgUrl} title={"ABOUT"}></PagesCoverImg>
               <CeoSection></CeoSection>
               <OurTeams></OurTeams>
               <AboutUs></AboutUs>
          </div>
     );
};

export default About;