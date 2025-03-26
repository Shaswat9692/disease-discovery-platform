const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password",
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "owner-email@gmail.com",
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) return res.status(500).json({ success: false, message: "Failed to send email" });
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
