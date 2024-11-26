import { useContext } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";

const BlogDetailsFrom = () => {
     const { user } = useContext(AuthContext);

     const handelBlogDetailFrom = (event) => {
          event.preventDefault();
          const from = event.target;
          const comments = from.comments.value;
          const userName = user.displayName;
          const userEmail = user.email;

          const commentsData = { userName, userEmail, comments };
          console.log(commentsData)
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
                    <textarea className="w-full px-4 pb-14 border border-black focus:outline-none focus:border-cyan-500 py-4" type="text" name="comments" placeholder="Add a comments......." />

                    <button type="submit" className=" px-5 mt-4 border py-3 bg-gradient-to-tr from-cyan-400 from-30% to-cyan-800 text-white  hover:from-cyan-600 hover:from-30% hover:to-cyan-300  text-base  font-semibold ">Submit</button>
               </form>

          </div >
     );
};

export default BlogDetailsFrom;