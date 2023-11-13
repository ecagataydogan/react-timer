import { useRef, useState } from "react";

export default function Player() {
  const input = useRef();
  const [playerName, setPlayerName] = useState("");

  function handlePlayerName() {
    setPlayerName(input.current.value);
    input.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={input} type="text" placeholder="Please enter a name" />
        <button onClick={handlePlayerName}>Set Name</button>
      </p>
    </section>
  );
}
