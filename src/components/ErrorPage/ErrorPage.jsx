import { Link } from "react-router-dom";


const ErrorPage = () => {
     return (
          <div className=" relative">
               <div className="">
                    <img className="h-screen object-cover w-full" src="https://pearl.stylemixthemes.com/corporate/wp-content/uploads/sites/23/2017/05/photo-1494368308039-ed3393a402a4-1.jpeg" alt="" />
               </div>

               <div className="absolute top-1/3 lg:space-y-6 md:space-y-4 space-y-4 lg:left-20 md:left-16 left-10">
                    <h1 className="lg:text-[100px] md:text-7xl text-6xl font-extrabold text-white ">440</h1>
                    <p className="lg:text-2xl md:text-2xl text-xl font-bold text-white">The page you are looking for does not exist.</p>
                    <button className="text-xs  font-bold rounded-md bg-cyan-500 px-4 py-2">
                         <Link to={'/'}>Go Back Home</Link>
                    </button>
               </div>
          </div>
     );
};

export default ErrorPage;