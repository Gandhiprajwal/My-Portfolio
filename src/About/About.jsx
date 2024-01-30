import Nav from "../Nav";
import Footer from "../Footer";
import CoverImage from "./CoverImage";
import "../About/About.css";
import KnowThing from "./KnownThing";
import Qualification from "./Qualification";
import ContactForm from "./ContactForm";
import { VscBook } from "react-icons/vsc";

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
        { name: "CSS", color: "blue" },
        {
          name: "Tailwind",
          color: "blue",
        },
        {
          name: "Javascript",
          color: "yellow",
        },
        {
          name: "Typescript",
          color: 0,
        },
        {
          name: "React Js",
          color: "blue",
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
          color: "green",
        },
        {
          name: "Express",
          color: "yellow",
        },
      ],
    },
    database: {
      id: 3,
      head: "Database",
      tech: [
        {
          name: "MySql",
          color: "red",
        },
        {
          name: "MongoDB",
          color: "yellow",
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
          color: "red",
        },
        {
          name: "Kubernetes",
          color: 0,
        },
        {
          name: "AWS",
          color: "green",
        },
      ],
    },
    languages: {
      id: 5,
      head: "Programming Language",
      tech: [
        {
          name: "Java",
          color: "blue",
        },
        {
          name: "C",
          color: 0,
        },
        {
          name: "Python",
          color: 0,
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
        <h1 id="know-head">
          What I Know <VscBook />
        </h1>
        <div className="known-cont">
          {Object.values(known).map((know) => (
            <KnowThing key={know.id} know={know} />
          ))}
        </div>
      </div>
      <Qualification />
      <ContactForm />
      <Footer />
    </div>
  );
}
