import "../About/CoverImage.css";
import { FaInstagram } from "react-icons/fa";
export default function CoverImage() {
  return (
    <>
      <div className="cover-img">
        <img src="https://res.cloudinary.com/dxok1pcjy/image/upload/v1707592762/Cover/hcq0higutyn3xmoocjm0.jpg" alt="img" id="cv-img" />
        <div className="override-content">
          <img src="https://res.cloudinary.com/dxok1pcjy/image/upload/v1707592763/Cover/xjwlncmgdcinfjcan6go.jpg" alt="" id="pf-img" />
          <div className="cv-info">
            <div className="self-intro">
              <h1 id="my-name">Prajwal Gandhi</h1>
              <p id="username">@prajwalgandhi</p>
            </div>
            <div className="insta-btn">
              <button className="my-button">
                <a href="https://www.instagram.com/iamprajwalgandhi?igsh=MXRwZ204ajYzaGZpbg==" id="btn-link" target="blank">
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
