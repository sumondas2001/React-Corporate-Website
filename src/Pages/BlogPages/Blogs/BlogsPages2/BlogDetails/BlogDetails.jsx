import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecentPost from "../Blog2/RecentPost";
import PagesTitle from "../../../../../components/PagesTitle/PagesTitle";
import PagesCoverImg from "../../../../../components/PagesCoverImg/PagesCoverImg";
import { MdCalendarMonth } from "react-icons/md";
import BlogDetailsFrom from "../BlogDetailsFrom/BlogDetailsFrom";

const BlogDetails = () => {
     // single blog data
     const [blog, setBlog] = useState([]);

     const [blogs, setBlogs] = useState([]);
     const { id } = useParams();

     const imgUrl = 'https://i.ibb.co.com/jWQdDvd/lycs-architecture-U2-BI3-GMn-SSE-unsplash.jpg';
     // console.log(blog)

     useEffect(() => {
          axios.get('/blogs.json')
               .then(res => {
                    const data = res.data?.find(blog => blog.id === parseFloat(id));
                    setBlog(data);
               })
               .catch(error => {
                    alert(error)
               })
     }, [id])
     useEffect(() => {
          axios.get('/blogs.json')
               .then(res => {

                    setBlogs(res.data);
               })
               .catch(error => {
                    alert(error)
               })
     }, [id])

     return (
          <div className="mb-10">

               <div>
                    <PagesTitle title={"Blogs-2"}></PagesTitle>

                    <PagesCoverImg imgUrl={imgUrl} title={'BLOGS DETAILS'}></PagesCoverImg>
               </div>

               <div className="lg:max-w-[1250px] md:max-w-[700px] max-w-[370px] mx-auto ">
                    <div
                         data-aos="fade-up"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="1000"
                         data-aos-offset="100"
                         className="mt-4">
                         <h1 className="text-2xl  font-medium  mb-2">Blogs Details</h1>
                         <div className="flex items-center gap-2 ">
                              <hr className="w-24  border-cyan-400 border-2 " />
                              <p className="bg-cyan-400  p-1 w-0"></p>
                         </div>
                    </div>

                    <div className=" grid grid-cols-4  lg:gap-0 gap-10 mt-10 ">

                         <div
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="1000"
                              data-aos-offset="100"
                              className="lg:col-span-3 col-span-4 lg:mr-14  ">

                              <img className="w-full lg:h-[500px] container rounded-t-xl mb-4 object-cover cursor-pointer transition duration-1000 hover:scale-90 hover:delay-150" src={blog?.blog_img} alt="" />
                              <div >

                                   <div className="flex justify-between">
                                        <div className="flex items-center ">
                                             <img className="mr-4 size-8 rounded-full object-cover" src={blog?.user_img} alt="" />
                                             <p>By <span className="text-base font-medium">{blog?.user_name}</span></p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                             <MdCalendarMonth />
                                             <p className="text-sm font-medium">  {blog?.blog_date}</p>
                                        </div>

                                   </div>
                                   <div className="space-y-4 mt-6">

                                        <h1 className="lg:text-xl md:text-xl text-lg font-semibold">{blog?.blog_title}</h1>
                                        <p className="text-base font-light ">{blog?.blog_description}</p>
                                   </div>
                                   <BlogDetailsFrom></BlogDetailsFrom>
                              </div>
                         </div>
                         <div
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="1000"
                              data-aos-offset="100"
                              className="lg:col-span-1 col-span-4 ">

                              <div className="border">
                                   <h1 className="text-lg bg-cyan-400 text-center rounded-t-xl  font-medium py-2  mb-4">Recent Posts</h1>


                              </div>
                              {
                                   blogs?.map(blog => <RecentPost key={blog.id} blog={blog}></RecentPost>)
                              }
                         </div>

                    </div>

               </div>
          </div>
     );
};

export default BlogDetails;