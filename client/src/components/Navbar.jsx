import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-white text-black fixed z-50 top-0 w-full shadow-md"
          : "bg-transparent text-white"
      } transition-all ease-in-out duration-300 `}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 flex  gap-20 items-center justify-between">
        <div className="p-2">
          <h1
            className={`text-2xl font-bold ${
              isScrolled ? "text-[#164de0]" : "text-white"
            }`}
          >
            ASSUCH
          </h1>
        </div>
        <div className="md:hidden lg:hidden flex">
          <button
            className={`text-2xl focus:outline-none ${
              isScrolled ? "text-[#164de0]" : "text-white"
            }`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <AiOutlineCloseCircle /> : <BiMenuAltRight />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden w-full absolute top-16 left-0 bg-white text-black shadow-md">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <Link to="/" className="hover:text-[#164de0]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-[#164de0]">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#164de0]">
                  About
                </Link>
              </li>
            </ul>
            <div className="p-4">
              <button className="text-[#164de0] text-sm font-normal border-transparent px-4 py-2 rounded-none hover:border hover:border-white ">
                JOIN NOW
              </button>
            </div>
          </div>
        )}

        <div
          className={`${
            isMobileMenuOpen ? "hidden" : "hidden"
          } md:flex justify-between items-center w-full border-b py-6 border-[#706f6f] ${
            isScrolled ? "border-transparent" : "border-b border-[#706f6f]"
          }`}
        >
          <ul className="flex space-x-16 uppercase cursor-pointer font-medium font-sans text-sm">
            <li>
              <Link to="/" className="hover:border-b-2 border-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:border-b-2 border-white">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:border-b-2 border-white">
                About
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 items-center">
            <h1 className="mr-3 font-medium text-sm">EN</h1>
            <button className="text-white bg-[#164de0] text-sm font-normal border-transparent px-4 py-2 rounded-none hover:bg-transparent hover:border hover:border-white">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
