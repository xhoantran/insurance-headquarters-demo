import React from "react";
import Link from "../../../components/Link";
// import BrandLogo from "../../../assets/image/png/logo-white.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterSection({ ...rest }) {
  return (
    <>
      {/* Footer Area */}
      <footer className="footer-area">
        <div className="container">
          <div className="row footer-quick-link-area justify-content-lg-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="footer-area-list-item">
                <h4>PAGES</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Home Pages</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/seePlans">Get A Quote</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="footer-area-list-item">
                <h4>COMPANY BIO</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">Help Center</Link>
                  </li>
                  <li>
                    <Link to="/">Career</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
              <div className="footer-area-list-item">
                <h4>INFORMATIONS</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-area-list-item get-in-touch-area">
                <h4>get in touch</h4>
                <p>Contact us any time for getting support.</p>
                <h3>cindytran@live.com</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
