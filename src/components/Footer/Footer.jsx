import { Link } from "react-router-dom";


const Footer = () => {
     return (
          <div className="bg-slate-900 p-10">
               <div className=" flex justify-around">
                    <div>
                         <h1 className="text-2xl font-bold text-cyan-500">
                              LOGO
                         </h1>
                    </div>

                    <dir>
                         <ul className=" text-sm font-semibold text-white ">
                              <Link className="hover:underline" to={'/'}> <li>HOME</li></Link>
                              <Link className="hover:underline" to={'/blog'}> <li>BLOG</li></Link>
                              <Link className="hover:underline" to={'/contacts'}> <li>CONTACTS</li></Link>
                              <Link className="hover:underline" to={'/gallery'}> <li>GALLERY</li></Link>



                         </ul>
                    </dir>
                    <dir>
                         <ul className=" text-sm font-semibold text-white">S
                              <Link className="hover:underline" to={'/'}> <li>FACEBOOK</li></Link>
                              <Link className="hover:underline" to={'/blog'}> <li>INSTAGRAM</li></Link>
                              <Link className="hover:underline" to={'/contacts'}> <li>SPOTIFY</li></Link>
                              <Link className="hover:underline" to={'/gallery'}> <li>VIMEO</li></Link>
                              <Link className="hover:underline" to={'/gallery'}> <li>BECHANCE</li></Link>



                         </ul>
                    </dir>
               </div>
               <div>
                    <h1 className="text-center text-base font-normal text-white">© Copyright 2024. Theme by</h1>
               </div>
          </div>
     );
};

export default Footer;