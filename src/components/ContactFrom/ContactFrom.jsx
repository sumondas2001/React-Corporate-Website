
const ContactFrom = () => {

     const handelContactFrom = (event) => {

          event.preventDefault();
          const from = event.target;

          const firstName = from.firstName.value;
          const lastName = from.lastName.value;
          const email = from.email.value;
          const subject = from.subject.value;
          const message = from.message.value;

          const fromData = { firstName, lastName, email, subject, message };
          console.log(fromData)
     }
     return (
          <div className="mt-4 " data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100">

               <h1 className="text-2xl font-medium text-center mb-4">Contact Form</h1>
               <hr className="w-48 mt-2 border-t-black mx-auto" />
               <hr className="w-60 mt-2 border-t-black mx-auto" />
               <form onSubmit={handelContactFrom}>
                    <div className="flex gap-4 mt-10">
                         <input className="px-4 py-3 text-sm font-medium lg:w-[309px] md:w-full w-full border border-black rounded-lg"
                              type=" text"
                              name="firstName"
                              required
                              placeholder="Your First Name"
                         />

                         <input type="text"
                              className="px-4 py-3 text-sm font-medium lg:w-[309px] md:w-full  w-full border border-black rounded-lg"
                              name="lastName"
                              required
                              placeholder="Your Last Name"
                         />
                    </div>
                    <div className="flex flex-col ">
                         <input type="email"
                              className=" mt-6 lg:w-[634px] md:w-full w-full rounded-lg px-4 py-3 border border-black" name="email"
                              required
                              placeholder="Your Email"
                         />
                         <input type="text" className="lg:w-[634px] md:w-full w-full mt-6 rounded-lg border border-black px-4 py-3" name="subject" required placeholder="Subject" id="" />
                    </div>

                    <div>
                         <input type="text" className="lg:w-[634px] md:w-full w-full  border border-black h-28 mt-6 rounded-lg px-4 py-3 " name="message" placeholder="Write your notes or questions here....." required id="" />
                    </div>

                    <button className="text-sm font-medium p-3 bg-cyan-500 mt-6  mb-10 " type="submit"> Send Message</button>
               </form>
          </div>
     );
};

export default ContactFrom;