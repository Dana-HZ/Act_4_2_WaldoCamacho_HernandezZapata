import "./Cell.css";

function Cell({
  variant = "content"
}) {

  return (
    <div className={`cell cell-${variant}`}>
      Valor de la celda
    </div>
  );

}

export default Cell;