import { Link, Outlet } from "react-router-dom";

const AdminPagesLayout = () => {
     return (
          <div className="flex gap-10 h-screen">

               <div className="w-[20%] bg-gray-400 ">
                    <ul className=" p-6 ">
                         <Link><li>About Pages</li></Link>
                         <Link><li>Blog Pages</li></Link>
                         <Link><li>Contacts Pages</li></Link>

                    </ul>
               </div>
               <div className="w-[80%]">
                    <Outlet></Outlet>
               </div>
          </div>
     );
};

export default AdminPagesLayout;