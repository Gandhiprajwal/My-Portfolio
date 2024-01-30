import Nav from "./Nav";
import "./Intro.css";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

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
          <p id="tagline">Turning complex problem into elegant solution.</p>
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
