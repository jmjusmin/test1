import { useState } from "react";
import Counter from "./Counter";
import Total from "./Total";

function App() {
  // state data for 3 counters
  const data = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ];

  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <h1>Test</h1>
      {data.map((counter) => (
        <Counter key={counter.id} id={counter.id} value={counter.value} />
      ))}
      <Counter id="4" value={4} />
      <Total total={total} />
    </div>
  );
}

export default App;
