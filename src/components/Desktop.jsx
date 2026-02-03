import Dock from "./Dock";
import Nav from "./Nav";
import Github from "./windows/Github";
import Note from "./windows/Note";
import Resume from "./windows/Resume";
import Spotify from "./windows/Spotify";
import Cli from "./windows/Cli";
import { useState } from "react";

const Desktop = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <main className="desktop">
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />

      {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
    </main>
  );
};

export default Desktop;
