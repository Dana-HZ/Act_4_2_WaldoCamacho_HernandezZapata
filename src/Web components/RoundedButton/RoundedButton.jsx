import "./RoundedButton.css";

import { useState } from "react";

function RoundedButton({
  text = "X"
}) {

  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {

    setIsSelected(!isSelected);

  }

  return (

    <button
      className={
        isSelected
          ? "rounded-button rounded-button--selected"
          : "rounded-button rounded-button--unselected"
      }

      onClick={handleClick}
    >
      {text}
    </button>

  );

}

export default RoundedButton;