import { useState } from "react";

import "./LoginPage.css";

const LOGIN_ID = "littlelemon";
const LOGIN_PASSWORD = "123456";

function LoginPage({
  isLoggedIn,
  onLogin,
  onLogout,
}) {
  const [loginId, setLoginId] = useState(LOGIN_ID);
  const [password, setPassword] = useState(LOGIN_PASSWORD);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredLoginId = loginId
      .trim()
      .toLowerCase();

    const enteredPassword = password.trim();

    if (
      enteredLoginId === LOGIN_ID &&
      enteredPassword === LOGIN_PASSWORD
    ) {
      setError("");

      localStorage.setItem(
        "userEmail",
        LOGIN_ID
      );

      onLogin();

      return;
    }

    setError(
      "Incorrect login ID or password."
    );
  };

  if (isLoggedIn) {
    return (
      <section className="login-page">
        <div className="login-card">
          <div className="login-heading">
            <h1>You are logged in</h1>

            <p>
              You can now reserve a table at Little Lemon.
            </p>
          </div>

          <button
            type="button"
            className="login-submit"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="login-page">
      <div className="login-card">
        <div className="login-heading">
          <h1>Login</h1>

          <p>
            Login to reserve a table at Little Lemon.
          </p>
        </div>

        <div className="demo-login">
          <p>
            <strong>Demo Login</strong>
          </p>

          <p>
            Login ID: littlelemon
          </p>

          <p>
            Password: 123456
          </p>
        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >
          <div className="login-field">
            <label htmlFor="login-id">
              Login ID
            </label>

            <input
              type="text"
              id="login-id"
              value={loginId}
              onChange={(event) => {
                setLoginId(event.target.value);
                setError("");
              }}
              autoComplete="username"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="login-password">
              Password
            </label>

            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <p
              className="login-error"
              role="alert"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-submit"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;