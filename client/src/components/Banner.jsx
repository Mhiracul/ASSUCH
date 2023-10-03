import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div className="h-full relative font-mukta ">
      <div
        className="bg-center bg-cover bg-no-repeat h-[80vh] "
        style={{
          background:
            '  url("https://tidytheme.com/tidytheme/aidiex/html/images/video.jpg")', // Replace with your image URL
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="h-full  bg-gradient bg-gradient-to-br from-gray-500 to-transparent  
            bg-opacity-20 rounded-md shadow-md "
        >
          <Navbar />
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-20">
            <div className="py-6  ">
              <div className="max-w-md">
                <h1 className="text-sm bg-[#164de0] w-44 font-bold text-white">
                  LIVE THE EXPERIENCE
                </h1>
                <p className="lg:text-5xl text-2xl font-bold uppercase  text-white">
                  Provides superior & Best quality result
                </p>
                <button className="text-white font-bold bg-transparent text-sm mt-4  px-4 py-2 rounded-none hover:bg-white hover:text-[#49122C] border border-white ">
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
