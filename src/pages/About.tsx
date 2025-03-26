import React from "react";
import "./About.css"; // ✅ Ensure this file is linked correctly

const teamMembers = [
  {
    name: "Shaswat Mishra",
    email: "shaswatmishra5533@gmail.com",
    degree: "B.E in CSE-Artificial Intelligence",
    imagePath: "src/data/ascets/Shaswat Image.jpg",
  },
  {
    name: "Mohamed Junaid",
    email: "Mdjunaid59946@gmail.com",
    degree: "B.E in CSE-Artificial Intelligence",
    imagePath: "src/data/ascets/Junaid Image.jpg",
  },
  {
    name: "Prashanth A N",
    email: "prashanth3792@gmail.com",
    degree: "B.E in Information Science & Engineering",
    imagePath: "src/data/ascets/Prashanth image.jpg",
  },

  {
    name: "Allenki Sai Harini",
    email: "hariradhi2006@gmail.com",
    degree: "B.E in CSE-Artificial Intelligence",
    imagePath: "src/data/ascets/girl image.jpg",
  },
];

const About = () => {
  const handleLearnMore = () => {
    alert("Thanks for your interest! More content is coming soon.");
  };

  return (
    <div className="overlay">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
        Welcome to an AI-powered smart healthcare platform dedicated to transforming the way people access medical guidance and support. Our mission is to leverage artificial intelligence, data-driven insights, and innovative technology to provide fast, accurate, and accessible healthcare assistance.
        </p>
        <br />
        <p>
        We believe that healthcare should be intelligent, efficient, and available to everyone at their fingertips. By integrating AI with medical expertise, we aim to assist individuals in identifying potential health conditions, understanding symptoms, and receiving personalized recommendations—all from the comfort of their homes.
        </p>
        <br /><br />
        <h2>Our Story:</h2>
        <br />
        <p>
        Our platform covers 26 different diseases, including:

Common illnesses – Fever, common cold, cough, headache, back pain, etc.

Chronic conditions – Tuberculosis, insomnia, skin diseases, and more.

For each condition, we provide:
✅ Symptoms analysis – Understand your health condition based on reported symptoms.
✅ Precautionary measures – Immediate steps to manage and prevent worsening conditions.
✅ Medication guidance – General medicine suggestions for relief.
✅ Hospital locator – Find the nearest hospital using direct Google Maps integration.
        </p>
        <br /><br />
        <h2>Our Mission:</h2>
        <br />
        <p>
        At AI Powered smart Healthcare System, we strive to bridge the gap between technology and healthcare by making AI-driven medical assistance accessible to all. Our goal is to empower individuals with knowledge, help them make informed health decisions, and connect them to the right medical support when needed.
        </p>
        <br />
        <button onClick={handleLearnMore}>Learn More</button>
      </div>

      {/* Team Section */}
      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.imagePath} alt={member.name} />
            <div>
              <h3>{member.name}</h3>
              <p className="email">{member.email}</p>
              <p>{member.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
