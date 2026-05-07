import "./RoundedButton.css";

function RoundedButton({
  text = "X",
  variant = "selected"
}) {
  return (
    <button className={`rounded-button rounded-button--${variant}`}>
      {text}
    </button>
  );
}

export default RoundedButton;