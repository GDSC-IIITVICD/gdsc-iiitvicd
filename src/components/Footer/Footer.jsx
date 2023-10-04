import SvgLogo from "../SVG_Logos/SvgLogo";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="get-in-touch">Get in touch with us!</div>

      <div className="contact">
        <a href="/" className="social-logo">
          <SvgLogo name="github-footer" />
        </a>

        <a href="/" className="social-logo">
          <SvgLogo name="linkedin-footer" />
        </a>

        <a href="/" className="social-logo">
          <SvgLogo name="instagram-footer" />
        </a>

        <a href="/" className="social-logo">
          <SvgLogo name="gmail-footer" />
        </a>
      </div>

      <div className="footer-heading">
        Google Develeoper Student Club @IIITV-ICD
      </div>

      <div className="footer-subheading">
        Indian Insitute of Information Technology Vadodara - International
        Campus Diu
      </div>

      <div id="footer-location">
        Diu, Union Territory Dadra and Nagar Haveli and Daman and Diu
      </div>
    </div>
  );
};

export default Footer;
