import React from "react";
import imageOne from "../../../../assets/image/about/about-img-3.png";
import imageTwo from "../../../../assets/image/about/about-img-4.png";
import imageThree from "../../../../assets/image/about/about-img-5.png";
const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
      {/* About us content-2 */}
      <div className="about-content-2 bg-catskillwhite">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-2-img-1">
                <img className="w-100" src={imageOne} alt="about content" />
              </div>
              <div className="about-content-2-img-2 text-end">
                <img className="w-100" src={imageTwo} alt="about content" />
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-2-content">
                <div className="section__heading">
                  <h2>High skilled employee from worldwide.</h2>
                  <p>
                    The health insurance market is a difficult one to navigate
                    on your own. Many people do not know where to start or how
                    to get the best rates. Our professional health insurance
                    experts are here for you. They will help you find the
                    perfect plan for your needs, no matter what they are.
                  </p>
                  <p>
                    Everyone is talking about health insurance right now, but it
                    can be really hard to wrap your head around. Figuring out
                    where to start or how to go about researching is
                    overwhelming and that's where we come in! Having an expert
                    walk you through the process and discuss different rates
                    will make the task a lot easier.
                  </p>
                </div>
              </div>
              <div className="about-content-2-right-img ">
                <img className="w-100" src={imageThree} alt="about content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSectionTwo;
