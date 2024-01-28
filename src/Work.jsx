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
      link: PropTypes.string.isRequired,
    }).isRequired,
  };
  return (
    <div className="work-container">
      <img src={data.img} alt="img" id="project-img" className="img-pjt" />
      <span className="content-cont">
        <h2 className="head">{data.head}</h2>
        <h4 className="subHead">{data.subHead}</h4>
        <p className="decrip">{data.descrip}</p>
        <button
          className="link-btn"
          href=""
          onClick={() => handlebtn(data.link)}
        >
          <a href={data.link}>View on GitHub</a>
        </button>
      </span>
    </div>
  );
}
