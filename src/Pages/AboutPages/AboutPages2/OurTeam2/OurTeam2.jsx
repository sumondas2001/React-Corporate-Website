import PropTypes from 'prop-types';

const OurTeam2 = ({ team }) => {
     const { name, img, profession } = team;


     // console.log(team)
     return (

          <div className="  hover:shadow-2xl   "
               data-aos="fade-up"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"


          >
               <div>
                    <img className="h-96 w-full object-cover cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={img} alt="" />
               </div>
               <div
                    style={{
                         clipPath: "polygon(15% 0%, 85% 0%, 100% 0%, 100% 0%, 84% 100%, 15% 100%, 0% 100%, 0% 0%)",
                    }}
                    className="mt-3 text-start pr-10 pl-4 -left-2 py-3 absolute bg-cyan-300 click bottom-4">
                    <h1 className="text-base font-semibold">{name}</h1>
                    <p className="text-sm font-normal opacity-100" >{profession}</p>
               </div>
          </div>

     );
};

export default OurTeam2;



OurTeam2.propTypes = {
     team: PropTypes.object,
}