import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./cmc.css";

const CenterModeCarousel = () => {
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
    <div style={{padding: "0px"}} className="slider-container">
      <Slider {...settings}>
        <div style={{width: "470px"}}>
          <img src="src/images/car_img1.jpg" height={"500px"} alt="Slide 1" />
        </div>
        <div style={{width: "478px"}}>
          <img src="src/images/car_img2.jpg"  height={"500px"} alt="Slide 2" />
        </div>
        <div style={{width: "505px"}}>
          <img src="src/images/car_img3.jpg"  height={"500px"} alt="Slide 3" />
        </div>
        <div style={{width: "660px"}}>
          <img src="src/images/car_img4.jpg"  height={"500px"} alt="Slide 4" />
        </div>
        <div style={{width: "750px"}}>
          <img src="src/images/car_img5.jpg"  height={"500px"} alt="Slide 5" />
        </div>
        <div style={{width: "430px"}}>
          <img src="src/images/car_img6.webp"  height={"500px"} alt="Slide 6" />
        </div>
        <div style={{width: "420px"}}>
          <img src="src/images/car_img7.jpg"  height={"500px"} alt="Slide 7" />
        </div>
        <div style={{width: "375px"}}>
          <img src="src/images/car_img8.jpg"  height={"500px"} alt="Slide 8" />
        </div>
        <div style={{width: "751px"}}>
          <img src="src/images/car_img9.jpg"  height={"500px"} alt="Slide 9" />
        </div>
      </Slider>
    </div> 
  );
};

export default CenterModeCarousel;
