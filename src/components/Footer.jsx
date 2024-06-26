import "../styles/styles-desktop.css";
import '../styles/styles-mobile.css';
import logo from "../assets/hc_logo2.svg";

const Footer = () => {
  return (
    <footer>
      <div id="footer-container">
        <div id="footer-logo">
          <img src={logo} alt="" />
          <p>Gamifique sua experiência!</p>
          <p>HC Gaming All Rights Reserved</p>
        </div>

        <ul className="footer-list">
          <li>
            <h3>Info</h3>
          </li>
          <li>
            <a href="#form" className="footer-links">
              Contact us
            </a>
          </li>
          <li>
            <a href="#" className="footer-links">
              Privacy Policies
            </a>
          </li>
          <li>
            <a href="#" className="footer-links">
              Terms & Conditions
            </a>
          </li>
        </ul>

        <ul className="footer-list">
          <li>
            <h3>Company</h3>
          </li>
          <li>
            <a href="#form" className="footer-links">
              Help
            </a>
          </li>
          <li>
            <a href="#" className="footer-links">
              Careers
            </a>
          </li>
          <li>
            <a href="#banner" className="footer-links">
              About
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
