import React from "react";
import ReactDOM from "react-dom";
import data from "./data";

function App() {
  return (
    <div>
      <h1>Курс валют</h1>
      <table>
        {data.map((el) => {
          return (
            <tr>
              <td>{el.cc}</td>
              <td>{el.rate}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("body"));

console.log(data[0].ccy);
