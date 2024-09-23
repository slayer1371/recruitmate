import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./cmc.css";

const CenterModeCarousel = ({ images }) => {
  const settings = {
    className: "slider variable-width center",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div style={{ padding: "0px" }} className="slider-container">
      <h4 style={{ width: "50%", marginLeft: "5%" }}>THE RECRUITMATE FAMILY</h4>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} style={{ width: "auto" }}>
            <img src={image.url} height={"500px"} alt={image.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterModeCarousel;
