import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


const Root = () => {
     return (
          <div className="max-w-7xl mx-auto font-poppins">
               <Navbar />
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Root;