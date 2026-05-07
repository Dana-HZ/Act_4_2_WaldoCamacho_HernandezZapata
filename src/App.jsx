import Button from "./Web components/Button/Button";

function App() {
  return (
    <div style={{ padding: "40px", display: "flex", gap: "20px" }}>

      <Button variant="primary" />

      <Button variant="danger" />

      <Button variant="warning" />

      <Button variant="success" />

      <Button variant="disabled" />

    </div>
  );
}

export default App;