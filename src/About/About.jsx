import Nav from "../Nav";
import Footer from "../Footer";
import CoverImage from "./CoverImage";
import "../About/About.css";
import KnowThing from "./KnownThing";

export default function About() {
  let known = {
    frontend: {
      id: 1,
      head: "Frontend",
      tech: [
        {
          name: "HTML",
          color: 0,
        },
        { name: "CSS", color: 1 },
        {
          name: "Tailwind",
          color: 1,
        },
        {
          name: "Javascript",
          color: 2,
        },
        {
          name: "Typescript",
          color: 0,
        },
        {
          name: "React Js",
          color: 1,
        },
        {
          name: "Bootstrap",
          color: 0,
        },
      ],
    },
    backend: {
      id: 2,
      head: "Backend",
      tech: [
        {
          name: "Node",
          color: 4,
        },
        {
          name: "Express",
          color: 2,
        },
      ],
    },
    database: {
      id: 3,
      head: "Database",
      tech: [
        {
          name: "MySql",
          color: 3,
        },
        {
          name: "MongoDB",
          color: 2,
        },
        {
          name: "Redis",
          color: 0,
        },
      ],
    },
    // "Docker", "Kubernetes", "GIT", "AWS"
    devops: {
      id: 4,
      head: "Devops",
      tech: [
        {
          name: "Docker",
          color: 3,
        },
        {
          name: "Kubernetes",
          color: 0,
        },
        {
          name: "AWS",
          color: 4,
        },
      ],
    },
  };
  return (
    <div style={{ backgroundColor: "rgb(20,19,26)", color: "white" }}>
      <div className="nav-color">
        <Nav />
      </div>
      <CoverImage />
      <div className="knowthing-cont">
        <h1 id="know-head">What I Know</h1>
        <div className="known-cont">
          {Object.values(known).map((know) => (
            <KnowThing key={know.id} know={know} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
