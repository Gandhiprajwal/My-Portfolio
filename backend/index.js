if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'dist')));

// Define a catch-all route that serves index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// app.get("/", (req, res) => {
//   res.send("Home");
// });

app.post("/api/send-email", (req, res) => {
  const { name, email, subject, description } = req.body;
  console.log(req.body);
  const mailOptions = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: `New Contact Form Submission For ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${description}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // console.error(error);
      res.status(500).send("Error sending email");
    } else {
      // console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
