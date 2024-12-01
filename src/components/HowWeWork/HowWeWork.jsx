
const HowWeWork = () => {
     return (
          <div
               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
               className="mt-14">
               <h1 className="text-2xl font-semibold">How We Make Work Successful</h1>
               <div className="flex items-center gap-2 mt-2">
                    <hr className="w-36  border-cyan-400 border-2 " />
                    <p className="bg-cyan-400  p-1 w-0"></p>
               </div>

               <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                         <div className="flex gap-5 items-center">
                              <h1 className="text-cyan-500 text-2xl font-semibold border-2 border-gray-400 items-center flex justify-center w-10 h-10  rounded-full">1</h1>
                              <h1 className="text-xl font-semibold">Analyze</h1>
                         </div>

                         <p className="text-base font-medium mt-4 ">We utilizes creative and customized methods that tailor our work to the client.</p>

                    </div>
                    <div>
                         <div className="flex gap-5 items-center">
                              <h1 className="text-cyan-500 text-2xl font-semibold border-2 border-gray-400 items-center flex justify-center w-10 h-10  rounded-full">2</h1>
                              <h1 className="text-xl font-semibold">Advise</h1>
                         </div>

                         <p className="text-base font-medium mt-4 ">Find out when where business needs to go and how to get there – real progress is made.</p>

                    </div>
                    <div>
                         <div className="flex gap-5 items-center">
                              <h1 className="text-cyan-500 text-2xl font-semibold border-2 border-gray-400 items-center flex justify-center w-10 h-10  rounded-full">3</h1>
                              <h1 className="text-xl font-semibold">Strategy</h1>
                         </div>

                         <p className="text-base font-medium mt-4 ">We deliver business results via hands-on execution and leading teams through complex change.</p>

                    </div>
                    <div >
                         <div className="flex gap-5 items-center">
                              <h1 className="text-cyan-500 text-2xl font-semibold border-2 border-gray-400 items-center flex justify-center w-10 h-10  rounded-full">4</h1>
                              <h1 className="text-xl font-semibold">Result</h1>
                         </div>

                         <p className="text-base font-medium mt-4 "> We provide valuable guidance and support in the development, and you run a successful.</p>

                    </div>
               </div>
          </div>
     );
};

export default HowWeWork;