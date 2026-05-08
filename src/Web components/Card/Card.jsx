import "./Card.css";

import { useState } from "react";

function Card({
  name = "Juanito",
  enrollment = "123456"
}) {

  const [selectedStatus, setSelectedStatus] = useState("");

  return (

    <div className="card">

      {/* LEFT */}

      <div className="card-info">

        <p className="card-name">
          {name}
        </p>


        <div className="card-enrollment">

          <span className="card-enrollment-label">
            Matrícula:
          </span>

          <span className="card-enrollment-number">
            {enrollment}
          </span>

        </div>

      </div>


      {/* RIGHT */}

      <div className="card-buttons">

        {/* PRESENT */}

        <button
          className={
            selectedStatus === "present"
              ? "card-button card-button--present-active"
              : "card-button"
          }

          onClick={() =>
            setSelectedStatus("present")
          }
        >
          Presente
        </button>


        {/* LATE */}

        <button
          className={
            selectedStatus === "late"
              ? "card-button card-button--late-active"
              : "card-button"
          }

          onClick={() =>
            setSelectedStatus("late")
          }
        >
          Retardo
        </button>


        {/* ABSENT */}

        <button
          className={
            selectedStatus === "absent"
              ? "card-button card-button--absent-active"
              : "card-button"
          }

          onClick={() =>
            setSelectedStatus("absent")
          }
        >
          Falta
        </button>

      </div>

    </div>

  );

}

export default Card;