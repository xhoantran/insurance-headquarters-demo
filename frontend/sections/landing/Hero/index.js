import Link from "next/link";

import backgroundImage from "../../../assets/image/landing-4/map_bg.png";
import imageOne from "../../../assets/image/landing-4/hero-main-img.png";
import imageTwo from "../../../assets/image/landing-4/hero-single-img-1.png";
import imageThree from "../../../assets/image/landing-4/hero-single-img-2.png";

const HeroSection = ({ ...rest }) => {
  return (
    <>
      {/* Hero Area */}
      <div
        className="hero-area-l4 bg-position "
        style={{ background: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start align-items-center">
            <div
              className="col-xl-5 col-lg-6 col-md-9 order-lg-0 order-1"
              data-aos="zoom-out"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-l3-heading">
                <h2>Get Affordable Insurance For Ones You Love</h2>
                <p>
                  We work hand-in-hand with industry-leading brands to help you
                  enjoys all your moments knowing that the ones you love are
                  protected.
                </p>
                <Link href="/seePlans">
                  <button className="btn focus-reset">Get A Quote</button>
                </Link>
              </div>
            </div>
            <div
              className="offset-xl-1 col-xl-6 col-lg-6 col-md-9 order-lg-1 order-0"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-l3-image-group">
                <div className="image-1">
                  <img src={imageOne} alt="Hero" />
                </div>
                <div className="image-2">
                  <img src={imageTwo} alt="Hero" />
                </div>
                <div className="image-3">
                  <img src={imageThree} alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
