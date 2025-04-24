import { Routes, Route } from "react-router-dom";
import Login from "../components/login/Login";
import SignUp from "../components/signup/SignUp";
import HomePage from "../components/dashboard/HomePage";
import AdDetailPage from "../components/dashboard/AdDetailPage";
import ProfileIndex from "../components/profile/ProfileIndex";
import PrivateRoute from "../route/AuthChecker";

export default function RouterIndex() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route
        path="/homepage"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/adDetailpage"
        element={
          <PrivateRoute>
            <AdDetailPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfileIndex />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
