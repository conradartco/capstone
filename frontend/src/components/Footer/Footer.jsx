import "./Footer.css";
import apiLogo from "../../images/TMDb-logo-2.svg";

const Footer = () => {
  return (
    <footer>
      <img className="tmdb-logo" src={apiLogo} alt="TMDb logo"/>
      <p className="tmdb-attr">This product uses the TMDB API but is not endorsed or certified by TMDB</p>
      <p><small>Copyright © 2022</small></p>
    </footer>
  );
};

export default Footer;
