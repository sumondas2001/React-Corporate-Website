import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "./Blog";
import PagesTitle from "../../../components/PagesTitle/PagesTitle";
const Blogs = () => {

     const [blogs, setBlogs] = useState([]);

     useEffect(() => {
          axios.get("blogs.json")
               .then(res => {
                    setBlogs(res.data)
               })
               .catch(error => {
                    console.log(error)
               })
     }, []);
     return (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-10">

               <PagesTitle title={"Blog"}></PagesTitle>

               {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
               }
          </div>
     );
};

export default Blogs;