import { useContext } from "react";
import { QuoteFromContext } from "../../ServiceDetailsProvider/ServiceQuoteFromContext";
import PagesCoverImg from "../PagesCoverImg/PagesCoverImg";
import { AwesomeButton } from "react-awesome-button";

const ServiceQuoteFrom = () => {
     const { serviceDetails } = useContext(QuoteFromContext);
     // Cover img url
     const imgUrl = 'https://i.ibb.co.com/ZM7XrqF/22-1604079765-1.jpg';

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


          const fromData = { name, email, number, address, city, company, message, contactEmail, contactPhone, serviceDetails };
          console.log(fromData)
     }
     console.log(serviceDetails)
     return (
          <div className="mb-10">
               <div className="mt-10 mb-10">
                    <PagesCoverImg title={'Get A Quote'} imgUrl={imgUrl}></PagesCoverImg>
               </div>
               <div className="space-y-2">
                    <div className="flex justify-between">
                         <h1 className="text-2xl font-bold">Get A Quote</h1>

                         <h1 className="text-xl font-bold ">Service : {serviceDetails}</h1>

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

                         <input type="number"
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


                    <button className="mt-6 " type="submit">  <AwesomeButton type="primary">Send Message</AwesomeButton></button>





               </form>
          </div>
     );
};

export default ServiceQuoteFrom;