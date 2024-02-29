import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import StarFillIcon from "remixicon-react/StarFillIcon";

const Reviews = () => {
  const reviews = [
    {
      id: 0,
      userName: "Alice",
      userLocation: "New York",
      userImage:
        "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
      reviewTitle: "Fantastic Experience",
      reviewParagraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis semper ipsum. Sed tempus interdum est, at ultricies sapien fermentum a.",
    },
    {
      id: 1,
      userName: "Bob",
      userLocation: "Los Angeles",
      userImage:
        "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
      reviewTitle: "Great Service",
      reviewParagraph:
        "Vestibulum lacinia purus ac nibh feugiat, vitae mattis nisi cursus. Sed non elit nec ex viverra sollicitudin at a nisi. Sed tincidunt nec mauris at pharetra.",
    },
    {
      id: 2,
      userName: "Charlie",
      userLocation: "Chicago",
      userImage:
        "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
      reviewTitle: "Highly Recommend",
      reviewParagraph:
        "Quisque nec felis non felis condimentum varius ut sit amet ligula. Phasellus lacinia fringilla velit, non sollicitudin velit mattis a.",
    },
    {
      id: 3,
      userName: "David",
      userLocation: "Houston",
      userImage:
        "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
      reviewTitle: "Excellent Service",
      reviewParagraph:
        "Pellentesque facilisis suscipit nulla at placerat. Nullam ut eros quis mi hendrerit convallis. Fusce finibus nec enim sit amet facilisis. Cras sed orci lectus.",
    },
    {
      id: 4,
      userName: "Emily",
      userLocation: "Miami",
      userImage:
        "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
      reviewTitle: "Amazing Experience",
      reviewParagraph:
        "Sed sit amet elit id est fermentum blandit vel sed libero. Nulla facilisi. Nullam vitae scelerisque justo. Vivamus vel lectus non ante ultrices feugiat.",
    },
    {
      id: 5,
      userName: "Frank",
      userLocation: "Seattle",
      userImage:
        "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
      reviewTitle: "Incredible Service",
      reviewParagraph:
        "Maecenas at libero nec elit feugiat rutrum. Phasellus sed diam at libero finibus pretium eu nec sem. Fusce gravida mi in lectus dignissim, id tristique dui eleifend.",
    },
    {
      id: 6,
      userName: "Grace",
      userLocation: "San Francisco",
      userImage:
        "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg",
      reviewTitle: "Wonderful Experience",
      reviewParagraph:
        "Morbi nec pharetra magna. Proin tristique fermentum dapibus. Nulla facilisi. Morbi vitae metus vel odio fermentum sollicitudin. Sed eu fermentum nunc.",
    },
  ];
  const centerSlidePercentage = window.innerWidth <= 500 ? 100 : 33;
  return (
    <div className="bg-[#f8f8f8]">
      <div className="lg:max-w-screen-lg mx-auto px-4 lg:px-0 py-12">
        <h2 className="capitalize font-playfair text-3xl mb-8">Reviews</h2>
        <Carousel
          centerMode
          centerSlidePercentage={centerSlidePercentage}
          showArrows
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className=" text-wrap w-[360px] lg:w- h-[400px] p-5 flex flex-col justify-between bg-white lg:mr-4"
            >
              <div className="text-left">
                <div className="flex gap-1">
                  <StarFillIcon size={24} />
                  <StarFillIcon size={24} />
                  <StarFillIcon size={24} />
                  <StarFillIcon size={24} />
                  <StarFillIcon size={24} />
                </div>
                <h3 className="font-roboto text-xl  lg:text-2xl mt-5 font-medium">
                  {review.reviewTitle}
                </h3>
                <p className="mt-3">{review.reviewParagraph}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="max-w-16 h-16 object-cover rounded-full"
                  src={review.userImage}
                  alt=""
                />
                <div className="text-left">
                  <h5 className="font-medium text-md">{review.userName}</h5>
                  <span className="text-sm text-gray-600">
                    {review.userLocation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
