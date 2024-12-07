import { useEffect, useState } from "react";
import PagesCoverImg from "../../../../components/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../../../components/PagesTitle/PagesTitle";
import axios from "axios";
import Blog2 from "./Blog2/Blog2";
import RecentPost from "./Blog2/RecentPost";

const BlogsPages2 = () => {
     const [blogs, setBlogs] = useState([]);

     const recentPost = blogs.slice(0, 6);
     // console.log(blogs)
     const imgUrl = 'https://i.postimg.cc/yNrHgkPQ/annie-spratt-FSFf-EQkd1sc-unsplash.jpg ';

     useEffect(() => {
          axios.get('/blogs.json')
               .then(res => {
                    setBlogs(res.data)
               })
     }, [])
     return (
          <div className="mb-10">

               <div>
                    <PagesTitle title={"Blogs-2"}></PagesTitle>

                    <PagesCoverImg imgUrl={imgUrl} title={'BLOGS-2'}></PagesCoverImg>
               </div>

               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] mx-auto ">
                    <div className="lg:mt-10 md:mt-8 mt-5 lg:mb-10 md:mb-8 mb-5">
                         <h1 className="text-2xl  font-medium  mb-4">Blogs</h1>
                         <div className="flex items-center gap-2 mt-2">
                              <hr className="w-6  border-cyan-400 border-2 " />
                              <p className="bg-cyan-400  p-1 w-0"></p>
                         </div>
                    </div>

                    <div className="grid grid-cols-4 md:gap-10 lg:gap-2 gap-10">
                         <div className="lg:col-span-3 col-span-4">
                              <div
                                   data-aos="fade-up"
                                   data-aos-easing="ease-out-cubic"
                                   data-aos-duration="1000"
                                   data-aos-offset="100"
                                   className="grid grid-cols-1 gap-4 lg:mr-8">

                                   {
                                        blogs.map(blog => <Blog2 key={blog.id} blog={blog}></Blog2>

                                        )
                                   }
                              </div>
                         </div>

                         {/* Recent Posts section */}
                         <div
                              data-aos="fade-up"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="1000"
                              data-aos-offset="100"
                              className="lg:col-span-1 col-span-4 ">
                              <div className="border">
                                   <div className="">
                                        <h1 className="text-lg bg-cyan-400 text-center rounded-t-xl  font-medium py-2  mb-4">Recent Posts</h1>

                                   </div>

                                   {
                                        recentPost.map(blog => <RecentPost key={blog.id} blog={blog}></RecentPost>)
                                   }

                              </div>
                         </div>
                    </div>
               </div>
          </div >
     );
};

export default BlogsPages2;