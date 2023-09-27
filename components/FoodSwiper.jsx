'use client'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
// import SlideCard from './SlideCard';


const FoodSwiper = ({menuItems}) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   
    <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        {menuItems.map((eachMomo)=>{
              const {title, price, image,id} = eachMomo;
              return(
                <div className="bg-[#151030] rounded-2xl sm:w-[360px] w-[400px]" key={id}>
                <div className="w-full h-[230px]">
                  <Image
                    src={image}
                    alt="project_image"
                    width="200"
                    height="200"
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
          
                <div className=" p-5 flex justify-between items-center">
                  <h3 className="text-white font-bold text-[24px]">{title}</h3>
                  <p className="text-white text-[14px]">{price}</p>
                </div>
              </div>
              )
              })}
        </Slider>
      </div>
  );
}

export default FoodSwiper
