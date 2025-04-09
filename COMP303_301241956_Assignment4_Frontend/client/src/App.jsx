import "./App.css";
import NavBar from "./components/NavBar";
import StaffDetailPage from "./pages/StaffDetailPage";
import StaffCreateForm from "./components/StaffCreateForm";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/UserRegistrationForm";
import { isAuthenticated, isManagement } from "./utils/AuthApi";
import UserCredentialPage from "./pages/UserCredentialPage";
import axios from "axios";

const savedCredentials = localStorage.getItem("authCredentials");
if (savedCredentials) {
  axios.defaults.headers.common["Authorization"] = `Basic ${savedCredentials}`;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto p-4">
          <NavBar />
          <Routes>
            {/* Public Routes */}
            {/* Login page accessible to all users */}
            <Route path="/login" element={<LoginForm />} />
            {/* Registration page accessible to all users */}
            <Route path="/register" element={<RegistrationForm />} />

            {/* Protected Routes */}
            {/* Staff detail page*/}
            <Route
              path="/staff/:staffId"
              element={
                isAuthenticated() ? (
                  isManagement() ? (
                    <StaffDetailPage />
                  ) : (
                    <Navigate to="/credentials" replace />
                  )
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            {/* Staff creation Form*/}
            <Route
              path="/create"
              element={
                isAuthenticated() ? (
                  isManagement() ? (
                    <StaffCreateForm />
                  ) : (
                    <Navigate to="/credentials" replace />
                  )
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            {/* Home page only accessible to MANAGEMENT*/}
            <Route
              index
              element={
                isAuthenticated() ? (
                  isManagement() ? (
                    <HomePage />
                  ) : (
                    <Navigate to="/credentials" replace />
                  )
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            {/* Direct to credentials if user is anything but management*/}
            <Route
              path="/credentials"
              element={
                isAuthenticated() ? (
                  <UserCredentialPage />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
