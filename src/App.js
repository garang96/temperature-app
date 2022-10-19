import React, { Component, useState } from "react";

const App = () => {
  const [temp, setTemp] = useState(0);

  const rise = () => {
    if (temp == 50) return;
    setTemp(temp + 1);
  };

  const drop = () => {
    if (temp == -20) return;
    setTemp(temp - 1);
  };

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    height: "60vh",
    margin: "auto",
    background: "#008cba",
    width: 350,
    borderRadius: 10,
  };

  const div3 = {
    width: 200,
    height: 200,
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="col text-center">
      <h1 style={{ margin: 20 }}>TEMPERATURE APP</h1>
      <div style={styles} className="main-div">
        <div style={div3} className="temp-value">
          <h3 style={{ color: "#fff" }}>{temp}°C</h3>
        </div>
        <div>
          <button
            style={{ margin: 20 }}
            className="btn btn-secondary btn-bg"
            onClick={rise}
          >
            +
          </button>
          <button
            style={{ margin: 20 }}
            className="btn btn-danger btn-bg"
            onClick={drop}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
