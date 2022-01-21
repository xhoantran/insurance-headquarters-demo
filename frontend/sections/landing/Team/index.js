import TeamSlider from "./components/teamSlider";

const TeamSection = () => {
  return (
    <>
      {/* Doctor list  Area*/}
      <div className="team-area doctor-list-area-l4">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-12"
              data-aos="fade-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading text-center">
                <h2>Our Best Expertise</h2>
              </div>
            </div>
          </div>

          <div className="row team-slider-cs">
            <div className="col-lg-12">
              <TeamSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
