import "./Work.css";
import PropTypes from "prop-types";

function handlebtn(link) {
  window.location.href = link;
}

export default function Work({ data, work }) {
  Work.propTypes = {
    data: PropTypes.shape({
      img: PropTypes.string.isRequired,
      head: PropTypes.string.isRequired,
      subHead: PropTypes.string.isRequired,
      descrip: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      project: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired,
    }).isRequired,
  };
  return (
    <div className="work-container">
      <img src={data.img} alt="img" id="project-img" className="img-pjt" />
      <span className="content-cont">
        <h2 className="head">{data.head}</h2>
        <h4 className="subHead">{data.subHead}</h4>
        <p className="decrip">{data.descrip}</p>
        <div className="btn-links">
          <button
            className="link-btn"
            href=""
            onClick={() => handlebtn(data.github)}
            disabled={data.disabled ? true : false}
          >
            <a href={data.github}>View on GitHub!</a>
          </button>
          <button
            className="link-btn"
            href=""
            onClick={() => handlebtn(data.project)}
            disabled={data.disabled ? true : false}
          >
            <a href={data.project}>Try Now! </a>
          </button>
        </div>
      </span>
    </div>
  );
}
