import "./SectionTwo.css";
import Card from "../cards/Cards";
import BrandImg from "../images/icon-brand-recognition.svg";

function SectionTwo() {
  return (
    <section className="section-two">
      <div className="section-two-width">
        <div className="section-two-header">
          <h2>Advanced Statistics</h2>
          <p className="section-two-p">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="card-container">
          <Card
            img={BrandImg}
            h3="Brand Recognition"
            p="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
          />
          <Card
            img={BrandImg}
            h3="Brand Recognition"
            p="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
          />
          <Card
            img={BrandImg}
            h3="Brand Recognition"
            p="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
          />
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
