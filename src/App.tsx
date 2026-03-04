import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/calculos";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState({
    inversionInicial: 10000,
    inversionAnual: 1200,
    interes: 6,
    duracion: 10,
  });

  const inputIsValid = userInput.duracion >= 1;

  function handleChange(inputIdentifier: string, newValue: string) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const resultsData = inputIsValid
    ? calculateInvestmentResults(userInput)
    : [];

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Por favor, introduce una duración mayor a 0.</p>
      )}
      {inputIsValid && (
        <Results
          results={resultsData}
          inversionInicial={userInput.inversionInicial}
        />
      )}
    </>
  );
}

export default App;
