import { Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import SignUp from "../components/signup/SignUp";

export default function RouterIndex() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/dashboard" element={<About />} /> */}
    </Routes>
  );
}
