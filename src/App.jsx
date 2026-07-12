import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgot_password";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Layout from "./components/layout";

const Dashboard = lazy(() => import("./components/dashboard"));
const MyFarm = lazy(() => import("./components/myfarm"));
const Weather = lazy(() => import("./components/weather"));
const Predictions = lazy(() => import("./components/predictions"));
const Alerts = lazy(() => import("./components/alerts"));
const Reports = lazy(() => import("./components/reports"));
const Settings = lazy(() => import("./components/settings"));

function RequireAuth({ user, children }) {
  return user ? children : <Navigate to="/login" replace />;
}

function DashboardShell({ user, children, onLogout }) {
  return (
    <div className="app-with-sidebar">
      <Sidebar onLogout={onLogout} />
      <Layout userName={user?.name || "Farmer"} userRole="Farm Manager">
        {children}
      </Layout>
    </div>
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("agrisense-user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("agrisense-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("agrisense-user");
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("agrisense-token");
    navigate("/");
  };

  const publicRoutes = ["/", "/login", "/signup", "/forgot-password"];
  const showNavbar = publicRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}

      <Suspense fallback={<div className="loading-state">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route
            path="/dashboard"
            element={
              <RequireAuth user={user}>
                <DashboardShell user={user} onLogout={handleLogout}>
                  <Dashboard />
                </DashboardShell>
              </RequireAuth>
            }
          />
          <Route
            path="/myfarm"
            element={
              <RequireAuth user={user}>
                <DashboardShell user={user} onLogout={handleLogout}>
                  <MyFarm />
                </DashboardShell>
              </RequireAuth>
            }
          />
          <Route
            path="/weather"
            element={
              <RequireAuth user={user}>
                <DashboardShell user={user} onLogout={handleLogout}>
                  <Weather />
                </DashboardShell>
              </RequireAuth>
            }
          />
          <Route
            path="/predictions"
            element={
              <RequireAuth user={user}>
                <DashboardShell user={user} onLogout={handleLogout}>
                  <Predictions />
                </DashboardShell>
              </RequireAuth>
            }
          />
          <Route
            path="/alerts"
            element={
              <RequireAuth user={user}>
                <DashboardShell user={user} onLogout={handleLogout}>
                  <Alerts />
                </DashboardShell>
              </RequireAuth>
            }
          />
          <Route
            path="/reports"
            element={
              <RequireAuth user={user}>
                <DashboardShell user={user} onLogout={handleLogout}>
                  <Reports />
                </DashboardShell>
              </RequireAuth>
            }
          />
          <Route
            path="/settings"
            element={
              <RequireAuth user={user}>
                <DashboardShell user={user} onLogout={handleLogout}>
                  <Settings />
                </DashboardShell>
              </RequireAuth>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
