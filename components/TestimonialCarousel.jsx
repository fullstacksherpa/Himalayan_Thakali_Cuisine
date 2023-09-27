import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../app/slider.css';
import Image from 'next/image';
const TestimonialCarousel = ({slider}) => {
  return (
    <Carousel
    showThumbs={false}
    showStatus={false}
    showIndicators={false}
    autoPlay={false}
    infiniteLoop={true}
    className="w-full max-w-[1024px] flex items-center justify-center"
    >
    {slider.map((item, index)=>{
      const {image, message, name, occupation} = item;
      return(
        <div className="mx-auto max-w-[840px] px-24 text-white" key={index}>
          <div>{message}</div>
          <div className='max-w-[70px] lg:max-w-[100px] mx-auto mb-3'>
            <Image src={image} width="20x" height="20px" alt="image of the person" />
          </div>
          <div className='font-bold text-[22px] text-orange-400 '>{name}</div>
          <div className='font-medium italic'>{occupation}</div>
        </div>
      )
    })}
    </Carousel>
  )
}

export default TestimonialCarousel