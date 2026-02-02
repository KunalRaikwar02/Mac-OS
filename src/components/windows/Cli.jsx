import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";


const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        `Hi, I am Kunal Raikwar 👋
A passionate Full Stack Developer (MERN) and fresher.
I love building modern, responsive web applications using JavaScript and React.
Currently pursuing BCA and actively looking for opportunities.`,
    },

    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () =>
        `Frontend: React, JavaScript, HTML, CSS, SCSS, Tailwind, CSS 
     Backend: Node.js, Express.js 
     Database: MongoDB
     Tools: Git & GitHub, Vercel, Postman`,
    },

    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. Productivity Dashboard | HTML, CSS, JavaScript

2. Responsive Front Page UI | HTML, SCSS

3. Responsive Front Page UI | HTML, SCSS

4. E-commerce UI | HTML, SCSS`,
    },

    experience: {
      description: "Display experience",
      usage: "experience",
      fn: () => `Fresher / Entry-Level Developer

- Strong hands-on practice with MERN stack
- Built multiple personal & practice projects
- Good understanding of frontend fundamentals
- Familiar with real-world tools & workflows`,
    },

    education: {
      description: "Educational background",
      usage: "education",
      fn: () => `BCA (Bachelor of Computer Applications)
Babu Banarasi Das University, Lucknow
Duration: 2023 - 2026`,
    },

    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `Name: Kunal Raikwar
Location: Lucknow, India
Status: Open to Opportunities`,
    },

    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/KunalRaikwar02", "_blank");
        return "Opening GitHub profile...";
      },
    },

    resume: {
      description: "Download resume",
      usage: "resume",
      fn: () => "Resume download coming soon...",
    },

    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to Kunal's Portfolio CLI   ║
╚════════════════════════════════════════╝

Hello 👋 I'm Kunal Raikwar,
A Full Stack MERN Developer & BCA student from Lucknow.

Type 'help' to see all available commands.
Try:
 • about
 • skills
 • projects
 • education
 • experience
 • contact

Happy coding! 🚀
`;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"KunalRaikwar:~$"}
          promptLabelStyle={{ color: "#00ff00" }}

        />
      </div>
    </MacWindow>
  );
};

export default Cli;
