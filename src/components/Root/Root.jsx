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
               <div >
                    <Outlet></Outlet>

               </div>
               <Footer></Footer>
               <Toaster
                    position="top-right"
                    reverseOrder={true}
               />
          </div>
     );
};

export default Root;