import { useEffect, useState } from "react";
import "./app.scss";

import BootScreen from "./components/BootScreen";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";

function App() {
  const [booting, setBooting] = useState(true);
  const [reveal, setReveal] = useState(false);

  // ✅ DEFAULT WALLPAPER (boot ke baad direct show hoga)
  const [wallpaper, setWallpaper] = useState("/wallpaper1.jpg");

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <>
      {booting && (
        <BootScreen
          onComplete={() => {
            setBooting(false);
            setTimeout(() => setReveal(true), 50);
          }}
        />
      )}

      {!booting && (
        <main
          className={`desktop ${reveal ? "show" : ""}`}
          style={{
            backgroundImage: `url(${wallpaper})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            transition: "background-image 0.4s ease",
          }}
        >
          {/* ✅ setWallpaper pass karo */}
          <Nav setWallpaper={setWallpaper} />

          <Dock
            windowsState={windowsState}
            setWindowsState={setWindowsState}
          />

          {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
          {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
          {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
          {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
          {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
        </main>
      )}
    </>
  );
}

export default App;
