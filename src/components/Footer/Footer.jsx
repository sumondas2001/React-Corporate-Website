import { Link } from "react-router-dom";


const Footer = () => {
     return (
          <div className="bg-slate-900 lg:p-10 md:p-8 p-4">
               <div className=" flex justify-around">
                    <div className="flex justify-center items-center">
                         <h1 className="lg:text-2xl md:text-xl text-lg font-bold text-cyan-500">
                              LOGO
                         </h1>
                    </div>

                    <dir>
                         <ul className=" text-sm font-normal  text-white">
                              <Link className="hover:underline hover:text-cyan-600" to={'/'}> <li>HOME</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/blog'}> <li>BLOG</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/contacts'}> <li>CONTACTS</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/gallery'}> <li>GALLERY</li></Link>



                         </ul>
                    </dir>
                    <dir>
                         <ul className=" text-sm font-normal text-white ">
                              <Link className="hover:underline hover:text-cyan-600" to={'/'}> <li>FACEBOOK</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/blog'}> <li>INSTAGRAM</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/contacts'}> <li>SPOTIFY</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/gallery'}> <li>VIMEO</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/gallery'}> <li>BECHANCE</li></Link>



                         </ul>
                    </dir>
               </div>
               <div>
                    <h1 className="text-center text-xs font-normal text-white">© Copyright 2024. Theme by</h1>
               </div>
          </div>
     );
};

export default Footer;