import React from "react";
import imageOne from "../../../../assets/image/about/about-img-1.png";
import imageTwo from "../../../../assets/image/about/about-img-2.png";

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* About us content-1 */}
      <div className="about-content-1">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-left">
                <img className="w-100" src={imageOne} alt="about content" />
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-right">
                <img className="w-100" src={imageTwo} alt="about content" />
              </div>
            </div>
          </div>
          <div className="row about-content-1-bottom">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading">
                <h2>Empower family to achieve finacial goal.</h2>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-content">
                <p>
                  It's hard to know what you're doing with your money when life
                  throws unexpected challenges at you. You don't have the time
                  or knowledge to figure out how much insurance coverage is
                  enough, what type of policy is best for your situation and
                  where you should be getting it from.
                </p>
                <p>
                  There are so many decisions that need to be made in a short
                  amount of time and there's no one who can help walk you
                  through it all.
                </p>
                <p>
                  You're not alone with all these decisions to make! That's why
                  we are here. This one-stop health insurance shop is
                  specifically designed for you to help you. It's like having a
                  personal assistant but for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSectionOne;
