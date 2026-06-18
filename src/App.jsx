import { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Layout from "./components/layout";

function App() {
  const [page, setPage] = useState("home");

  let main;
  if (page === "login") main = <Login onNavigate={setPage} />;
  else if (page === "signup") main = <Signup onNavigate={setPage} />;
  else if (page === "dashboard") {
    main = (
      <div className="app-with-sidebar">
        <Sidebar page={page} onNavigate={setPage} />
        <Layout page={page} onNavigate={setPage}>
          <Dashboard onNavigate={setPage} />
        </Layout>
      </div>
    );
  } else main = <Home onNavigate={setPage} />;

  return (
    <>
      {page !== "dashboard" && <Navbar page={page} onNavigate={setPage} />}
      {main}
    </>
  );
}

export default App;
