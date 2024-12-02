import PropTypes from "prop-types";
import { MdCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";


const Blog = ({ blog }) => {
     const { blog_title, blog_date, blog_img, blog_description, user_img, user_name, id } = blog;
     // console.log(blog)
     return (
          <div className="shadow-xl hover:shadow-2xl  bg-[#E3FDFD] pb-6 mt-10 rounded-t-lg "
               data-aos="fade-up"
               data-aos-offset="100"

               data-aos-duration="1000"
               data-aos-easing="ease-in-out"


          >
               <img className="h-[200px] w-[400px] rounded-t-lg cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={blog_img} alt="" />
               <div className="px-4 mt-6 space-y-3">
                    <div className="flex gap-1 mb-3">
                         <MdCalendarMonth className="size-4" />
                         <p className="text-xs font-normal">{blog_date}</p>
                    </div>
                    <Link to={`/blogDetails/${id}`} >
                         <h3 className="text-base font-semibold hover:text-cyan-700 cursor-pointer">{blog_title}</h3>
                    </Link>
                    <p className="text-sm font-medium text-black">{blog_description.slice(0, 130)}</p>
               </div>
               <div className="flex mt-5 items-center px-4">
                    <img className="mr-3 size-8 rounded-full object-cover" src={user_img} alt="" />

                    <h4 className="text-sm font-medium">By <span className=" text-base hover:text-cyan-700">{user_name}</span></h4>
               </div>
          </div>
     );
};

export default Blog;



Blog.propTypes = {

     blog: PropTypes.object,

}