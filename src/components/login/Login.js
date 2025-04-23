import { useState } from "react";

import signupImage from "../../assets/signup.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSignInClick = () => {};

  const onLoginClick = () => {};

  const onPostYourAdClick = () => {};

  const onRegisterClick = () => {};

  return (
    <>
      <div className="login-header">
        {/* <svg
          width="186"
          height="40"
          viewBox="0 0 186 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="186" height="40" fill="url(#pattern0_44_4026)" />
          <defs>
            <pattern
              id="pattern0_44_4026"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink="#image0_44_4026"
                transform="scale(0.00537634 0.025)"
              />
            </pattern>
            <image
              id="image0_44_4026"
              width="186"
              height="40"
              preserveAspectRatio="none"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg> */}

        <span onClick={() => onSignInClick()}>
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.4375 8.3125H4.8125C3.44531 8.34896 2.3151 8.82292 1.42188 9.73438C0.510417 10.6276 0.0364583 11.7578 0 13.125C0 13.3802 0.0820312 13.5898 0.246094 13.7539C0.410156 13.918 0.619792 14 0.875 14H11.375C11.6302 14 11.8398 13.918 12.0039 13.7539C12.168 13.5898 12.25 13.3802 12.25 13.125C12.2135 11.7578 11.7396 10.6276 10.8281 9.73438C9.9349 8.82292 8.80469 8.34896 7.4375 8.3125ZM1.33984 12.6875C1.46745 11.8125 1.85026 11.0833 2.48828 10.5C3.1263 9.9349 3.90104 9.64323 4.8125 9.625H7.4375C8.34896 9.64323 9.1237 9.9349 9.76172 10.5C10.3997 11.0833 10.7826 11.8125 10.9102 12.6875H1.33984ZM6.125 7C7.10938 6.98177 7.9388 6.64453 8.61328 5.98828C9.26953 5.3138 9.60677 4.48438 9.625 3.5C9.60677 2.51562 9.26953 1.6862 8.61328 1.01172C7.9388 0.355469 7.10938 0.0182295 6.125 0C5.14062 0.0182295 4.3112 0.355469 3.63672 1.01172C2.98047 1.6862 2.64323 2.51562 2.625 3.5C2.64323 4.48438 2.98047 5.3138 3.63672 5.98828C4.3112 6.64453 5.14062 6.98177 6.125 7ZM6.125 1.3125C6.74479 1.33073 7.26432 1.54036 7.68359 1.94141C8.08464 2.36068 8.29427 2.88021 8.3125 3.5C8.29427 4.11979 8.08464 4.63932 7.68359 5.05859C7.26432 5.45964 6.74479 5.66927 6.125 5.6875C5.50521 5.66927 4.98568 5.45964 4.56641 5.05859C4.16536 4.63932 3.95573 4.11979 3.9375 3.5C3.95573 2.88021 4.16536 2.36068 4.56641 1.94141C4.98568 1.54036 5.50521 1.33073 6.125 1.3125Z"
              fill="#212121"
              fill-opacity="0.3"
            />
          </svg>
          Sign In
        </span>

        <button
          onClick={() => onPostYourAdClick()}
          className="post-your-ad-btn"
        >
          Post Your Ad{" "}
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

      <div className="login-box">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => onUsernameChange(e)}
          placeholder="Type here"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e)}
          placeholder="Type here"
        />

        <button onClick={() => onLoginClick()}>
          Login{" "}
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
      <div>
        <img src={signupImage} alt="signup" />
        <h2>Don’t Have an Account?</h2>
        <p>
          To connect with us please register for a new account if you are not
          having one already
        </p>
        <button onClick={() => onRegisterClick()}>
          Register{" "}
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
    </>
  );
};

export default Login;
