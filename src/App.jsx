import { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  const [page, setPage] = useState("login");

  return page === "login" ? (
    <Login onNavigate={setPage} />
  ) : (
    <Signup onNavigate={setPage} />
  );
}

export default App;
