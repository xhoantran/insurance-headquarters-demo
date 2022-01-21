import Slider from "react-slick";

import LogoBlue1 from "../../../assets/image/client-logo/logo-blue1.png";
import LogoLight1 from "../../../assets/image/client-logo/logo-light1.png";
import LogoBlue2 from "../../../assets/image/client-logo/logo-blue2.png";
import LogoLight2 from "../../../assets/image/client-logo/logo-light2.png";
import LogoBlue3 from "../../../assets/image/client-logo/logo-blue3.png";
import LogoLight3 from "../../../assets/image/client-logo/logo-light3.png";
import LogoBlue4 from "../../../assets/image/client-logo/logo-blue4.png";
import LogoLight4 from "../../../assets/image/client-logo/logo-light4.png";
import LogoBlue5 from "../../../assets/image/client-logo/logo-blue5.png";
import LogoLight5 from "../../../assets/image/client-logo/logo-light5.png";
import LogoBlue6 from "../../../assets/image/client-logo/logo-blue6.png";
import LogoLight6 from "../../../assets/image/client-logo/logo-light6.png";
import LogoBlue7 from "../../../assets/image/client-logo/logo-blue7.png";
import LogoLight7 from "../../../assets/image/client-logo/logo-light7.png";

function ClientSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src={LogoBlue1} alt="" />
            <img className="logo-hover" src={LogoLight1} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src={LogoBlue2} alt="" />
            <img className="logo-hover" src={LogoLight2} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src={LogoBlue3} alt="" />
            <img className="logo-hover" src={LogoLight3} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src={LogoBlue4} alt="" />
            <img className="logo-hover" src={LogoLight4} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src={LogoBlue5} alt="" />
            <img className="logo-hover" src={LogoLight5} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src={LogoBlue6} alt="" />
            <img className="logo-hover" src={LogoLight6} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src={LogoBlue7} alt="" />
            <img className="logo-hover" src={LogoLight7} alt="" />
          </div>
        </div>
      </Slider>
    </>
  );
}

export default ClientSlider;
