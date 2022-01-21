import React from "react";
import Link from "../../../../components/Link";
import imageOne from "../../../../assets/image/landing-4/content-1-doc-1.png";
import imageTwo from "../../../../assets/image/landing-4/content-1-shape-1.png";
import imageThree from "../../../../assets/image/landing-4/hero-single-img-1.png";

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* Content area */}
      <div className="content-area-l4">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-4 col-md-6 col-sm-8"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l4-1-image-group">
                <div className="image-1">
                  <img src={imageOne} alt="Content" />
                </div>
                <div className="image-2">
                  <img src={imageTwo} alt="Content" />
                </div>
                <div className="image-3">
                  <img src={imageThree} alt="Content" />
                </div>
              </div>
            </div>
            <div
              className="offset-lg-2 col-lg-6 col-md-9"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading content-l4-1--content">
                <h2>More than 200+ plans from all top insurance companies.</h2>
                <p>
                  Insurance Headquarters is the best place to find your
                  affordable insurance anywhere at anytime. It’s simple, secure
                  and up-to-date. We have a wide variety of plans to choose from
                  and you can find the right plan that suits your budget.
                </p>
                <p className="content-l4-p2">
                  We are always ready to lend a hand, if you need any assistance
                  with anything. We are here to help you.
                </p>
                <Link to="/" className="btn  btn--link focus-reset focus-reset">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSectionOne;
