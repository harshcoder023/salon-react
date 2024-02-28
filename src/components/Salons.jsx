import React from "react";
import StarFillIcon from "remixicon-react/StarFillIcon";
const Salons = () => {
  const salons = [
    {
      id: 0,
      name: "Glamour Cuts",
      image:
        "https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg",
      rating: 4.5,
      numberOfReviews: 120,
      location: "123 Main Street, Cityville",
      category: "Hair Salon",
    },
    {
      id: 1,
      name: "Zen Spa & Wellness",
      image:
        "https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg",
      rating: 4.8,
      numberOfReviews: 80,
      location: "456 Oak Avenue, Townsville",
      category: "Massage",
    },
    {
      id: 2,
      name: "Fresh Cuts Barbershop",
      image:
        "https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg",
      rating: 4.2,
      numberOfReviews: 150,
      location: "789 Elm Street, Villagetown",
      category: "Barbershop",
    },
    {
      id: 3,
      name: "Chic & Shine Salon",
      image:
        "https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg",
      rating: 4.7,
      numberOfReviews: 100,
      location: "321 Maple Road, Hamletville",
      category: "Hair Salon",
    },
    {
      id: 4,
      name: "Relaxation Haven",
      image:
        "https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg",
      rating: 4.6,
      numberOfReviews: 90,
      location: "555 Pine Avenue, Serenity Springs",
      category: "Massage",
    },
  ];

  return (
    <div className="w-full bg-[#f8f8f8] py-12">
      <div className="lg:max-w-screen-lg w-full px-4 lg:px-0 mx-auto">
        <h2 className="font-playfair text-3xl mb-8">Recommended</h2>
        <div className="flex flex-wrap gap-4 font-roboto">
          {salons.map((salon, index) => (
            <div
              key={index}
              className="lg:w-[calc((100%-2rem)/3)] w-[calc((100%-1rem)/2)] border"
            >
              <div className="h-[180px]">
                <img
                  className="h-full w-full object-cover"
                  src={salon.image}
                  alt=""
                />
              </div>
              <div className="px-4 py-3">
                <h3 className="font-medium mb-1">{salon.name}</h3>
                <div className="flex items-center gap-1 text-sm">
                  <h4>{salon.rating}</h4>
                  <StarFillIcon size={15} />
                  <span>({salon.numberOfReviews})</span>
                </div>
                <h4 className="text-gray-600 text-sm mt-1">{salon.location}</h4>
                <h5 className="border rounded-md inline-block text-sm px-2 py-1 mt-2">
                  {salon.category}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Salons;
