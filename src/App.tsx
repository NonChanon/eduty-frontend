import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import DataResult from "./pages/DataResult";
import Login from "./pages/Login";
import DetailCorrection from "./pages/DetailCorrection";
import InvoicePayment from "./pages/InvoicePayment";
import ReceiptAS9 from "./pages/ReceiptAS9";
import ReceiptAS9Detail from "./pages/ReceiptAS9Detail";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<DataResult />} />
        <Route path="/" element={<Navigate replace={true} to="/home" />} />
        <Route path="/:lotName/detail" element={<DetailCorrection />} />
        <Route path="/invoice" element={<InvoicePayment />} />
        <Route path="/receipt" element={<ReceiptAS9 />} />
        <Route path="/receipt/:lotName/detail" element={<ReceiptAS9Detail />} />
      </Routes>
    </>
  );
}
