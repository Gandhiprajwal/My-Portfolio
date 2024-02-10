import ShowImg from "./ShowImg";
import Nav from "../Nav.jsx";
import Footer from "../Footer.jsx";
import "./Fun.css";

export default function Fun() {
  let images = {
    img1: {
      id: 1,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591133/Fun/zosguydstdfulpr7kyib.jpg",
    },
    img2: {
      id: 2,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591130/Fun/ayeslhae2b6by2mpsvio.jpg",
    },
    img3: {
      id: 3,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591130/Fun/nwgjensr6cbbnmhcv2hj.jpg",
    },
    img4: {
      id: 4,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591130/Fun/twxvoabbliizu6lyiqkb.jpg",
    },
    img5: {
      id: 5,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591129/Fun/g23rk6rwd4plcygwk9k1.jpg",
    },
    img6: {
      id: 6,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591129/Fun/xokkhzctgw9aplqpvoil.jpg",
    },
    // img7:{
    //   id:7,
    //   link:"https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591120/Fun/flwzjjty6lgelsxgcclg.heic",
    // },
    img8: {
      id: 8,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591129/Fun/xtiu1dzlee5s3qrlfqtn.jpg",
    },
    img9: {
      id: 9,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591129/Fun/ec37v7jrhpt5kg5yviqk.jpg",
    },
    img10: {
      id: 10,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591128/Fun/gh2tngnapbu4wngus22o.jpg",
    },
    img11: {
      id: 11,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591128/Fun/uq1lbuhabygj1pqq1pe7.jpg",
    },
    img12: {
      id: 12,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591127/Fun/wkvr2ywnc0s9c70ywhkv.jpg",
    },
    img13: {
      id: 13,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591127/Fun/ch9b6foxbnljyldywfpk.jpg",
    },
    img14: {
      id: 14,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591126/Fun/sevlgxfjjbucwhrf5dtj.jpg",
    },
    img15: {
      id: 15,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591126/Fun/wfsb1nkqmyydpjs6w8fw.jpg",
    },
    img16: {
      id: 16,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591125/Fun/hwapi3oleqex3pqahqdq.jpg",
    },
    img17: {
      id: 17,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591125/Fun/rcl542ceitbund63bdia.jpg",
    },
    img18: {
      id: 18,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591124/Fun/x3eoenoyqm9tclojexw9.jpg",
    },
    img19: {
      id: 19,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591123/Fun/rfgj0ierno127qrs5bcv.jpg",
    },
    img20: {
      id: 20,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591124/Fun/kczfkdueli8te5udx3bc.jpg",
    },
    img21: {
      id: 21,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591123/Fun/alkrtbpdti8fpbmzrzq7.jpg",
    },
    img22: {
      id: 22,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591123/Fun/siwcuidjl2racprec8ku.jpg",
    },
    img23: {
      id: 23,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591122/Fun/bcvakb5kt4xkyvmcfnnl.jpg",
    },
    img24: {
      id: 24,
      link: "https://res.cloudinary.com/dxok1pcjy/image/upload/v1707591120/Fun/ns24gpzfdxx7akmasyng.jpg",
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
        {/* <hr id="line-hr" /> */}
        <Footer />
      </div>
    </>
  );
}
