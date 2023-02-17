import "./SectionTwo.css";
import Card from "../cards/Cards";
import BrandImg from "../images/icon-brand-recognition.svg";
import DetsImg from "../images/icon-detailed-records.svg";
import FullyCustImg from "../images/icon-fully-customizable.svg";

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
            class="card card-one"
            img={BrandImg}
            h3="Brand Recognition"
            p="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content."
          />
          <Card
            class="card card-two"
            left="left-line"
            right="right-line"
            img={DetsImg}
            h3="Detailed Recordsn"
            p=" Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions."
          />
          <Card
            class="card card-three"
            img={FullyCustImg}
            h3="Fully Customizable"
            p="
            Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement."
          />
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
