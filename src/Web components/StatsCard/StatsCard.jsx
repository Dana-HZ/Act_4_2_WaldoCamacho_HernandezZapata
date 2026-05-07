import "./StatsCard.css";

function StatsCard({
  title = "Programadas",
  value = "35h",
  variant = "dark"
}) {
  return (
    <div className={`stats-card stats-card--${variant}`}>

      <p className={`stats-card-title stats-card-title--${variant}`}>
        {title}
      </p>

      <h2 className={`stats-card-value stats-card-value--${variant}`}>
        {value}
      </h2>

    </div>
  );
}

export default StatsCard;