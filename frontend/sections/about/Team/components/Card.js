import React from "react";
const TeamCard = ({ title, subtitle, image }) => {
  return (
    <div className="about-team-card">
      <div className="about-team-card__image">
        <img className="w-100" src={image} alt="team" />
        <div className="social">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="about-team-card__content">
        <h6>{title}</h6>
        <span dangerouslySetInnerHTML={{ __html: subtitle }} />
      </div>
    </div>
  );
};

export default TeamCard;
