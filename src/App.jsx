import Button from "./Web components/Button/Button";
import RoundedButton from "./Web components/RoundedButton/RoundedButton";
import ProgressBar from "./Web components/ProgressBar/ProgressBar";
import Input from "./Web components/Input/Input";
import Pill from "./Web components/Pill/Pill";
import StatsCard from "./Web components/StatsCard/StatsCard";
import Cell from "./Web components/Cell/Cell";
import SideBar from "./Web components/SideBar/SideBar";
import Card from "./Web components/Card/Card";
import Modal from "./Web components/Modal/Modal";


function App() {

  return (

    <div style={{ padding: "40px" }}>

      {/* BUTTONS */}

      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >

        <Button variant="primary" />

        <Button variant="danger" />

        <Button variant="warning" />

        <Button variant="success" />

        <Button variant="disabled" />

      </div>


      {/* ROUNDED BUTTONS */}

<div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "40px"
  }}
>

  <RoundedButton />

  <RoundedButton />


</div>


      {/* PROGRESS BARS */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "40px"
        }}
      >

        <ProgressBar percentage={80} />

        <ProgressBar percentage={50} />

        <ProgressBar percentage={20} />

      </div>


      {/* INPUTS */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "40px"
        }}
      >

        <Input variant="default" />

        <Input variant="selected" />

        <Input variant="select" />

        <Input variant="invalid" />

        <Input variant="success" />

      </div>


      {/* PILLS */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >

        <Pill variant="blue" />

        <Pill variant="green" />

        <Pill variant="red" />

        <Pill variant="yellow" />

      </div>


      {/* STATS CARDS */}

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "40px"
        }}
      >

        <StatsCard />

        <StatsCard variant="blue" />

      </div>


      {/* CELLS */}

<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "40px"
  }}
>

  <Cell variant="header" />

  <Cell variant="content" />

  <Cell variant="zebra" />


</div>

{/* SIDEBAR */}

<div
  style={{
    marginTop: "40px"
  }}
>

  <SideBar />

</div>

{/* CARDS */}

<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    marginTop: "40px"
  }}
>

  <Card status="present" />

  <Card status="late" />

  <Card status="absent" />

</div>


{/* MODAL */}

<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    marginTop: "40px"
  }}
>

  <Modal> </Modal>

  <Modal>

    <Card />

  </Modal>

</div>


    </div>

  );

}

export default App;