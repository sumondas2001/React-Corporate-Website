import PropTypes from 'prop-types';

const OurTeam = ({ team }) => {
     const { name, img, profession } = team;


     // console.log(team)
     return (

          <div className=" bg-[#E3FDFD] shadow-2xl rounded-b-2xl "
               data-aos="fade-up"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"


          >
               <div className='data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"'>
                    <img className="rounded-b-full object-cover cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={img} alt="" />
               </div>
               <div className="mt-3 text-center lg:p-4 md:p-4 p-8">
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