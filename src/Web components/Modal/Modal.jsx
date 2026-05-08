import "./Modal.css";

import RoundedButton from "../RoundedButton/RoundedButton";
import Button from "../Button/Button";

function Modal({
  title = "Titulo",
  subtitle = "subtitulo",
  children
}) {

  return (

    <div className="modal">

      {/* HEADER */}

      <div className="modal-header">

        <div className="modal-text">

          <h2 className="modal-title">
            {title}
          </h2>

          <p className="modal-subtitle">
            {subtitle}
          </p>

        </div>


        <RoundedButton text="X" />

      </div>


      {/* CONTENT */}

      <div className="modal-content">

        {children}

      </div>


      {/* FOOTER */}

      <div className="modal-footer">

        <button className="modal-cancel-button">
          Cancelar
        </button>

        <Button
          text="Guardar"
          variant="primary"
        />

      </div>

    </div>

  );

}

export default Modal;