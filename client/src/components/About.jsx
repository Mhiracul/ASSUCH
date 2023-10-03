import { useEffect, useState } from "react";
import { TbTargetArrow } from "react-icons/tb";
const About = () => {
  const [hotelRoomsCount, setHotelRoomsCount] = useState(0);
  const [activitiesCount, setActivitiesCount] = useState(0);
  const [restaurantsCount, setRestaurantsCount] = useState(0);

  const targetHotelRoomsCount = 50;
  const targetActivitiesCount = 15;
  const targetRestaurantsCount = 6;

  useEffect(() => {
    const incrementCounts = () => {
      if (hotelRoomsCount < targetHotelRoomsCount) {
        setHotelRoomsCount(hotelRoomsCount + 1);
      }

      if (activitiesCount < targetActivitiesCount) {
        setActivitiesCount(activitiesCount + 1);
      }

      if (restaurantsCount < targetRestaurantsCount) {
        setRestaurantsCount(restaurantsCount + 1);
      }
    };

    // You can adjust the interval duration to control the speed of the countdown
    const interval = setInterval(incrementCounts, 10);

    // Clear the interval when the target counts are reached
    if (
      hotelRoomsCount === targetHotelRoomsCount &&
      activitiesCount === targetActivitiesCount &&
      restaurantsCount === targetRestaurantsCount
    ) {
      clearInterval(interval);
    }

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [
    hotelRoomsCount,
    activitiesCount,
    restaurantsCount,
    targetHotelRoomsCount,
    targetActivitiesCount,
    targetRestaurantsCount,
  ]);
  return (
    <div className="flex md:flex-row  flex-col-reverse w-full h-full">
      <div className="bg-white md:w-1/2 w-full  h-full ">
        <div className="max-w-lg px-4 sm:px-6 md:px-8 py-20 container mx-auto">
          <h1 className="lg:text-6xl text-3xl  font-extrabold">ABOUT US</h1>
          <div className="mt-6">
            <h1>We Offer Top-notch hospitality services which include:</h1>
            <ol className="text-sm mt-3 space-y-2">
              <li>1. Luxurious Accommodation</li>
              <li>2. Indoor and Outdoor Restaurant services</li>
              <li>3. Exquisite Lounge & Bar</li>
              <li>
                4. Outdoor Catering namely:
                <ol>
                  <li className="ml-4 text-sm">i.Online Booking</li>
                </ol>
              </li>
            </ol>

            <div className="md:max-w-[15rem] w-full bg-white  mt-4 shadow-md  rounded-md">
              <div className="py-4 px-3">
                <div className="w-full py-2 font-sora inline-flex items-center gap-3 font-bold border-b border-[#706f6f]">
                  {" "}
                  <TbTargetArrow color="#164de0" size={20} />
                  <h1 className="text-left text-[16px] font-medium ">
                    OUR MISSION
                  </h1>
                </div>

                <p className="text-sm  text-[#717171] leading-6 mt-4 ">
                  Our mission is to provide exceptional value to our clients and
                  partners by delivering innovative solutions and unparalleled
                  service. We pride ourselves on our commitment to excellence
                  and integrity in every endeavor we undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f1f0f0] md:w-1/2 w-full h-full relative z-1">
        <div className="px-20   h-full ">
          {" "}
          <img
            src="https://hotellerv5.b-cdn.net/modern/wp-content/uploads/sites/5/2021/08/two-laughing-guests-checking-in-together-at-a-hote-MUXSSNK.jpg"
            alt=""
            className="border-8 border-[#164de0] relative top-[-100px] lg:left-[70px] md:left-[60px] left-[50px] w-[400px]"
          />
          <div className="flex md:flex-row flex-col justify-between items-center mb-3">
            <div className="flex flex-col justify-center items-center mt-6">
              <div className="lg:text-6xl text-3xl  text-gray-500 font-bold">
                {hotelRoomsCount}
              </div>
              <span className="text-xs font-medium"> PROJECTS </span>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
              <div className="lg:text-6xl text-3xl  text-gray-500 font-bold">
                {activitiesCount}
              </div>
              <span className="text-xs font-medium"> ACTIVITIES</span>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
              <div className="lg:text-6xl text-3xl  text-gray-500 font-bold">
                {restaurantsCount}
              </div>
              <span className="text-xs font-medium"> DEALS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
