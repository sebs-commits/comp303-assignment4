import "./App.css";
import NavBar from "./components/NavBar";
import StaffTable from "./components/StaffTable";
import StaffDetailPage from "./pages/StaffDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
