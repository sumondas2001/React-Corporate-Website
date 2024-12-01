import toast from "react-hot-toast";

const ContactFrom = () => {
     const imgUrl = 'https://i.ibb.co.com/fttv578/icons8-team-y-Tw-Xp-LO5-HAA-unsplash.jpg';
     const handelContactFrom = (event) => {

          event.preventDefault();
          const from = event.target;

          const firstName = from.firstName.value;
          const lastName = from.lastName.value;
          const email = from.email.value;
          const subject = from.subject.value;
          const message = from.message.value;
          from.reset();
          toast.success('Your Message Send', {
               position: 'top-right',
               style: {
                    padding: '18px',
                    color: '#713200',
                    backgroundColor: '#E3FDFD'
               },
          });
          const fromData = { firstName, lastName, email, subject, message };
          console.log(fromData)
     }
     return (
          <div

               className="mt-10 mb-10 "

               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
          >

               <h1 className="text-2xl  font-medium  mb-4">Lets Talk About Your Idea</h1>
               <div className="flex items-center gap-2 mt-2">
                    <hr className="w-32  border-cyan-400 border-2 " />
                    <p className="bg-cyan-400  p-1 w-0"></p>
               </div>
               <div className="flex lg:flex-row md:flex-col flex-col gap-10 mt-10 shadow-xl hover:shadow-2xl p-4 rounded-2xl " >

                    <form className="lg:w-1/2  w-full "

                         onSubmit={handelContactFrom}>
                         <div className="flex gap-4 ">
                              <input className="px-4 py-3 text-sm font-medium  w-full border focus:outline-none focus:border-cyan-500 border-black rounded-lg"
                                   type=" text"
                                   name="firstName"
                                   required
                                   placeholder="Your First Name"
                              />

                              <input type="text"
                                   className="px-4 py-3 text-sm font-medium  w-full border focus:outline-none focus:border-cyan-500 border-black rounded-lg"
                                   name="lastName"
                                   required
                                   placeholder="Your Last Name"
                              />
                         </div>
                         <div className="flex flex-col ">
                              <input type="email"
                                   className=" mt-6  w-full rounded-lg px-4 py-3 border focus:outline-none focus:border-cyan-500 border-black" name="email"
                                   required
                                   placeholder="Your Email"
                              />
                              <input type="text" className=" w-full mt-6 rounded-lg border focus:outline-none focus:border-cyan-500 border-black px-4 py-3" name="subject" required placeholder="Subject" id="" />
                         </div>

                         <div>
                              <textarea type="text" className=" w-full  border border-black focus:outline-none focus:border-cyan-500 h-28 mt-6 rounded-lg px-4 py-3 " name="message" placeholder="Your Message....." required id="" />
                         </div>






                         <button type="submit" className="px-5 mt-6 border py-3  bg-gradient-to-tr from-cyan-400 from-30% to-cyan-800 text-white  hover:from-cyan-600 hover:from-30% hover:to-cyan-300  text-base  font-semibold ">Send Message</button>




                    </form>
                    <div className="lg:w-1/2 w-full">
                         <img className="rounded-xl cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={imgUrl} alt="" />
                    </div>
               </div>
          </div>
     );
};

export default ContactFrom;