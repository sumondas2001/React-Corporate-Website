import { useContext, useState } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import toast from "react-hot-toast";

const BlogDetailsFrom = () => {
     const { user } = useContext(AuthContext);
     const [userComments, setUserComments] = useState(null);
     console.log(userComments)
     const handelBlogDetailFrom = (event) => {
          event.preventDefault();
          const from = event.target;
          const comments = from.comments.value;
          const userName = user?.displayName;
          const userEmail = user?.email;
          const name = from.name?.value;
          const email = from.email?.value;

          const userData = { userName, userEmail, comments, };
          const commentsData = { name, email, comments };
          from.reset();

          toast.success('Your Comments Send Successfully !!!', {
               position: 'top-right',
               style: {
                    padding: '18px',
                    color: '#713200',
                    backgroundColor: '#E3FDFD'
               },
          });


          {
               user ? setUserComments(userData) : setUserComments(commentsData)

          }

     }

     return (
          <div
               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
               className="mt-16">
               <h1 className="text-lg font-medium">Comment(s)</h1>
               <hr className="border mb-4 mt-1 border-black" />


               <form onSubmit={handelBlogDetailFrom}>
                    <textarea className="w-full px-4 pb-14 border border-black required focus:outline-none focus:border-cyan-500 py-4" type="text" name="comments" required placeholder="Add a comments......." />

                    {
                         !user && <div className="flex gap-4 mt-2">
                              <input className="w-1/2 px-4 py-2  border border-black focus:outline-none focus:border-cyan-500" type="text" name="name" required placeholder="Your Name" id="" />
                              <input className="w-1/2 px-4 py-2  border border-black focus:outline-none focus:border-cyan-500" type="text" name="email" required placeholder="Your Email" id="" />
                         </div>
                    }

                    <button type="submit" className=" px-5 mt-4 border py-3 bg-gradient-to-tr from-cyan-400 from-30% to-cyan-800 text-white  hover:from-cyan-600 hover:from-30% hover:to-cyan-300  text-base  font-semibold ">Submit</button>
               </form>

          </div >
     );
};

export default BlogDetailsFrom;