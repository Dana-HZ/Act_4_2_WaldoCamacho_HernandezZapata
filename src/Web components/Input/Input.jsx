import "./Input.css";

function Input({
  label = "Nombre del campo",
  placeholder = "Escribe algo",
  variant = "default"
}) {

  const isSelect = variant === "select";

  return (
    <div className="input-container">

      <label className={`input-label input-label--${variant}`}>
        {label}
      </label>

      <div className="input-wrapper">

        <input
          type="text"
          placeholder={placeholder}
          className={`input-field input-field--${variant}`}
        />

        {isSelect && (
          <span className="input-arrow">
            ▼
          </span>
        )}

      </div>

    </div>
  );
}

export default Input;