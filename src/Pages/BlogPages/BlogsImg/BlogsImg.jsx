
const BlogsImg = () => {
     return (
          <div className="relative">

               <img className=' w-full lg:h-72 md:h-40 h-28 object-cover  bg-gradient-to-r from-[#000000f8] to-[rgba(21,21,21,0.00)] brightness-50' src={'https://i.ibb.co.com/XFkGVBq/contact-us-classic-bg-1.jpg'} alt="" />

               <div className="bg-cyan-500 lg:px-5 md:px-3 md:py-2  lg:py-3 p-2  w-30 md:w-30 rounded-t-md  lg:w-44 bottom-0 justify-center text-center absolute lg:left-[500px] md:left-64 left-32">
                    <h1 className="lg:text-base md:text-sm text-xs text-black font-semibold">HOME/BLOG</h1>
               </div>
          </div>
     );
};

export default BlogsImg;