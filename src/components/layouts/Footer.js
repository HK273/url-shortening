import "../layouts/Footer.css";
import WhiteLogo from "../images/white-logo.svg";
import fblogo from "../images/icon-facebook.svg";
import twitlogo from "../images/icon-twitter.svg";
import pinlogo from "../images/icon-pinterest.svg";
import instalogo from "../images/icon-instagram.svg";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-links">
        <img className="footer-logo" src={WhiteLogo} alt="img-logo" />
      </div>
      <div className="footer-links">
        <li className="header-li">Features</li>
        <li>Jobs</li>
        <li>Press</li>
        <li>Blog</li>
      </div>
      <div className="footer-links">
        <li className="header-li">Features</li>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </div>
      <div className="footer-links">
        <li className="header-li">Resources</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </div>
      <div className="flex-soc">
        <img src={fblogo} alt="facebook-logo" />
        <img src={twitlogo} alt="twitter-logo" />
        <img src={pinlogo} alt="pinterest-logo" />
        <img src={instalogo} alt="instagram-logo" />
      </div>
    </div>
  );
}
export default Footer;
