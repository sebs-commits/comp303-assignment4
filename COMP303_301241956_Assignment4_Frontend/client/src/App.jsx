import "./App.css";
import NavBar from "./components/NavBar";
import StaffTable from "./components/StaffTable";
import StaffDetailPage from "./pages/StaffDetailPage";
import StaffCreateForm from "./components/StaffCreateForm";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/UserRegistrationForm";

function App() {
  return (
    <>
      {/* BrowserRouter */}
      <BrowserRouter>
        <div className="container mx-auto p-4">
          <NavBar />
          <Routes>
            {/* Staff details page */}
            <Route path="/staff/:staffId" element={<StaffDetailPage />} />
            {/* Home page */}
            <Route index element={<StaffTable />} />
            <Route path="/create" element={<StaffCreateForm />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
