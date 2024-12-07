const HaveQu = () => {
     const imgUrl = 'https://i.ibb.co.com/wQTQGrh/about-sec2.png'
     return (


          <div className="mb-14">

               <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                    className="text-center">
                    <h1 className="text-cyan-700 text-lg mb-2 font-medium">Important question</h1>
                    <h1 className="text-2xl font-medium text-center mb-3">Frequently Question</h1>
                    <div className="flex items-center justify-center gap-2  mb-4">
                         <hr className="w-16  border-cyan-400 border-2 " />
                         <p className="bg-cyan-400  p-1 w-0"></p>
                         <hr className="w-16  border-cyan-400 border-2 " />
                    </div>
                    <p className="mb-14 font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab rem provident <br />similique id? Quas modi consequatur animi voluptates sint.</p>
               </div>
               <div className="flex lg:flex-row md:flex-col flex-col gap-10 shadow-xl hover:shadow-2xl  py-4">

                    <div className="w-full">
                         <img
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="1000"
                              data-aos-offset="100"


                              className="object-cover mx-auto lg:w-[600px] md:w-[500px] w-full   h-[430px] cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150 " src={imgUrl} alt="" />

                    </div>
                    <div

                         className="lg:full  md:w-full w-full mx-auto "


                         data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1000"
                         data-aos-offset="100"
                    >


                         <div className="collapse rounded-t-xl rounded-b-none collapse-arrow mb-1">
                              <input type="radio" name="my-accordion-2" defaultChecked />
                              <div className="collapse-title  text-base lg:text-lg md:text-lg  font-medium bg-slate-200 ">Project scheduling and management</div>
                              <div className="collapse-content ">
                                   <p className="text-base py-2 opacity-80">We began our operations a few decades ago and have grown due to excellent relationships with our clients. We started out small, with just a few people and a small office, but today we have offices in multiple countries with hundreds of people working inside them. We started out small, with just a few people and a small office, but today we have offices in multiple countries with hundreds of people working inside them.</p>
                              </div>
                         </div>
                         <div className="collapse collapse-arrow rounded-none mb-1">
                              <input type="radio" name="my-accordion-2" />
                              <div className="collapse-title lg:text-lg md:text-lg text-base font-medium bg-slate-200">Perform value engineering</div>
                              <div className="collapse-content">
                                   <p className="text-base py-2 opacity-80"  >Whether you`re just starting out or already running a successful business, having the right business account can make day-to-day banking easier and more cost-effective. We can help you find the best package to meet your business transaction needs. We offer you greater choice with the below suite of products.</p>
                              </div>
                         </div>
                         <div className="collapse collapse-arrow rounded-none mb-1">
                              <input type="radio" name="my-accordion-2" />
                              <div className="collapse-title  lg:text-lg md:text-lg text-base font-medium bg-slate-200">Which finance consulting services you provide?</div>
                              <div className="collapse-content">
                                   <p className="text-base py-2 opacity-80">We believe that quality employment is the foundation of human dignity, economic stability, and community self-sufficiency. With strong support from our government partners, we implement our mission to prepare and match work-ready job seekers with quality employers, so Chicagoland remains a great place to live and work.</p>
                              </div>

                         </div>
                         <div className="collapse collapse-arrow rounded-none rounded-b-xl ">
                              <input type="radio" name="my-accordion-2" />
                              <div className="collapse-title lg:text-lg md:text-lg text-base font-medium bg-slate-200">Fundamental analysis services</div>
                              <div className="collapse-content">
                                   <p className="text-base  py-2 opacity-80">We achieved our success because of how successfully we integrate with our clients. One complaint many people have about consultants is that they can be disruptive. Employees fear outside consultants coming in and destroying the workflow. Our clients face no such issues.

                                   </p>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default HaveQu;