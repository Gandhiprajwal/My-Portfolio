import "../About/QualificationCard.css";

import PropTypes from "prop-types";

export default function QualificationCard({ data }) {
  return (
    <div className="qualiCard-cont">
      <h1>{data.name}</h1>
      <ul>
        <li>
          <h3>{data.degree}</h3>
        </li>
        <li>
          <p>{data.duration}</p>
        </li>
      </ul>
    </div>
  );
}

QualificationCard.propTypes = {
  data: PropTypes.object.isRequired,
};
