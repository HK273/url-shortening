import Illustration from "../images/illustration-working.svg";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="g-item-one">
        <img src={Illustration} alt="illustration-working" />
      </div>
      <div className="g-item-two">
        <h1 className="hero-h1">More than just shorter links</h1>
        <p className="hero-p">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>
    </div>
  );
}
export default Hero;
