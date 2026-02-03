import { useEffect, useState } from "react";
import "./boot.scss";

const BootScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState("welcome");
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // 🔹 Welcome → Boot
  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 1000);
    const t2 = setTimeout(() => {
      setPhase("boot");
      setFadeOut(false);
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // 🔹 Loading progress
  useEffect(() => {
    if (phase !== "boot") return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600); // smooth exit
          return 100;
        }
        return prev + 4;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className={`boot-screen ${fadeOut ? "fade-out" : ""}`}>
      {phase === "welcome" && (
        <div className="welcome">
          <h1>Welcome</h1>
        </div>
      )}

      {phase === "boot" && (
        <div className="boot">
          <img src="/doc-icons/applelogo.svg" className="logo" />
          <h2>Kunal Raikwar</h2>
          <p>MERN Stack Developer</p>

          <div className="loader">
            <div className="bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BootScreen;
