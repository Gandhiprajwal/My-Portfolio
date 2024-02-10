import Work from "./Work";
import "./RecentWork.css";

export default function RecentWork({ work, btn }) {
  let data = {
    project1: {
      id: 1,
      img: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591662/Projects/lvmjlijazntsmqpypjfg.png",
      head: "Spotify Replica",
      subHead: "HTML . CSS",
      descrip:
        "This project is a frontend clone of Spotify, showcasing HTML and CSS skills. It replicates key features such as header navigation, sidebar menu, and playlist display. Ideal for demonstrating proficiency in web design and UI replication.",
      github: "https://github.com/Gandhiprajwal/Spotify-Clone",
      project: "https://gandhiprajwal.github.io/Spotify-Clone/",
    },
    project2: {
      id: 2,
      img: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591662/Projects/lymdnzsavbtox8ouv4zj.png",
      head: "Wanderlust",
      subHead: "EJS . Bootstrap . Node JS . Express JS . MongoDB",
      descrip:
        "The homestay website, like Airbnb, employs EJS and Bootstrap for the frontend, while Node.js and Express.js handle server-side operations. MongoDB stores session data, logins, property details, and customer reviews, facilitating efficient accommodation searches for travelers.",
      github: "https://github.com/Gandhiprajwal/Wanderlust",
      project: "https://wanderlust-project-694n.onrender.com/listings",
    },
    project3: {
      id: 3,
      img: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707592373/Projects/jziicuhkcqzilsnp8euk.png",
      head: "Coming Soon!",
      subHead: "React . Express JS . Node JS . MongoDB (MERN Stack)",
      descrip:
        "Embark on a mysterious journey through a chatting website crafted with the MERN (MongoDB, Express.js, React.js, Node.js) tech stack. Engage with friends and colleagues in a captivating world of connection and intrigue.",
      github: "https://github.com/",
      project: "",
      disabled: true,
    },
  };
  return (
    <>
      <div className="recentWork-container" ref={work}>
        <h1 id="recent-work">Projects:</h1>
        {Object.values(data).map((project) => (
          <Work key={project.id} data={project} work={work} />
        ))}
      </div>
    </>
  );
}
