import "./Button.css";

function Button({
  text = "Texto",
  variant = "primary"
}) {
  return (
    <button className={`button button--${variant}`}>
      {text}
    </button>
  );
}

export default Button;