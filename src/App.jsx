import { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  const [page, setPage] = useState("home");

  let main;
  if (page === "login") main = <Login onNavigate={setPage} />;
  else if (page === "signup") main = <Signup onNavigate={setPage} />;
  else main = <Home onNavigate={setPage} />;

  return (
    <>
      <Navbar onNavigate={setPage} />
      {main}
    </>
  );
}

export default App;
