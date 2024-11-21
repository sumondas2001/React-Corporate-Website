import { Typewriter } from "react-simple-typewriter";


const Growth = () => {
     return (
          <div>
               {/* Title with Typewriter */}
               <h1 className="text-xl mb-10 text-center mt-10">
                    <span style={{ color: '#71C9CE', fontWeight: 'bold' }}>
                         <Typewriter
                              words={['Company Growth']}
                              loop={0}
                              cursor
                              typeSpeed={240}
                              deleteSpeed={150}
                              delaySpeed={1500}
                         />
                    </span>
               </h1>


               <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                    className="px-4 lg:max-w-[1200px] md:max-w-[700px] mx-auto"
               >
                    <div>
                         <div>

                         </div>
                    </div>

               </div>
          </div>
     );
};

export default Growth;
