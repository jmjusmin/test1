import { useEffect } from "react";
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

  /* 3. Render a fourth Counter component and ensure it's value is updated independently from the others. */
  data.push({ id: 4, value: 0 });

  const [total, setTotal] = useState(0);
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    setNewArr(data);
  }, []);

  //1.Update the Counter component to take onIncrement and onDecrement callbacks as props and ensure they update the counter's values independently. Each callback should take a single, integer value as a parameter which is the amount to increment the counter's existing value by.

  // const onDecrement = (id, value) => {
  //   newArr.map((item) => {
  //     if (item.id === id) item.value += value;
  //   });
  //   setTotal(total + value);
  // };
  // const onIncrement = (id, value) => {
  //   newArr.map((item) => {
  //     if (item.id === id) item.value += value;
  //   });
  //   setTotal(total + value);
  // };

  //5. Make a copy of the Counter component, saving the original so you're instructor can view it later. Then do the following :
  //remove the onIncrement and onDecrement props from the (new) Counter component
  //add a single onChange callback prop that takes a single integer parameter — the new value for the counter.
  //Ensure all Counter components still update and function independently after this change.
  const onChange = (id, updatedValue) => {
    newArr.map((item) => {
      if (item.id === id) item.value += updatedValue;
    });
    setTotal(total + updatedValue);
  };
  return (
    <div className="App">
      <h1>Test</h1>
      {newArr.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          value={counter.value}
          // onDecrement={onDecrement}
          // onIncrement={onIncrement}
          onChange={onChange}
        />
      ))}

      {/* 4. Create a Total component, which should display below the Counter components and always display the running total of all the Counter values. */}
      <Total total={total} />
    </div>
  );
}

export default App;
