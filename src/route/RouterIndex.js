import { Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import SignUp from "../components/signup/SignUp";
import HomePage from "../components/dashboard/HomePage";
import AdDetailPage from "../components/dashboard/AdDetailPage";
import ProfileIndex from "../components/profile/ProfileIndex";

export default function RouterIndex() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/adDetailpage" element={<AdDetailPage />} />
      <Route path="/profile" element={<ProfileIndex />} />
    </Routes>
  );
}
