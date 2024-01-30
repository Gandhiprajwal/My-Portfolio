import { FaGraduationCap } from "react-icons/fa6";
import "../About/Qualification.css";
import QualificationCard from "./QualificationCard";

export default function Qualification() {
  let qualification = {
    bachelor: {
      id: 1,
      name: "DIT UNIVERSITY, DEHRADUN (UTTRAKHAND)",
      degree:
        "Bachelor's Degree's, Computer Science Engineering specialized in Full Stack & Devops",
      duration: "Aug 2021- May 2025",
    },
    intermediate: {
      id: 2,
      name: "A.P.S INTERNATIONAL SCHOOL, UJHANI (UTTAR PRADESH)",
      degree: "Matriculation",
      duration: "Apr 2020 - Aug-2021",
    },
    highschool: {
      id: 3,
      name: "A.P.S INTERNATIONAL SCHOOL, UJHANI (UTTAR PRADESH)",
      degree: "High School",
      duration: "Apr 2019 - Mar 2019",
    },
  };
  return (
    <>
      <div className="quali-container">
        <h1>
          Education <FaGraduationCap />
        </h1>
      </div>
      <div style={{ padding: "2rem", paddingTop: "0" }}>
        {Object.values(qualification).map((data) => (
          <QualificationCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}
