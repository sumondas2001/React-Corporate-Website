
import PagesCoverImg from "../PagesCoverImg/PagesCoverImg";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import PagesTitle from "../PagesTitle/PagesTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import HowWeWork from "../HowWeWork/HowWeWork";

const ServiceQuoteFrom = () => {

     // window top pages
     const { PageTop } = useContext(AuthContext);
     PageTop();

     const [allServices, setAllServices] = useState([]);
     const { service_name } = allServices

     const { id } = useParams();

     // Cover img url
     const imgUrl = 'https://i.ibb.co.com/xsHkBNc/alex-kotliarskyi-QBp-ZGq-EMs-Kg-unsplash.jpg';


     useEffect(() => {
          axios.get('/services.json')
               .then(res => {


                    const data = res.data?.find(singleData => singleData.id === parseFloat(id));
                    setAllServices(data)

               })
               .catch(error => {
                    toast.error(error)
               })
     }, [id])

     const handelQuoteFrom = (event) => {
          event.preventDefault();
          const from = event.target;


          const name = from.name.value;
          const email = from.email.value;
          const number = from.number.value;
          const address = from.address.value;
          const city = from.city.value;
          const company = from.company.value;
          const message = from.message.value;
          const contactEmail = from.contactEmail.value;
          const contactPhone = from.contactPhone.value;


          const fromData = { name, email, number, address, city, company, message, contactEmail, contactPhone, service_name };
          toast.success(`Your Is Booking Successfully !! `, {
               position: 'top-right',
               style: {
                    padding: '18px',
                    color: '#713200',
                    backgroundColor: '#E3FDFD'
               },
          })
          from.reset();

          console.log(fromData)
     }

     return (
          <div className="mb-14">
               <PagesTitle title={'Service Quote From'}></PagesTitle>

               <div className=" mb-10">
                    <PagesCoverImg title={'Get A Quote'} imgUrl={imgUrl}></PagesCoverImg>
               </div>
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] mx-auto ">

                    <div

                         className="space-y-2">
                         <div
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="1000"
                              data-aos-offset="100"
                              className="flex justify-between">

                              <div className="mb-2">
                                   <h1 className="lg:text-2xl md:text-xl text-sm font-bold">Get A Quote</h1>
                                   <div className="flex items-center gap-2 mt-2">
                                        <hr className="lg:w-16 md:w-16 w-10 border-cyan-400 border-2 " />
                                        <p className="bg-cyan-400  p-1 w-0"></p>
                                   </div>

                                   <p className="text-sm font-normal mt-4">Get a quote in just 30 minutes</p>
                              </div>

                              <div >
                                   <h1 className=" bg-cyan-200 px-3 py-1 rounded-full text-black text-opacity-75 text-sm  font-medium "> {service_name}</h1>
                                   {/* <div className="flex flex-row-reverse items-center gap-2 mt-2">
                                        <hr className="lg:w-24 md:w-20 w-12 border-cyan-400 border-2 " />
                                        <p className="bg-cyan-400  p-1 w-0"></p>
                                   </div> */}
                              </div>

                         </div>
                    </div>

                    <form

                         data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1000"
                         data-aos-offset="100"
                         className="mt-10" onSubmit={handelQuoteFrom}>

                         <div className="flex lg:gap-10 md:gap-4 gap-3 lg:flex-row md:flex-col flex-col" >
                              <input className="px-4 py-3 text-sm font-medium  w-full border border-black rounded-lg focus:outline-none focus:border-cyan-500  mt-4 "
                                   type=" text"
                                   name="name"
                                   required
                                   placeholder="Your Name *"
                              />

                              <input type="email"
                                   className="px-4 py-3 text-sm font-medium  w-full border border-black rounded-lg  mt-4 focus:outline-none focus:border-cyan-500 "
                                   name="email"
                                   required
                                   placeholder="Your Email *"
                              />


                         </div>

                         <div className="flex lg:gap-10 md:gap-4 gap-3 lg:flex-row md:flex-col flex-col">

                              <input type="text"
                                   className=" mt-4  w-full rounded-lg px-4 py-3 border border-black focus:outline-none focus:border-cyan-500" name="number"
                                   required
                                   placeholder="Your Phone No *"
                              />
                              <input type="text" className=" w-full mt-4 rounded-lg border border-black px-4 py-3 focus:outline-none focus:border-cyan-500" name="company" required placeholder="Company (Optional) *" id="" />
                         </div>



                         <div className="flex lg:gap-10 md:gap-4 gap-3 lg:flex-row md:flex-col flex-col">
                              <input type="text" className=" w-full  border border-black  mt-4 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 " name="address" placeholder="Address *" required id="" />
                              <input type="text" className=" w-full  border border-black mt-4 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500" name="city" placeholder="City *" required id="" />
                         </div>

                         <div className="mt-4">
                              <h1>What do you prefer for contact? *</h1>
                              <div className="flex gap-2">
                                   <input type="radio" name="contactPhone" id="" />
                                   <p>Phone</p>
                              </div>
                              <div className="flex gap-2">
                                   <input type="radio" name="contactEmail" id="" />
                                   <p>Email</p>
                              </div>
                         </div>
                         <div className="">
                              <textarea className=" w-full  border border-black mt-4 rounded-lg px-4 pb-32 pt-4 focus:outline-none focus:border-cyan-500" type="text" name="message" placeholder="Write Your Quotation Detail Here... *" id="" />

                         </div>
                         <button type="submit" className="px-3 mt-6 border py-2  bg-gradient-to-b from-cyan-400 from-30% to-cyan-600 text-white  hover:from-cyan-600 hover:from-30% hover:to-cyan-300  text-base  font-medium ">Send Message</button>
                    </form>

                    <HowWeWork></HowWeWork>
               </div>
          </div>
     );
};

export default ServiceQuoteFrom;