import { useState } from "react";
import "../About/ContactForm.css";
import { BsSendArrowUpFill } from "react-icons/bs";
import { GrContact } from "react-icons/gr";

export default function ContactForm() {
  let [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  let name, info;
  let handleInput = (e) => {
    name = e.target.name;
    info = e.target.value;

    setData((currData) => {
      return { ...currData, [name]: info };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <div className="contactForm-cont">
        <h1>
          Get in touch <GrContact />
        </h1>
        <div className="cnt-form">
          <form action="/api/send-email" method="POST" onSubmit={handleSubmit}>
            <div className="nameEmail-cont">
              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  id="name"
                  onChange={handleInput}
                  value={data.name}
                  required
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  id="email"
                  onChange={handleInput}
                  value={data.email}
                  required
                />
              </div>
            </div>
            <div className="subject">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="enter subject"
                id="subject"
                onChange={handleInput}
                value={data.subject}
                required
              />
            </div>
            <div className="desc">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                onChange={handleInput}
                value={data.description}
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
