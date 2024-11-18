import { Typewriter } from "react-simple-typewriter";


const Growth = () => {


     return (
          <div >

               <h1 className="text-xl mb-10  text-center mt-10"> <span style={{ color: '#71C9CE', fontWeight: 'bold', }}>
                    <Typewriter
                         words={['Company Growth']}
                         loop={0}
                         cursor

                         typeSpeed={240}
                         deleteSpeed={150}
                         delaySpeed={1500}

                    />
               </span> </h1>

               <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-offset="100"

                    className="flex justify-center mb-10 lg:h-72 md:h-72 h-96  px-4 lg:max-w-[1200px] md:max-w-[700px] max-w-[380px] overflow-x-auto mx-auto">

                    <ul className="timeline lg:timeline-horizontal md:timeline-horizontal timeline-vertical">
                         <li >
                              <div className="timeline-start timeline-box">Growth though direction</div>
                              <div className="timeline-middle">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="text-[#71C9CE] h-20  w-10">
                                        <path
                                             fillRule="evenodd"
                                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                             clipRule="evenodd" />
                                   </svg>
                              </div>
                              <hr className="bg-[#71C9CE] " />
                         </li>
                         <li>
                              <hr className="bg-[#71C9CE]" />
                              <div className="timeline-middle">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="text-[#71C9CE] h-20 w-10">
                                        <path
                                             fillRule="evenodd"
                                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                             clipRule="evenodd" />
                                   </svg>
                              </div>
                              <div className="timeline-end timeline-box">Crisis of leader Ship</div>
                              <hr className="bg-[#71C9CE]" />
                         </li>
                         <li>
                              <hr className="bg-[#71C9CE]" />
                              <div className="timeline-start timeline-box">Crisis of autonomy</div>
                              <div className="timeline-middle">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="text-[#71C9CE] h-20 w-10">
                                        <path
                                             fillRule="evenodd"
                                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                             clipRule="evenodd" />
                                   </svg>
                              </div>
                              <hr />
                         </li>
                         <li>
                              <hr />
                              <div className="timeline-middle">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-20 w-10">
                                        <path
                                             fillRule="evenodd"
                                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                             clipRule="evenodd" />
                                   </svg>
                              </div>
                              <div className="timeline-end timeline-box">Crisis of control</div>
                              <hr />
                         </li>
                         <li>
                              <hr />
                              <div className="timeline-start timeline-box">Crisis through collaboration </div>
                              <div className="timeline-middle">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-20 w-10">
                                        <path
                                             fillRule="evenodd"
                                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                             clipRule="evenodd" />
                                   </svg>
                              </div>
                         </li>
                         <li>
                              <hr />
                              <div className="timeline-start timeline-box">Crisis through collaboration </div>
                              <div className="timeline-middle">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-20 w-10">
                                        <path
                                             fillRule="evenodd"
                                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                             clipRule="evenodd" />
                                   </svg>
                              </div>
                         </li>
                    </ul>
               </div>


          </div>
     );
};

export default Growth;