// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";

function App1() {
  const [NumberId, setNumberId] = useState("");
  const [Data1, setData1] = useState(null);

  const fetchData = async () => {
    if (!["primes", "fibo", "even", "rand"].includes(NumberId)) {
      alert("Invalid number ID. Use prime, fibo, even, or rand.");
      return;
    }
    try {
      const response = await fetch(`http://localhost:9876/numbers/${NumberId}`);
      const result = await response.json();
      setData1(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>
        <input
          type="text"
          value={NumberId}
          onChange={(e) => setNumberId(e.target.value)}
          placeholder="Enter Id"
        />
        <button onClick={fetchData}>Fetch Numbers</button>
        {Data1 && (
          <div>
            <h2>Results</h2>
            <p>
              <strong>Previous Window State:</strong>{" "}
              {JSON.stringify(Data1?.windowPrevState)}
            </p>
            <p>
              <strong>Current Window State:</strong>{" "}
              {JSON.stringify(Data1?.windowCurrState)}
            </p>
            <p>
              <strong>Numbers:</strong> {JSON.stringify(Data1.numbers)}
            </p>
            <p>
              <strong>Average:</strong> {Data1?.avg}
            </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App1;
