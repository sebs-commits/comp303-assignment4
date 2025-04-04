import "./App.css";
import NavBar from "./components/NavBar";
import StaffTable from "./components/StaffTable";
import StaffDetailPage from "./pages/StaffDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      {/* 4. Use BrowserRouter */}
      <BrowserRouter>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/staff" element={<StaffTable />} />
            <Route path="/staff/:staffId" element={<StaffDetailPage />} />
            <Route index element={<StaffTable />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
