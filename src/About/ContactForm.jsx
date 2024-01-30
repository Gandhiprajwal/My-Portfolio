import "../About/ContactForm.css";
import { BsSendArrowUpFill } from "react-icons/bs";
import { GrContact } from "react-icons/gr";

export default function ContactForm() {
  return (
    <>
      <div className="contactForm-cont">
        <h1>Contact me <GrContact /></h1>
        <div className="cnt-form">
          <form action="" method="POST">
            <div className="nameEmail-cont">
              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="enter your name"
                  id="name"
                  required
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="enter your email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="subject">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="enter subject"
                id="subject"
                required
              />
            </div>
            <div className="desc">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="75"
              ></textarea>
            </div>
            <button id="send-btn">
              <BsSendArrowUpFill /> Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
