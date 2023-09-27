
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const SlideCard = ({menuItems}) => {
    
  return (  <>
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
              })};
              </>


    
  );
};

export default SlideCard;
