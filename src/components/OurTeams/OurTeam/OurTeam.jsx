import Aos from 'aos';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const OurTeam = ({ team }) => {
     const { name, img, profession } = team;

     useEffect(() => {
          Aos.init();
     }, [])
     // console.log(team)
     return (
          <div className="lg:p-4 md:p-4 p-8"
               data-aos="fade-up"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
          >
               <img className="rounded-t-md object-cover" src={img} alt="" />
               <div className="mt-3 text-center">
                    <h1 className="text-base font-semibold">{name}</h1>
                    <p className="text-sm font-light opacity-100" >{profession}</p>
               </div>
          </div>
     );
};

export default OurTeam;



OurTeam.propTypes = {
     team: PropTypes.object,
}