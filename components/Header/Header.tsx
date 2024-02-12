import React from "react";

const Header = () => {
  return (
    <div className="bg-[#fff] text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">TheMicroMagnets</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <a href="#" className="hover:text-[#301934] text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#301934] text-black">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#301934] text-black">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#301934] text-black">
                Blogs
              </a>
            </li>
            <li>
              <button className="hover:text-[#301934] py-2 px-4 rounded-full bg-[#301934] text-white">
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
