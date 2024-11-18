
import { useContext } from "react";
import PagesCoverImg from "../../components/PagesCoverImg/PagesCoverImg";
import Blogs from "./Blogs/Blogs";
import { AuthContext } from "../../Provider/AuthProvider";

const BlogPages = () => {
     // window top pages
     const { PageTop } = useContext(AuthContext);
     PageTop();

     const imgUrl = 'https://i.ibb.co.com/XFkGVBq/contact-us-classic-bg-1.jpg'


     return (
          <div>
               <PagesCoverImg imgUrl={imgUrl} title={"BLOG"}></PagesCoverImg>
               <Blogs></Blogs>

          </div>
     );
};

export default BlogPages;