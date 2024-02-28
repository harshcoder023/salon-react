import React from "react";
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import MapPinLineIcon from "remixicon-react/MapPinLineIcon";
import CalendarLineIcon from "remixicon-react/CalendarLineIcon";
import Timer2LineIcon from "remixicon-react/Timer2LineIcon";
const Hero = () => {
  return (
    <div className="h-screen relative">
      <img
        className="w-full h-full object-cover object-center brightness-50"
        src="https://media.istockphoto.com/id/1313554252/photo/barber-shop.webp?b=1&s=170667a&w=0&k=20&c=Q7IoDSYvT-o00gy5RBm-tvrf-SQihOhaOGDwBniNBeg="
        alt=""
      />
      <div className="absolute w-full h-screen top-0 left-0 flex flex-col justify-center items-center text-white px-6">
        <div className="lg:max-w-screen-lg w-full ">
          <h1 className="font-playfair text-4xl lg:text-6xl font-medium mb-7 lg:mb-12 lg:leading-[1.2em]">
            Skip the Wait, <br /> Book Your Style Date
          </h1>
          <div className="p-4 bg-white text-black rounded w-full flex flex-wrap lg:items-center gap-3 font-roboto lg:py-2">
            <div className="border rounded flex items-center gap-3 px-4 py-3 w-full lg:flex-1 lg:border-r-2 lg:border-y-0 lg:border-l-0 lg:rounded-none lg:py-0]">
              <SearchLineIcon size={18} />
              <h4 className="text-md">Any treatment or venue</h4>
            </div>
            <div className="border rounded flex items-center gap-3 px-4 py-3 w-full lg:flex-1 lg:border-r-2 lg:border-y-0 lg:border-l-0 lg:rounded-none lg:py-0]">
              <MapPinLineIcon size={18} />
              <h4 className="text-md">Current Location</h4>
            </div>
            <div className="border rounded flex items-center gap-3 px-4 py-3 w-[calc((100%-0.75rem)/2)] lg:flex-1 lg:border-r-2 lg:border-y-0 lg:border-l-0 lg:rounded-none lg:py-0]">
              <CalendarLineIcon size={18} />
              <h4 className="text-md">Any date</h4>
            </div>
            <div className="border rounded flex items-center gap-3 px-4 py-3 w-[calc((100%-0.75rem)/2)] lg:flex-1 lg:border-none lg:rounded-none lg:py-0]">
              <Timer2LineIcon size={18} />
              <h4 className="text-md">Any time</h4>
            </div>
            <button className="w-full rounded bg-black text-white py-2 font-medium lg:w-auto lg:px-6 lg:rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
