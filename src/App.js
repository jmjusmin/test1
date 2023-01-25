import { useState } from "react";
import Counter from "./Counter";
import Total from "./Total";

function App() {
  //2. Move the global data array to the component state for the App component.
  const data = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ];

  const [total, setTotal] = useState(0);

  const handleChange = (value) => {
    setTotal(total + value);
  };

  return (
    <div className="App">
      <h1>Test</h1>
      {data.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          value={counter.value}
          handleChange={handleChange}
        />
      ))}

      {/* 3. Render a fourth Counter component and ensure it's value is updated independently from the others. */}
      <Counter id={4} value={0} handleChange={handleChange} />

      {/* 4. Create a Total component, which should display below the Counter components and always display the running total of all the Counter values. */}
      <Total total={total} />
    </div>
  );
}

export default App;
