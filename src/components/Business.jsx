import React from "react";

const Business = () => {
  return (
    <div>
      <div className="lg:max-w-screen-lg w-full px-6 lg:px-0 mx-auto py-12">
        <div className="lg:flex">
          <div className="left lg:w-1/2">
            <h2 className="capitalize font-playfair text-3xl">
              kurley for business
            </h2>
            <p className="mt-3 font-roboto">
              Supercharge your business with our best booking platform for
              salons and spas.
            </p>
            <button className="bg-black rounded-full px-5 py-2 text-white font-roboto mt-6">
              Find out more
            </button>
          </div>
          <div className="right lg:w-1/2 mt-11 lg:mt-0">
            <img
              src="https://www.rosysalonsoftware.com/wp-content/uploads/2019/01/system_2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
