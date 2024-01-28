import Work from "./Work";
import "./RecentWork.css";

export default function RecentWork({ work,btn }) {
  let data = {
    project1: {
      id: 1,
      img: "/images/asset0.png",
      head: "Wanderlust",
      subHead: "Product Design . B2B . Software . AI",
      descrip:
        "Streamline your design process with AI-powered software to overcome feedback-related obstacles and prioritize tasks effectively.",
      link: "https://github.com/",
    },
    project2: {
      id: 2,
      img: "/images/asset0.png",
      head: "Wanderlust",
      subHead: "Product Design . B2B . Software . AI",
      descrip:
        "Streamline your design process with AI-powered software to overcome feedback-related obstacles and prioritize tasks effectively.",
      link: "https://github.com/",
    },
    project3: {
      id: 3,
      img: "/images/asset0.png",
      head: "Wanderlust",
      subHead: "Product Design . B2B . Software . AI",
      descrip:
        "Streamline your design process with AI-powered software to overcome feedback-related obstacles and prioritize tasks effectively.",
      link: "https://github.com/",
    },
    project4: {
      id: 4,
      img: "/images/asset0.png",
      head: "Wanderlust",
      subHead: "Product Design . B2B . Software . AI",
      descrip:
        "Streamline your design process with AI-powered software to overcome feedback-related obstacles and prioritize tasks effectively.",
      link: "https://github.com/",
    },
    project5: {
      id: 5,
      img: "/images/asset0.png",
      head: "Wanderlust",
      subHead: "Product Design . B2B . Software . AI",
      descrip:
        "Streamline your design process with AI-powered software to overcome feedback-related obstacles and prioritize tasks effectively.",
      link: "https://github.com/",
    },
  };
  return (
    <>
      <div className="recentWork-container" ref={work}>
        <h1 id="recent-work" >Recent Work:</h1>
        {Object.values(data).map((project) => (
          <Work key={project.id} data={project} work={work} />
        ))}
      </div>
    </>
  );
}
