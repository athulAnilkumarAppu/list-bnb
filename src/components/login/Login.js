import { useEffect, useState } from "react";

import signupImage from "../../assets/signup.jpg";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../../services/LoginServices";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [authenicated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (authenicated) {
      navigate("/homepage");
    }
  }, [authenicated]);

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSignInClick = () => {
    localStorage.clear("token");
    navigate("/register");
  };

  const onLoginClick = () => {
    LoginService(username, password, setAuthenticated);
  };

  const onPostYourAdClick = () => {
    navigate("/profile");
  };

  const onRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="page">
      <header className="header">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-actions">
          <span className="header-signin" onClick={() => onSignInClick()}>
            Sign In
          </span>
          <button className="header-postad" onClick={() => onPostYourAdClick()}>
            Post Your Ad
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.79102 9.15626C9.66341 9.04688 9.59961 8.90105 9.59961 8.71876C9.59961 8.53647 9.66341 8.38152 9.79102 8.25391L12.3887 5.65626H1.28711C0.886068 5.6198 0.667318 5.39194 0.630859 4.97266C0.667318 4.58985 0.886068 4.38022 1.28711 4.34376H12.3887L9.79102 1.7461C9.53581 1.43621 9.53581 1.12631 9.79102 0.816415C10.1009 0.561207 10.4108 0.561207 10.7207 0.816415L14.4395 4.53516C14.6947 4.84506 14.6947 5.15496 14.4395 5.46485L10.7207 9.1836C10.4108 9.43881 10.1009 9.4297 9.79102 9.15626Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="login-wrapper">
        <div className="login-form">
          <img src={logo} alt="Logo" className="form-logo" />
          <p className="form-description">
            Listbnb, a Largest Classified Listing Marketplace, offers perfect
            ads classifieds...
          </p>
          <h2 className="form-title">Login To Your Account</h2>

          <label className="input-label">Username</label>
          <input
            type="text"
            className="input-field"
            placeholder="Type here"
            onChange={(e) => onUsernameChange(e)}
          />

          <label className="input-label">Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="Type here"
            onChange={(e) => onPasswordChange(e)}
            s
          />

          <button className="form-login-btn" onClick={() => onLoginClick()}>
            Login
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.79102 9.15626C9.66341 9.04688 9.59961 8.90105 9.59961 8.71876C9.59961 8.53647 9.66341 8.38152 9.79102 8.25391L12.3887 5.65626H1.28711C0.886068 5.6198 0.667318 5.39194 0.630859 4.97266C0.667318 4.58985 0.886068 4.38022 1.28711 4.34376H12.3887L9.79102 1.7461C9.53581 1.43621 9.53581 1.12631 9.79102 0.816415C10.1009 0.561207 10.4108 0.561207 10.7207 0.816415L14.4395 4.53516C14.6947 4.84506 14.6947 5.15496 14.4395 5.46485L10.7207 9.1836C10.4108 9.43881 10.1009 9.4297 9.79102 9.15626Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="register-panel">
          <img src={signupImage} alt="Sign up" className="register-image" />
          <h3 className="register-title">Don’t Have an Account?</h3>
          <p className="register-text">
            Please register for a new account if you don't have one already.
          </p>
          <button className="register-btn" onClick={() => onRegisterClick()}>
            Register
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.79102 9.15626C9.66341 9.04688 9.59961 8.90105 9.59961 8.71876C9.59961 8.53647 9.66341 8.38152 9.79102 8.25391L12.3887 5.65626H1.28711C0.886068 5.6198 0.667318 5.39194 0.630859 4.97266C0.667318 4.58985 0.886068 4.38022 1.28711 4.34376H12.3887L9.79102 1.7461C9.53581 1.43621 9.53581 1.12631 9.79102 0.816415C10.1009 0.561207 10.4108 0.561207 10.7207 0.816415L14.4395 4.53516C14.6947 4.84506 14.6947 5.15496 14.4395 5.46485L10.7207 9.1836C10.4108 9.43881 10.1009 9.4297 9.79102 9.15626Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
