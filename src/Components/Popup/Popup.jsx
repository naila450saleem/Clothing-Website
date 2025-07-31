import React, { useState } from "react";
import "./Popup.css";

const Popup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="popup">
      <button className="close-btn" onClick={() => setVisible(false)}>×</button>
      <h4>Best Choice for Creatives</h4>
      <h2>This Pop-up Is Included in the Theme</h2>
      <button className="popup-btn">Purchase Reprizo</button>
    </div>
  );
};

export default Popup;
