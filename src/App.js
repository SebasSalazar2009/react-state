import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setfirstName] = useState("manny");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const loginLogout = () => setisLoggedIn(!isLoggedIn);

  return (
    <div className="App">
      <header className="App-header">
        <h1>You clicked the button {count} times.</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(0)}>RESET</button>
        <button onClick={() => setCount(count ? count - 1 : 0)}>-</button>

        <h2>Welcome {isLoggedIn ? firstName : "Guest"}</h2>
        <button onClick={loginLogout}>{isLoggedIn ? "Logout" : "Login"}</button>

        <section>
          <h2>Hello {firstName}</h2>
        </section>
      </header>
    </div>
  );
}

export default App;
