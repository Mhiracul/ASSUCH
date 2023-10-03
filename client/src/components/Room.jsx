import { BsArrowRightShort } from "react-icons/bs";
const Room = () => {
  return (
    <div className="bg-[#fff] h-full ">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-20">
        <h1 className="lg:text-6xl text-3xl font-extrabold">
          MARKET <br /> SECTORS{" "}
        </h1>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Item 1 */}
            <div className="border-r  p-4 ">
              <h3 className="text-xl font-semibold mb-5">ASSUCH</h3>

              <p className="text-gray-600 text-sm">
                Over 4 years experience & knowledge of international industrial
                systems, dedicated to provide the best economical solutions.
              </p>
              <button className="mt-4 text-blue-500 hover:underline">
                <BsArrowRightShort size={18} />
              </button>
            </div>

            {/* Item 2 */}
            <div className="border-r  p-4">
              <h3 className="text-xl font-semibold mb-5">
                Real <br /> Estate
              </h3>
              <p className="text-gray-600 text-sm">
                Denouncing pleasure and praising pain was born give you a
                complete...
              </p>
              <button className="mt-4 text-blue-500 hover:underline">
                <BsArrowRightShort size={18} />
              </button>
            </div>

            {/* Item 3 */}
            <div className="p-4 ">
              <h3 className="text-xl font-medium mb-5">Farming</h3>
              <p className="text-gray-600 text-sm">
                Denouncing pleasure and praising pain was born give you a
                complete...
              </p>
              <button className="mt-4 text-blue-500 hover:underline">
                <BsArrowRightShort size={18} />
              </button>
            </div>

            {/* Item 4 */}
            <div className="border-r  p-4">
              <h3 className="text-xl font-semibold mb-5">
                Business <br /> Consultancy
              </h3>
              <p className="text-gray-600 text-sm">
                Denouncing pleasure and praising pain was born give you a
                complete...
              </p>
              <button className="mt-4 text-blue-500 hover:underline">
                <BsArrowRightShort size={18} />
              </button>
            </div>

            {/* Item 5 */}
            <div className="border-r  p-4">
              <h3 className="text-xl font-semibold mb-5">Politics</h3>
              <p className="text-gray-600 text-sm">
                Denouncing pleasure and praising pain was born give you a
                complete...
              </p>
              <button className="mt-4 text-blue-500 hover:underline">
                <BsArrowRightShort size={18} />
              </button>
            </div>

            {/* Item 6 */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-5">
                Custom Sector <br /> Custom Description
              </h3>
              <p className="text-gray-600 text-sm">
                Denouncing pleasure and praising pain was born give you a
                complete...
              </p>
              <button className="mt-4  text-sm text-blue-500 hover:underline">
                <BsArrowRightShort size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
