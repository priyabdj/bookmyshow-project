import Slider from "react-slick";
import "./carousel.css";


const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    {
      id: 1,
      src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
      alt: "Slide 1",
    },
    {
      id: 2,
      src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1728390794440_bandlanddesktop.jpg",
      alt: "Slide 2",
    },
    {
      id: 3,
      src: "https://assets-in.bmscdn.com/promotions/cms/creatives/1728980746978_1240x300kumarsutra.jpg",
      alt: "Slide 3",
    },
  ];

  return (
    <div className="carousel">
      <div className="page">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="slide">
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
       </div>
      
    </div>
  );
};

export default CarouselComponent;
