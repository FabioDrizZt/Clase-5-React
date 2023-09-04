import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Componente Funcional vale: {counter}</h1>
      <button onClick={handleIncrement}>Incrementar de funcion</button>
      <button onClick={handleDecrement}>Decrementar de funcion</button>
    </div>
  );
};

export default Counter;
