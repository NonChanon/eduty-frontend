import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import DataResult from "./pages/DataResult";
import Login from "./pages/Login";
import DetailCorrection from "./pages/DetailCorrection";
import EditDetail from "./pages/EditDetail";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DataResult />} />
        <Route path="/detail" element={<DetailCorrection />} />
        <Route path="/edit" element={<EditDetail />} />
      </Routes>
    </>
  );
}
