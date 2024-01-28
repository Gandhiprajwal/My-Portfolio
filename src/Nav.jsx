import "./Nav.css";

function Nav({ work }) {
  const scrollHandler = (eleRef) => {
    console.log(eleRef);
    window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });
  };
  return (
    <div className="nav-container">
      <nav className="Nav">
        <span>
          <a href="/">Home</a>
        </span>
        <span>
          <a onClick={() => scrollHandler(work)} href="#">
            Works
          </a>
        </span>
        <span>
          <a href="/about">About</a>
        </span>
        <span>
          <a href="/resume">Resume</a>
        </span>
        <span>
          <a href="/fun">Fun</a>
        </span>
      </nav>
    </div>
  );
}

export default Nav;
