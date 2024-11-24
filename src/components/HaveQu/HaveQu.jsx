

const HaveQu = () => {
     return (

          <div className="lg:w-full md:w-full w-full mx-auto "


               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
          >

               <div>
                    <h1 className="text-2xl font-medium text-center mb-4">FAQ</h1>
                    <div className="flex items-center justify-center gap-2 mt-4">
                         <hr className="w-14  border-cyan-400 border-2 " />
                         <p className="bg-cyan-400  p-1 w-0"></p>
                         <hr className="w-14  border-cyan-400 border-2 " />
                    </div>
               </div>

               <div className="collapse rounded-t-xl rounded-b-none collapse-arrow mt-10 mb-1">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-base  font-medium bg-slate-200 ">Project scheduling and management</div>
                    <div className="collapse-content ">
                         <p className="text-sm py-2 opacity-80">We began our operations a few decades ago and have grown due to excellent relationships with our clients. We started out small, with just a few people and a small office, but today we have offices in multiple countries with hundreds of people working inside them. We started out small, with just a few people and a small office, but today we have offices in multiple countries with hundreds of people working inside them.</p>
                    </div>
               </div>
               <div className="collapse collapse-arrow rounded-none mb-1">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-base font-medium bg-slate-200">Perform value engineering</div>
                    <div className="collapse-content">
                         <p className="text-sm py-2 opacity-80"  >Whether you`re just starting out or already running a successful business, having the right business account can make day-to-day banking easier and more cost-effective. We can help you find the best package to meet your business transaction needs. We offer you greater choice with the below suite of products.</p>
                    </div>
               </div>
               <div className="collapse collapse-arrow rounded-none mb-1">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-base font-medium bg-slate-200">Which finance consulting services you provide?</div>
                    <div className="collapse-content">
                         <p className="text-sm py-2 opacity-80">We believe that quality employment is the foundation of human dignity, economic stability, and community self-sufficiency. With strong support from our government partners, we implement our mission to prepare and match work-ready job seekers with quality employers, so Chicagoland remains a great place to live and work.</p>
                    </div>

               </div>
               <div className="collapse collapse-arrow rounded-none rounded-b-xl ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-base font-medium bg-slate-200">Fundamental analysis services</div>
                    <div className="collapse-content">
                         <p className="text-sm py-2 opacity-80">We achieved our success because of how successfully we integrate with our clients. One complaint many people have about consultants is that they can be disruptive. Employees fear outside consultants coming in and destroying the workflow. Our clients face no such issues.

                         </p>
                    </div>
               </div>
          </div>

     );
};

export default HaveQu;