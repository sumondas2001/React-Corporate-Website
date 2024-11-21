import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Aos from "aos";
// import '../App.css';


const Root = () => {
     useEffect(() => {
          Aos.init()
     }, []);



     return (

          <div className="scroll-container  font-Ubuntu">
               <Navbar />
               <div className="lg:max-w-[1250px] md:max-w-[700px] max-w-[370px] mx-auto ">
                    <Outlet></Outlet>

               </div>
               <Footer></Footer>
               <Toaster />
          </div>
     );
};

export default Root;