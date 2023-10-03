import { useEffect, useRef } from "react";

const Services = () => {
  const smallImageRef = useRef(null);

  useEffect(() => {
    // Function to start the bouncing animation
    const startBounce = () => {
      if (smallImageRef.current) {
        const smallImage = smallImageRef.current;
        smallImage.style.animation = "bounce 0.5s infinite alternate";
      }
    };

    // Start the bounce animation after a delay (e.g., 1 second)
    const bounceTimeout = setTimeout(startBounce, 1000);

    // Clean up the timeout on component unmount
    return () => clearTimeout(bounceTimeout);
  }, []);
  return (
    <div className="bg-[#164de0] h-full  flex w-full ">
      <div className="md:w-1/2 w-full ">
        <div className=" max-w-lg  container mx-auto px-4 sm:px-6 md:px-8 py-10">
          <h1 className="lg:text-6xl text-3xl font-extrabold text-white">
            THE LATEST <br /> PROJECTS
          </h1>
          <div className="relative py-10 mt-20">
            {/* Big Image */}
            <img
              src="https://hotellerv5.b-cdn.net/modern/wp-content/uploads/sites/5/2021/08/oslo-norway-night-view-of-stortingsgata-street-2021-04-03-23-48-01-utc.jpg" // Replace with your big image URL
              alt="Big Image"
              className="w-full h-[600px]"
            />
            {/* Small Image (Overlay) */}
            <img
              ref={smallImageRef}
              src="https://hotellerv5.b-cdn.net/modern/wp-content/uploads/sites/5/2021/08/hotel-in-dubai-2021-04-04-08-29-04-utc.jpg" // Replace with your small image URL
              alt="Small Image"
              className="w-60 h-60 border-4 border-[#fff] absolute top-[460px] md:left-1/2 left-[15%] transform -translate-x-1/2 -translate-y-1/2 bouncing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
