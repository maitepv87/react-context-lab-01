import { useState } from "react";
import { Dropdown } from "./components/Dropdown";

function App() {
  const [selection, setSelection] = useState(null);

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <div>
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelect}
      />
    </div>
  );
}

export default App;
