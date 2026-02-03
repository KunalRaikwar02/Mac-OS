import React, { useState } from "react";
import "./nav.scss";
import DateTime from "./DateTime";

const Nav = ({ setWallpaper }) => {
  const [showWallpapers, setShowWallpapers] = useState(false);

  const wallpapers = [
    "/wallpaper1.jpg",
    "/wallpaper2.jpg",
    "/wallpaper3.jpg",
    "/wallpaper4.jpg",
    "/wallpaper5.jpg",
    "/wallpaper6.jpg"
  ];

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <>
      <nav>
        <div className="left">
          <div className="apple-icon">
            <img src="./navbar-icons/apple.svg" alt="" />
          </div>

          <div className="nav-item"><p>Kunal Raikwar</p></div>
          <div className="nav-item"><p>File</p></div>
          <div className="nav-item"><p>Edit</p></div>
          <div className="nav-item"><p>View</p></div>
          <div className="nav-item"><p>Window</p></div>
          <div className="nav-item"><p>Terminal</p></div>
          <div className="nav-item"><p>Help</p></div>
        </div>

        <div className="right">
          <div className="nav-btn icon-batt">
            <img src="./navbar-icons/brightness.svg" alt="" />
          </div>

          <div className="nav-btn icon-batt">
            <img src="./navbar-icons/playcircle.svg" alt="" />
          </div>

          <div className="nav-btn icon-batt">
            <img src="./navbar-icons/battery.svg" alt="" title="53%"/>
          </div>

          <div className="nav-btn nav-icon">
            <img src="./navbar-icons/wifi.svg" alt="" title="wifi"/>
          </div>

          <div className="nav-btn icon-blue">
            <img src="./navbar-icons/bluetooth.svg" alt="" title="Bluetooth"/>
          </div>

          <div className="nav-btn nav-fullscreen" onClick={toggleFullScreen}>
            <img src="./navbar-icons/fullscreen.svg" alt="" title="FullScreen"/>
          </div>

          <div
            className="nav-btn nav-wallpaper"
            onClick={() => setShowWallpapers(!showWallpapers)}
          >
            <img src="./navbar-icons/gallery.svg" alt="" title="Wallpaper"/>
          </div>

          <div className="nav-item">
            <DateTime />
          </div>
        </div>
      </nav>

      {showWallpapers && (
        <div className="wallpaper-panel">
          {wallpapers.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => {
                setWallpaper(img);
                setShowWallpapers(false);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Nav;
