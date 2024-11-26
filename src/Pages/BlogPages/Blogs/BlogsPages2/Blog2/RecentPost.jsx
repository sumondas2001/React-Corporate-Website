import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecentPost = ({ blog }) => {
     const { blog_title, blog_date, blog_img, id } = blog;

     return (

          <div
               data-aos="fade-up"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="1000"
               data-aos-offset="100"
               className="flex items-center gap-4 px-2 py-2 border-b  mb-2 ">
               <img className="w-24 rounded h-32 object-cover cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={blog_img} alt="" />
               <div className="space-y-3">
                    <Link to={`/blogDetails/${id}`}>
                         <h1 className="text-sm font-bold hover:text-cyan-700">{blog_title}</h1>
                    </Link>
                    <p className="text-xs font-light">{blog_date}</p>
               </div>

          </div>

     );
};

export default RecentPost;


RecentPost.propTypes = {

     blog: PropTypes.object,

}