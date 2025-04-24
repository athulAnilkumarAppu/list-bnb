import { useState } from "react";

import signupImage from "../../assets/signup.jpg";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSignInClick = () => {
    navigate("/register");
  };

  const onLoginClick = () => {
    navigate("/homepage");
  };

  const onPostYourAdClick = () => {};

  const onRegisterClick = () => {
    navigate("/register");
  };

  return (
    // <>
    //   <div className="login-header">
    //     <img src={logo} alt="logo" />

    //     <span onClick={() => onSignInClick()}>
    //       <svg
    //         width="13"
    //         height="14"
    //         viewBox="0 0 13 14"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M7.4375 8.3125H4.8125C3.44531 8.34896 2.3151 8.82292 1.42188 9.73438C0.510417 10.6276 0.0364583 11.7578 0 13.125C0 13.3802 0.0820312 13.5898 0.246094 13.7539C0.410156 13.918 0.619792 14 0.875 14H11.375C11.6302 14 11.8398 13.918 12.0039 13.7539C12.168 13.5898 12.25 13.3802 12.25 13.125C12.2135 11.7578 11.7396 10.6276 10.8281 9.73438C9.9349 8.82292 8.80469 8.34896 7.4375 8.3125ZM1.33984 12.6875C1.46745 11.8125 1.85026 11.0833 2.48828 10.5C3.1263 9.9349 3.90104 9.64323 4.8125 9.625H7.4375C8.34896 9.64323 9.1237 9.9349 9.76172 10.5C10.3997 11.0833 10.7826 11.8125 10.9102 12.6875H1.33984ZM6.125 7C7.10938 6.98177 7.9388 6.64453 8.61328 5.98828C9.26953 5.3138 9.60677 4.48438 9.625 3.5C9.60677 2.51562 9.26953 1.6862 8.61328 1.01172C7.9388 0.355469 7.10938 0.0182295 6.125 0C5.14062 0.0182295 4.3112 0.355469 3.63672 1.01172C2.98047 1.6862 2.64323 2.51562 2.625 3.5C2.64323 4.48438 2.98047 5.3138 3.63672 5.98828C4.3112 6.64453 5.14062 6.98177 6.125 7ZM6.125 1.3125C6.74479 1.33073 7.26432 1.54036 7.68359 1.94141C8.08464 2.36068 8.29427 2.88021 8.3125 3.5C8.29427 4.11979 8.08464 4.63932 7.68359 5.05859C7.26432 5.45964 6.74479 5.66927 6.125 5.6875C5.50521 5.66927 4.98568 5.45964 4.56641 5.05859C4.16536 4.63932 3.95573 4.11979 3.9375 3.5C3.95573 2.88021 4.16536 2.36068 4.56641 1.94141C4.98568 1.54036 5.50521 1.33073 6.125 1.3125Z"
    //           fill="#212121"
    //           fill-opacity="0.3"
    //         />
    //       </svg>
    //       Sign In
    //     </span>

    //     <button
    //       onClick={() => onPostYourAdClick()}
    //       className="post-your-ad-btn"
    //     >
    //       Post Your Ad{" "}
    //       <svg
    //         width="15"
    //         height="10"
    //         viewBox="0 0 15 10"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M9.79102 9.15626C9.66341 9.04688 9.59961 8.90105 9.59961 8.71876C9.59961 8.53647 9.66341 8.38152 9.79102 8.25391L12.3887 5.65626H1.28711C0.886068 5.6198 0.667318 5.39194 0.630859 4.97266C0.667318 4.58985 0.886068 4.38022 1.28711 4.34376H12.3887L9.79102 1.7461C9.53581 1.43621 9.53581 1.12631 9.79102 0.816415C10.1009 0.561207 10.4108 0.561207 10.7207 0.816415L14.4395 4.53516C14.6947 4.84506 14.6947 5.15496 14.4395 5.46485L10.7207 9.1836C10.4108 9.43881 10.1009 9.4297 9.79102 9.15626Z"
    //           fill="white"
    //         />
    //       </svg>
    //     </button>
    //   </div>

    //   <div className="login-box">
    //     <img src={logo} alt="logo" />
    //     <p>
    //       Listbnb a Largest Classified Listing Marketplace offers perfect Ads
    //       classifieds...
    //     </p>
    //     <h3>Login To Your Account</h3>
    //     <label>Username</label>
    //     <input
    //       type="text"
    //       value={username}
    //       onChange={(e) => onUsernameChange(e)}
    //       placeholder="Type here"
    //     />

    //     <label>Password</label>
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => onPasswordChange(e)}
    //       placeholder="Type here"
    //     />

    //     <button onClick={() => onLoginClick()}>
    //       Login{" "}
    //       <svg
    //         width="15"
    //         height="10"
    //         viewBox="0 0 15 10"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M9.79102 9.15626C9.66341 9.04688 9.59961 8.90105 9.59961 8.71876C9.59961 8.53647 9.66341 8.38152 9.79102 8.25391L12.3887 5.65626H1.28711C0.886068 5.6198 0.667318 5.39194 0.630859 4.97266C0.667318 4.58985 0.886068 4.38022 1.28711 4.34376H12.3887L9.79102 1.7461C9.53581 1.43621 9.53581 1.12631 9.79102 0.816415C10.1009 0.561207 10.4108 0.561207 10.7207 0.816415L14.4395 4.53516C14.6947 4.84506 14.6947 5.15496 14.4395 5.46485L10.7207 9.1836C10.4108 9.43881 10.1009 9.4297 9.79102 9.15626Z"
    //           fill="white"
    //         />
    //       </svg>
    //     </button>
    //   </div>
    //   <div>
    //     <img src={signupImage} alt="signup" />
    //     <h2>Don’t Have an Account?</h2>
    //     <p>
    //       To connect with us please register for a new account if you are not
    //       having one already
    //     </p>
    //     <button onClick={() => onRegisterClick()}>
    //       Register{" "}
    //       <svg
    //         width="15"
    //         height="10"
    //         viewBox="0 0 15 10"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M9.79102 9.15626C9.66341 9.04688 9.59961 8.90105 9.59961 8.71876C9.59961 8.53647 9.66341 8.38152 9.79102 8.25391L12.3887 5.65626H1.28711C0.886068 5.6198 0.667318 5.39194 0.630859 4.97266C0.667318 4.58985 0.886068 4.38022 1.28711 4.34376H12.3887L9.79102 1.7461C9.53581 1.43621 9.53581 1.12631 9.79102 0.816415C10.1009 0.561207 10.4108 0.561207 10.7207 0.816415L14.4395 4.53516C14.6947 4.84506 14.6947 5.15496 14.4395 5.46485L10.7207 9.1836C10.4108 9.43881 10.1009 9.4297 9.79102 9.15626Z"
    //           fill="white"
    //         />
    //       </svg>
    //     </button>
    //   </div>
    // </>

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
