import "./App.css";
import Intro from "./Intro";
import RecentWork from "./RecentWork";
import Footer from "./Footer";
import { useRef } from "react";

function App() {
  const work = useRef();
  return (
    <>
      <div className="container">
        <Intro work={work} />
        <RecentWork work={work}/>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
