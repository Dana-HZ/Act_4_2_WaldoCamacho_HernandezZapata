import "./Pill.css";

function Pill({
  text = "Teórica",
  variant = "blue"
}) {
  return (
    <div className={`pill pill--${variant}`}>
      {text}
    </div>
  );
}

export default Pill;