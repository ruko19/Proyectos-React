import React from "react";
import Image2 from "../../assets/hero/women.png";
import Image1 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImangeList = [
  {
    id: 1,
    img: Image1,
    tittle: "Upto 50% offf on all Mens´s Wear",
    description:
      "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, odit modi. Dolores itaque placeat perspiciatis nobis, et veritatis soluta velit harum. Itaque doloribus quia tenetur.",
  },
  {
    id: 2,
    img: Image2,
    tittle: "30% off on all Women´s Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nesciunt ipsum esse, aspernatur dolor assumenda sequi maxime ea minus velit.",
  },
  {
    id: 3,
    img: Image3,
    tittle: "70% off on all Products Sale",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore pariatur eum accusamusquos beatae ipsam",
  },
];

const Hero = () => {
  
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplayedSpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200  ">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImangeList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {data.tittle}
                  </h1>
                  <p className="text-sm"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100">{data.description}</p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full cursor-pointer ">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* text content section */}

                <div className="order-1 sm:order-2"
               
                >
                  <div className="relative z-10"
                     data-aos="zoom-in"
                     data-aos-once="true">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
