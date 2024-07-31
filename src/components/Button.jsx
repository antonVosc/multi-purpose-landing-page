import React from "react";
import "../styles/components/Button.scss";

function Button({ content, icon, color = "blue" }) {
  return (
    <button className={`button ${color}`}>
      {icon} {content}
    </button>
  );
}

export default Button;