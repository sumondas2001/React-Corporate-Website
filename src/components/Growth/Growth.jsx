import Marquee from "react-fast-marquee";
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
                         <Marquee className="">
                              <ul className="steps">
                                   <li className="step">start</li>
                                   <li className="step step-secondary">2</li>
                                   <li className="step step-secondary">3</li>
                                   <li className="step step-secondary">4</li>
                                   <li className="step">5</li>
                                   <li className="step step-accent">6</li>
                                   <li className="step step-accent">7</li>
                                   <li className="step">8</li>
                                   <li className="step step-error">9</li>
                                   <li className="step step-error">10</li>
                                   <li className="step">11</li>
                                   <li className="step">12</li>
                                   <li className="step step-warning">13</li>
                                   <li className="step step-warning">14</li>
                                   <li className="step">15</li>
                                   <li className="step step-neutral">16</li>
                                   <li className="step step-neutral">17</li>
                                   <li className="step step-neutral">18</li>
                                   <li className="step step-neutral">19</li>
                                   <li className="step step-neutral">20</li>
                                   <li className="step step-neutral">21</li>
                                   <li className="step step-neutral">22</li>
                                   <li className="step step-neutral">23</li>
                                   <li className="step step-neutral">end</li>
                              </ul>
                         </Marquee>
                    </div>

               </div>
          </div>
     );
};

export default Growth;
