import Slider from "react-slick";
import TeamCard from "../../../about/Team/components/Card";
import Data from "../../../../data/teamMember";

function TeamSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        {Data.map((item, index) => {
          return (
            <div
              className="col-lg-3 col-sm-6 col-10"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
              key={index}
            >
              <TeamCard
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default TeamSlider;
