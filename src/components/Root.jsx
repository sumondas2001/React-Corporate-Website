import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
     return (
          <div className="max-w-7xl mx-auto font-poppins">
               <Navbar />
               <Outlet></Outlet>
               <Footer></Footer>
               <Toaster />
          </div>
     );
};

export default Root;