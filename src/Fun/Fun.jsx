import ShowImg from "./ShowImg";
import Nav from "../Nav.jsx";
import Footer from "../Footer.jsx";
import "./Fun.css";

export default function Fun() {
  let images = {
    // img1: {
    //   id: 1,
    //   link: "/images/Fun/img1.jpg",
    // },
    // img2: {
    //   id: 2,
    //   link: "/images/Fun/img2.heic",
    // },
    img3: {
      id: 3,
      link: "/images/Fun/img3.jpg",
    },
    img4: {
      id: 4,
      link: "/images/Fun/img4.jpg",
    },
    img5: {
      id: 5,
      link: "/images/Fun/img5.jpg",
    },
    img6: {
      id: 6,
      link: "/images/Fun/img6.jpg",
    },
    img8: {
      id: 8,
      link: "/images/Fun/img8.jpg",
    },
    img9: {
      id: 9,
      link: "/images/Fun/img9.jpg",
    },
    img10: {
      id: 10,
      link: "/images/Fun/img10.jpg",
    },
    img11: {
      id: 11,
      link: "/images/asset0.png",
    },
    project2: {
      id: 12,
      link: "/images/asset0.png",
    },
    project3: {
      id: 13,
      link: "/images/asset0.png",
    },
    img12: {
      id: 11,
      link: "/images/asset0.png",
    },
    project4: {
      id: 12,
      link: "/images/asset0.png",
    },
    project5: {
      id: 13,
      link: "/images/asset0.png",
    },
    img121: {
      id: 11,
      link: "/images/asset0.png",
    },
    project41: {
      id: 12,
      link: "/images/asset0.png",
    },
    project51: {
      id: 13,
      link: "/images/asset0.png",
    },
    img1211: {
      id: 11,
      link: "/images/asset0.png",
    },
    project411: {
      id: 12,
      link: "/images/asset0.png",
    },
    project511: {
      id: 13,
      link: "/images/asset0.png",
    },
    project5111: {
      id: 13,
      link: "/images/asset0.png",
    },
    img12111: {
      id: 11,
      link: "/images/asset0.png",
    },
    project4111: {
      id: 12,
      link: "/images/asset0.png",
    },
    project51111: {
      id: 13,
      link: "/images/asset0.png",
    },
    img1211111: {
      id: 11,
      link: "/images/asset0.png",
    },
    project411111: {
      id: 12,
      link: "/images/asset0.png",
    },
    project511111: {
      id: 13,
      link: "/images/asset0.png",
    },
  };
  return (
    <>
      <div className="bg-container">
        <Nav />
        <h1 id="fun-head">
          Here are some <span id="quoteFun-1">illustration</span> and
          photography work I do in my free time and during the travelling!✌️
        </h1>
        <div className="fun-container">
          {Object.values(images).map((project) => (
            <ShowImg key={project.id} data={project} />
          ))}
        </div>
        <hr id="line-hr" />
        <Footer />
      </div>
    </>
  );
}
