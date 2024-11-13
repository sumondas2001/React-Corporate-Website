import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
     return (
          <div>
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[380px] mx-auto font-poppins">
                    <Navbar />
                    <Outlet></Outlet>

               </div>
               <Footer></Footer>
               <Toaster />
          </div>
     );
};

export default Root;