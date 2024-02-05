import { useState, useRef } from "react";

export default function Player() {

  const input = useRef();
  const [name,setName] = useState(null);

  function handleClick(){
    setName(input.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input ref={input} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
