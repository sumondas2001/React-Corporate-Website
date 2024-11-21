import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Aos from "aos";

const RootHomePages = () => {


     useEffect(() => {
          Aos.init()
     }, []);

     return (
          <div className="scroll-container  font-Ubuntu">
               <Navbar />
               <div className="">
                    <Outlet></Outlet>

               </div>
               <Footer></Footer>
               <Toaster />
          </div>
     );
};

export default RootHomePages;