import Nav from "./Nav";
import "./Intro.css";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaGithub } from "react-icons/fa6";

export default function Intro({ work, btn }) {
  const scrollHandler = (eleRef) => {
    console.log(eleRef);
    window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });
  };
  return (
    <>
      <div className="bg-intro">
        <Nav work={work} />
        <div className="main-conainter">
          <div className="content">
            <h1 className="header-1" id="h1-greet">
              Hello there &#128075;,
            </h1>
            <h1 className="header-1" id="h1-intro">
              I'm&nbsp;
              <a href="#" id="name">
                Prajwal
              </a>
              , a MERN Stack Developer and ambitious to integrating the design
              into code.
            </h1>
            <span style={{ fontSize: "30px",display:"flex",flexDirection:"row"}}>
              <a href="https://www.linkedin.com/in/prajwalgandhi/" style={{ color: "white",paddingRight:"1rem" }}>
                <CiLinkedin />
              </a>
              <a href="https://www.instagram.com/iamprajwalgandhi?igsh=MXRwZ204ajYzaGZpbg==" style={{ color: "white",paddingRight:"1rem" }}>
                <FaInstagram />
              </a>
              <a href="https://github.com/gandhiprajwal" target="blank" style={{ color: "white",paddingRight:"1rem" }}>
                <FaGithub />
              </a>
            </span>
            <p id="tagline">Turning complex problem into elegant solution.</p>
          </div>
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dxok1pcjy/image/upload/v1707594083/Cover/m7vx0se3erpi5x4dfl8o.png"
              alt=""
            />
          </div>
        </div>
        <div id="arrow-icon">
          <a href="#" id="ar-icon" onClick={() => scrollHandler(work)}>
            <IoIosArrowDown />
          </a>
        </div>
      </div>
    </>
  );
}

Intro.propTypes = {
  work: PropTypes.any.isRequired,
};
