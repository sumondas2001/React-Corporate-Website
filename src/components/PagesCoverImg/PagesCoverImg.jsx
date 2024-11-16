const PagesCoverImg = ({ imgUrl, title }) => {


     return (
          <div className="relative ">

               <img className=' w-full lg:h-72 md:h-44 h-28 object-cover  bg-gradient-to-r from-[#000000f8] to-[rgba(21,21,21,0.00)] brightness-75 ' src={imgUrl} alt="" />

               <div className="bg-slate-700 bg-opacity-35 lg:px-2 md:px-2 md:py-3  lg:py-4 p-2 w-full  rounded-t-md  bottom-0 justify-center text-center absolute ">
                    <h1 className="lg:text-lg md:text-base  text-sm text-end lg:mr-28 md:mr-12 mr-6 text-white font-semibold">HOME | <span className="text-cyan-400">{title}</span></h1>
               </div>
          </div>
     );
};

export default PagesCoverImg;

