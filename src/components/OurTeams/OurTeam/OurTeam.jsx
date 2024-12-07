import PropTypes from 'prop-types';

const OurTeam = ({ team }) => {
     const { name, img, profession } = team;


     // console.log(team)
     return (

          <div className="  hover:shadow-2xl shadow-xl  bg-[#E3FDFD] rounded-t-xl pb-6 "
               data-aos="fade-up"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"


          >
               <div>
                    <img className="h-80 rounded-t-xl w-full object-cover cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={img} alt="" />
               </div>
               <div className='text-center mt-3'>
                    <h1 className="text-lg font-semibold">{name}</h1>
                    <p className="text-sm font-normal opacity-100" >{profession}</p>
               </div>
          </div>

     );
};

export default OurTeam;



OurTeam.propTypes = {
     team: PropTypes.object,
}