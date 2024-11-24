import { GiNotebook } from "react-icons/gi";
import { SiArtixlinux } from "react-icons/si";
import { FcBusinessman } from "react-icons/fc";


const GetInTouch = () => {
     return (
          <div className="container">
               <h1 className="text-2xl  font-medium  mb-3">Get in touch</h1>
               <div className="flex items-center gap-2 ">
                    <hr className="w-16  border-cyan-400 border-2 " />
                    <p className="bg-cyan-400  p-1 w-0"></p>
               </div>

               <p className="text-lg font-medium mt-4 mb-8">Do you want to know more or contact our sales department?</p>

               <div className="space-y-8">
                    <div className="flex gap-8 items-center ">
                         <div className=" size-9 relative bg-rose-200">

                              <GiNotebook className=" mr-4 size-10 bg-cyan-200 absolute left-2 bottom-2"></GiNotebook>
                         </div>
                         <div className="space-y-1">
                              <h1 className="text-xl font-medium">Visit the Knowledge Base</h1>
                              <p className="text-base font-normal">Browse customer support articles and step-by-step instructions for specific features.</p>
                         </div>
                    </div>
                    <div className="flex gap-8 items-center">
                         <div className="bg-rose-200 size-9 relative">

                              <SiArtixlinux className=" mr-4 size-9 bg-cyan-200 text-cyan-900 absolute left-2 bottom-2"></SiArtixlinux>
                         </div>
                         <div className="space-y-1">
                              <h1 className="text-xl font-medium">Watch Product Videos</h1>
                              <p className="text-base font-normal">Watch our video tutorials for visual walkthrough on how to use our features.</p>
                         </div>
                    </div>
                    <div className="flex gap-8 items-center">
                         <div className="bg-rose-200 size-10 relative">

                              <FcBusinessman className=" mr-4 size-10 bg-cyan-200 absolute left-2 bottom-2"></FcBusinessman>
                         </div>
                         <div className="space-y-1">
                              <h1 className="text-xl font-medium">Get in touch with Sales</h1>
                              <p className="text-base font-normal">Let us talk about how we can help your enterprise</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default GetInTouch;