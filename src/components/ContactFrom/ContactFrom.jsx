import toast from "react-hot-toast";

const ContactFrom = () => {

     const handelContactFrom = (event) => {

          event.preventDefault();
          const from = event.target;

          const firstName = from.firstName.value;
          const lastName = from.lastName.value;
          const email = from.email.value;
          const subject = from.subject.value;
          const message = from.message.value;
          from.reset();
          toast.success('Your Message Send')
          const fromData = { firstName, lastName, email, subject, message };
          console.log(fromData)
     }
     return (
          <div className="mt-2 " data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100">

               <h1 className="text-2xl  font-medium  mb-4">Lets Talk About Your Idea</h1>
               <div className="flex items-center gap-2 mt-2">
                    <hr className="w-32  border-cyan-400 border-2 " />
                    <p className="bg-cyan-400  p-1 w-0"></p>
               </div>
               <form onSubmit={handelContactFrom}>
                    <div className="flex gap-4 mt-10">
                         <input className="px-4 py-3 text-sm font-medium  w-full border border-black rounded-lg"
                              type=" text"
                              name="firstName"
                              required
                              placeholder="Your First Name"
                         />

                         <input type="text"
                              className="px-4 py-3 text-sm font-medium  w-full border border-black rounded-lg"
                              name="lastName"
                              required
                              placeholder="Your Last Name"
                         />
                    </div>
                    <div className="flex flex-col ">
                         <input type="email"
                              className=" mt-6  w-full rounded-lg px-4 py-3 border border-black" name="email"
                              required
                              placeholder="Your Email"
                         />
                         <input type="text" className=" w-full mt-6 rounded-lg border border-black px-4 py-3" name="subject" required placeholder="Subject" id="" />
                    </div>

                    <div>
                         <input type="text" className=" w-full  border border-black h-28 mt-6 rounded-lg px-4 py-3 " name="message" placeholder="Your Message....." required id="" />
                    </div>




                    <button type="submit" className="mt-6 text-sm text-white font-bold px-3 hover:bg-cyan-700 rounded-lg bg-cyan-600 py-2">Send Message</button>




               </form>
          </div>
     );
};

export default ContactFrom;