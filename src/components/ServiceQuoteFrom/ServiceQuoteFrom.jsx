
import PagesCoverImg from "../PagesCoverImg/PagesCoverImg";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import PagesTitle from "../PagesTitle/PagesTitle";
import { AuthContext } from "../../Provider/AuthProvider";

const ServiceQuoteFrom = () => {

     // window top pages
     const { PageTop } = useContext(AuthContext);
     PageTop();

     const [allServices, setAllServices] = useState([]);
     const { service_name } = allServices

     const { id } = useParams();

     // Cover img url
     const imgUrl = 'https://i.ibb.co.com/ZM7XrqF/22-1604079765-1.jpg';


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
          toast.success(`Your ${service_name} Is Booking Successfully !! `)
          from.reset();

          console.log(fromData)
     }

     return (
          <div className="mb-14">
               <PagesTitle title={'Service Quote From'}></PagesTitle>

               <div className="mt-10 mb-10">
                    <PagesCoverImg title={'Get A Quote'} imgUrl={imgUrl}></PagesCoverImg>
               </div>
               <div className="space-y-2">
                    <div className="flex justify-between">

                         <div className="mb-2">
                              <h1 className="lg:text-2xl md:text-xl text-sm font-bold">Get A Quote</h1>
                              <div className="flex items-center gap-2 mt-2">
                                   <hr className="lg:w-16 md:w-16 w-10 border-cyan-400 border-2 " />
                                   <p className="bg-cyan-400  p-1 w-0"></p>
                              </div>
                         </div>

                         <div>
                              <h1 className="lg:text-xl md:text-lg text-sm  font-bold "> {service_name}</h1>
                              <div className="flex flex-row-reverse items-center gap-2 mt-2">
                                   <hr className="lg:w-36 md:w-28 w-20 border-cyan-400 border-2 " />
                                   <p className="bg-cyan-400  p-1 w-0"></p>
                              </div>
                         </div>

                    </div>
                    <p className="text-sm font-normal">Get a quote in just 30 minutes</p>
               </div>

               <form className="mt-10" onSubmit={handelQuoteFrom}>

                    <div className="flex lg:gap-10 md:gap-4 gap-3 lg:flex-row md:flex-col flex-col">
                         <input className="px-4 py-3 text-sm font-medium  w-full border border-black rounded-lg  mt-4 "
                              type=" text"
                              name="name"
                              required
                              placeholder="Your Name *"
                         />

                         <input type="email"
                              className="px-4 py-3 text-sm font-medium  w-full border border-black rounded-lg  mt-4 "
                              name="email"
                              required
                              placeholder="Your Email *"
                         />
                    </div>

                    <div className="flex lg:gap-10 md:gap-4 gap-3 lg:flex-row md:flex-col flex-col">

                         <input type="text"
                              className=" mt-4  w-full rounded-lg px-4 py-3 border border-black" name="number"
                              required
                              placeholder="Your Phone No *"
                         />
                         <input type="text" className=" w-full mt-4 rounded-lg border border-black px-4 py-3" name="company" required placeholder="Company (Optional) *" id="" />
                    </div>



                    <div className="flex lg:gap-10 md:gap-4 gap-3 lg:flex-row md:flex-col flex-col">
                         <input type="text" className=" w-full  border border-black  mt-4 rounded-lg px-4 py-3 " name="address" placeholder="Address *" required id="" />
                         <input type="text" className=" w-full  border border-black mt-4 rounded-lg px-4 py-3 " name="city" placeholder="City *" required id="" />
                    </div>

                    <div className="mt-4">
                         <h1>What do you prefer for contact? *</h1>
                         <div className="flex gap-2">
                              <input type="checkbox" name="contactPhone" id="" />
                              <p>Phone</p>
                         </div>
                         <div className="flex gap-2">
                              <input type="checkbox" name="contactEmail" id="" />
                              <p>Email</p>
                         </div>
                    </div>

                    <div>
                         <input className=" w-full  border border-black mt-4 rounded-lg px-4 py-16 " type="text" name="message" placeholder="Write Your Quotation Detail Here... *" id="" />
                    </div>


                    <button type="submit" className="mt-6 text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">Send Message</button>




               </form>

               <div className="mt-10">
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
          </div>
     );
};

export default ServiceQuoteFrom;