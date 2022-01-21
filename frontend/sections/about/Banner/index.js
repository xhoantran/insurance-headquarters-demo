import React from "react";
import Link from "../../../components/Link";
export default function BannerSection() {
  return (
    <div className="about-us-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xxl-7 col-xl-8 col-lg-9"
            data-aos="fade-up"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="about-us-banner-content text-center">
              <h2>We help families to archive finacial goals</h2>
              <p>
                Insurance Headquarters is a one-stop shop for all your insurance
                needs. We're here to help you find the best affordable plan with
                the lowest price anywhere at any time. With many years of
                experience, we are experts in finding what you need!
              </p>
              <Link to="/seePlans" className="btn focus-reset">
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
