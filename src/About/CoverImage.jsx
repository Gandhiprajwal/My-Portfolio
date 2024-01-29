import "../About/CoverImage.css";
import { FaInstagram } from "react-icons/fa";
export default function CoverImage() {
  return (
    <>
      <div className="cover-img">
        <img src="/images/About/coverimg.jpg" alt="img" id="cv-img" />
        <div className="override-content">
          <img src="/images/About/PrajwalGandhi.jpg" alt="" id="pf-img" />
          <div className="cv-info">
            <div className="self-intro">
              <h1 id="my-name">Prajwal Gandhi</h1>
              <p id="username">@prajwalgandhi</p>
            </div>
            <div className="insta-btn">
              <button className="my-button">
                <a href="" id="btn-link">
                  <FaInstagram /> Follow me on Instagram
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
