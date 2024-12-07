import PropTypes from "prop-types";
import { MdCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";

const Blog2 = ({ blog }) => {
     const { blog_title, blog_date, blog_img, blog_description, user_img, user_name, id } = blog;

     return (
          <div
               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
               className="flex lg:flex-row md:flex-row flex-col lg:gap-6 md:gap-5 gap-3 border border-slate-300  container hover:shadow-xl shadow-lg">
               <div className="">
                    <img
                         className="cursor-pointer object-cover md:w-[450px] h-[200px] w-full md:h-[250px] lg:w-[500px] lg:h-[250px] transition duration-1000 hover:scale-90 hover:delay-150"
                         src={blog_img} alt="" />

               </div>

               <div className="px-4 py-4 lg:space-y-2  md:space-y-2 space-y-2">
                    <div className="flex items-center gap-1">
                         <MdCalendarMonth />
                         <p className="text-sm font-medium">  {blog_date}</p>
                    </div>
                    <h1 className="text-base font-medium hover:text-cyan-700 cursor-pointer">{blog_title}</h1>
                    <p className="text-sm font-light">{blog_description.slice(0, 200)} </p>

                    <Link to={`/blogDetails/${id}`}>
                         <button className="px-2 mt-3 mb-1  py-2 bg-gradient-to-b text-black text-base font-medium transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-cyan-600 hover:from-30% hover:to-cyan-300 ">
                              Read More
                         </button>

                    </Link>

                    <div className="flex items-center mt-3 ">
                         <img className="mr-4 size-8 rounded-full object-cover" src={user_img} alt="" />
                         <p>By <span className="text-base font-medium">{user_name}</span></p>
                    </div>
               </div>

          </div>
     );
};

export default Blog2;
Blog2.propTypes = {

     blog: PropTypes.object,

}