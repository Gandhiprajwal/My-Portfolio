import "../About/KnownThing.css";
import PropTypes from "prop-types";

const getColor = (color) => {
  if (color === 1) { //blue --> use krta hu
    return "rgba(59,130,246,.6)";
  } else if (color === 2) { // yellow --> acchee se aata hai
    return "rgba(234,179,8,.6)";
  } else if (color === 3) { //red --> kr sakta hu kaam
    return "rgba(239,68,68,.6)"; 
  } else if (color === 4) {  //green --> everready
    return "rgb(28,126,67)";
  } else { // pdha hai only
    return "rgba(0,0,0,.6)";
  }
};

export default function KnowThing({ know }) {
  return (
    <>
      <div className="known-container">
        <h1>{know.head}</h1>
        <div className="front-cont">
          {know.tech.map((data) => (
            <li key={data.id} style={{ borderColor: getColor(data.color) }}>
              {data.name}
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

KnowThing.propTypes = {
  know: PropTypes.string.isRequired,
};
