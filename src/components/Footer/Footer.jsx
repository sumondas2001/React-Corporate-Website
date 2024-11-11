import { Link } from "react-router-dom";


const Footer = () => {
     return (
          <div className="bg-slate-900 lg:p-10 md:p-8 p-4">
               <div className=" flex md:flex-row lg:flex-row flex-col justify-evenly">
                    <div className="flex justify-center items-center">
                         <div>
                              <Link to={'/'} ><img className="size-20  " src="https://i.ibb.co.com/sJZwLBW/pngtree-company-logo-design-trademark-design-creative-logo-png-image-4569380-removebg-preview.png" alt="" /> </Link>
                         </div>
                    </div>

                    <dir>
                         <ul className=" text-xs font-light text-center  text-white">

                              <li className="text-sm font-normal mb-3">Quick Links</li>
                              <Link className="hover:underline hover:text-cyan-600" to={'/'}> <li>HOME</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/blog'}> <li>BLOG</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/contacts'}> <li>CONTACTS</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/gallery'}> <li>GALLERY</li></Link>



                         </ul>
                    </dir>
                    <dir>
                         <ul className=" text-xs text-center font-light text-white ">

                              <li className="text-sm font-normal mb-3">Follow Us</li>
                              <Link className="hover:underline hover:text-cyan-600" to={'/'}> <li>FACEBOOK</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/blog'}> <li>INSTAGRAM</li></Link>
                              <Link className="hover:underline hover:text-cyan-600" to={'/contacts'}> <li>SPOTIFY</li></Link>





                         </ul>
                    </dir>

               </div>
               <div className="mt-6">
                    <hr />
                    <h1 className="text-center text-xs font-normal mt-4  text-white">© Copyright 2024. Theme by</h1>
               </div>
          </div>
     );
};

export default Footer;