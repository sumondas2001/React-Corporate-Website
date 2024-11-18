import PropTypes from 'prop-types';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Achievement = ({ achievement }) => {
     const [counterState, setCounterState] = useState(false);

     return (
          <div className='text-center '>
               <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                    <div>
                         <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-cyan-600">
                              {counterState &&
                                   <CountUp
                                        start={0}
                                        end={achievement.number}
                                        duration={2.75}
                                   >
                                   </CountUp>
                              }
                              <span className='lg:text-4xl md:text-2xl text-xl   ml-2'>+</span></h1>

                         <h1 className="lg:text-2xl font-semibold mt-4">{achievement.title}</h1>
                    </div>
               </ScrollTrigger>


          </div>
     );
};

export default Achievement;


Achievement.propTypes = {
     // You can declare that a prop is a specific JS primitive. By default, these
     // are all optional.
     achievement: PropTypes.object,
}

