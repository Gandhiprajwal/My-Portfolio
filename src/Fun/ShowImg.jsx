import PropTypes from "prop-types";
import "./ShowImg.css";

export default function ShowImg({ data }) {
  return (
    <div className="showimg-container">
      <img src={data.link} alt="img.jpg" id="showImg" />
    </div>
  );
}

ShowImg.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
  }).isRequired,
};
