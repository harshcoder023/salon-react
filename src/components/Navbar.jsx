import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="container w-full lg:max-w-screen-lg mx-auto px-4 lg:px-0">
        <div className="w-full flex justify-between h-[70px] items-center">
          <div className="logo font-medium text-lg">Logo</div>
          <button className="border border-gray-300 px-5 py-2 rounded-full font-medium">
            For business
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
