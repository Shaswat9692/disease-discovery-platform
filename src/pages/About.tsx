import React from "react";
import "./About.css"; // ✅ Ensure this file is linked correctly

const teamMembers = [
  {
    name: "Monish.R",
    email: "monishr608@gmail.com",
    degree: "B.E in CSE-Artificial Intelligence",
    imagePath: "/images/monish.jpg",
  },
  {
    name: "Shaswat Mishra",
    email: "shaswatmishra5533@gmail.com",
    degree: "B.E in CSE-Artificial Intelligence",
    imagePath: "/images/Shaswat_MISHA_NASA.jpg",
  },
  {
    name: "Mohammed Junaid",
    email: "Mdjunaid59946@gmail.com",
    degree: "B.E in CSE-Artificial Intelligence",
    imagePath: "/images/junaid.jpg",
  },
  {
    name: "Prashanth A N",
    email: "prashanth3792@gmail.com",
    degree: "B.E in Information Science & Engineering",
    imagePath: "/images/prashanth.jpg",
  },
  {
    name: "Mourya",
    email: "mouryachittibabu@gmail.com",
    degree: "B.E in Information Science & Engineering",
    imagePath: "/images/Mourya.jpg",
  },
  {
    name: "Mohammed Shadab Saleem",
    email: "shadabsaleem207@gmail.com",
    degree: "B.E in Information Science & Engineering",
    imagePath: "/images/shadab.jpg",
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
          Welcome to Stardust Innovators, a dynamic team of explorers, engineers, scientists, and visionaries united by a shared passion for space, technology, and innovation. Our journey began with the simple idea that the future is something we create, not just something we wait for. That belief drives everything we do. At Stardust Innovators, we push boundaries, embrace new technologies, and tackle the challenges of tomorrow with creativity and collaboration.
        </p>
        <br />
        <p>
          We specialize in leveraging cutting-edge technologies such as artificial intelligence, robotics, data science, and sustainable engineering solutions. With each project, we aim to blend technical expertise with visionary thinking, always striving to develop impactful solutions that benefit both our planet and our universe.
        </p>
        <br /><br />
        <h2>Our Story:</h2>
        <br />
        <p>
          The seed of Stardust Innovators was planted when a group of like-minded individuals came together to explore the possibilities of space technology and advanced innovation. What started as curiosity grew into a passion for transforming ideas into tangible solutions. From our first project to where we are now, we've consistently pursued excellence, learning from every challenge and success along the way. Today, we are a multidisciplinary team contributing to space exploration, robotics, AI-driven solutions, and more.
        </p>
        <br /><br />
        <h2>Our Mission:</h2>
        <br />
        <p>
          The mission of Stardust Innovators is to push the boundaries of space and technological advancements by harnessing innovation, scientific research, and creative problem-solving. We believe in a future where space exploration is accessible to all and technological advancements drive sustainable progress for humanity.
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
