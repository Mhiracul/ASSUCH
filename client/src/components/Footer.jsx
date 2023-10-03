import { BiMailSend, BiPhoneCall } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-[#164de0] font-mukta w-full h-full">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  lg:gap-20 gap-10 container mx-auto px-4 sm:px-6 md:px-8  py-20 w-full">
        <div className="1 max-w-sm mb-8">
          {/* Insert your logo here */}
          <h1 className="text-white font-mukta font-bold text-3xl">ASSUCH</h1>
          <p className="text-[8px] ml-8 -mt-1 text-white">GLOBAL LTD</p>
          <div className="mt-5">
            <p className="text-sm text-[#eeeded]">
              29A OLADIMEJI ALOO STREET, <br /> LEKKI PHASE 1, LAGOS, LEKKI,
              LAGOS STATE
            </p>
          </div>
          <div className="mt-5 flex flex-col">
            <p className="text-sm text-[#eeeded] inline-flex items-center gap-1">
              {" "}
              <BiPhoneCall color="#ffffff" /> +234 803 549 1894
            </p>
            <p className="inline-flex items-center gap-1">
              <BiMailSend color="#fff" />
              <a
                className="text-[#eeeded] text-sm"
                href="mailto:maidaville@eoaholdings.com?subject=Your%20Subject&body=Your%20Message"
              >
                contact@assuch.com
              </a>
            </p>
          </div>
        </div>
        <div className="2 text-white text-sm mb-8">
          <ul className=" flex flex-col lg:gap-8 gap-3">
            <li>About Us</li>
            <li>What we do</li>
            <li>Experience</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="3 text-white text-sm mb-8">
          <ul className=" flex flex-col lg:gap-8 gap-3">
            <li>Contact</li>
            <li>Offers</li>
            <li>Jobs</li>
            <li>Seminar</li>
          </ul>
        </div>

        <div className="4 flex flex-col max-w-md gap-6 ">
          <h1 className="text-2xl font-bold text-white">
            “Offer more than a gift <br /> voucher, offer an experience”
          </h1>

          <button className="text-white max-w-[10rem] font-bold bg-transparent text-sm mt-4  px-2 py-2 rounded-none hover:bg-white hover:text-[#49122C] border border-white ">
            BOOK NOW
          </button>
        </div>
      </div>
      <div className="border-t border-[#4f1832] w-full font-sans">
        <div className="container mx-auto py-8 gap-3 flex md:flex-col flex-col justify-between items-center">
          <p className="  text-[#fff] mt-3">
            &copy; Copyright {new Date().getFullYear()} contact@assuch.com
          </p>
          <div className="flex gap-4 text-white">
            <h1>Terms & Condition</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
