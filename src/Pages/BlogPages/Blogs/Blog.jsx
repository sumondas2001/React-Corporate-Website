import PropTypes from "prop-types";


const Blog = ({ blog }) => {
     const { blog_title, blog_date, blog_img, blog_description, user_img, user_name } = blog;
     console.log(blog)
     return (
          <div className="shadow-xl py-6 mt-10"
               data-aos="fade-up"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
          >
               <img className="h-[200px] w-[400px] rounded-t-lg cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={blog_img} alt="" />
               <div className="px-4 mt-6 space-y-3">
                    <p className="text-xs font-light">{blog_date}</p>
                    <h3 className="text-base font-medium">{blog_title}</h3>
                    <p className="text-sm font-light">{blog_description}</p>
               </div>
               <div className="flex mt-5 items-center px-4">
                    <img className="mr-6 size-8 rounded-full" src={user_img} alt="" />

                    <h4 className="text-sm font-medium">By {user_name}</h4>
               </div>
          </div>
     );
};

export default Blog;



Blog.propTypes = {

     blog: PropTypes.object,

}