import clsx from "clsx";
import { useState } from "react";
import { ButtonPrimary } from "./components/ui/button/button-primary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={clsx("max-w-7xl", "border border-red-400 p-10")}>
        <h1>Blacksmith Simulator</h1>

        <p>{count}</p>
        <ButtonPrimary onClick={() => setCount(count + 1)}>
          Click me
        </ButtonPrimary>
      </div>
    </>
  );
}

export default App;
