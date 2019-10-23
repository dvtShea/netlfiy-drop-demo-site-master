import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      Hello from React!
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("app"));
