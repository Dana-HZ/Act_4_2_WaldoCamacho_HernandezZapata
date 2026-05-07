import "./ProgressBar.css";

function ProgressBar({
  title = "Titulo de la barra",
  percentage = 20
}) {

  let variant = "";

  if (percentage < 50) {
    variant = "low";
  } else if (percentage === 50) {
    variant = "medium";
  } else {
    variant = "high";
  }

  return (
    <div className="progress-bar-container">

      <div className="progress-bar-header">

        <span className="progress-bar-title">
          {title}
        </span>

        <span className="progress-bar-percentage">
          {percentage}%
        </span>

      </div>

      <div className="progress-bar-background">

        <div
          className={`progress-bar-fill progress-bar-fill--${variant}`}
          style={{ width: `${percentage}%` }}
        ></div>

      </div>

    </div>
  );
}

export default ProgressBar;