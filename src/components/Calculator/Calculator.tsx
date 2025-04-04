import { useState } from "react";
import "./Calculator.css";
import Button from "../Button/Button";

const CALCULATOR_NUMBERS = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "0",
  ".",
  "C",
];
const CALCULATOR_OPERATORS = ["/", "*", "-", "+", "="];

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        console.error(error);
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <div className="numbers">
          {CALCULATOR_NUMBERS.map((symbol, index) => (
            <Button symbol={symbol} handleClick={handleClick} key={index} />
          ))}
        </div>
        <div className="operators">
          {CALCULATOR_OPERATORS.map((symbol) => (
            <button
              key={symbol}
              className={symbol === "=" ? "equals" : ""}
              onClick={() => handleClick(symbol)}
            >
              {symbol}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
