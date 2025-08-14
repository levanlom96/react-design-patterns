import { useReducer } from "react";
import { authReducer, initState, AuthAction } from "./auth.reducer";

const AuthComponent = () => {
  const [state, dispatch] = useReducer(authReducer, initState);

  const logIn = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "login",
      payload: {
        user: { name: "John Doe" },
        token: "jwt-token-12345",
      },
    } as AuthAction);
  };

  const logOut = () => {
    dispatch({ type: "logout" } as AuthAction);
  };

  return (
    <div className="auth-component">
      {state?.loggedIn ? (
        <div className="auth-component__logged-in">
          <h3>Welcome back!</h3>
          <p>Hello, {state.user?.name}</p>
          <p className="auth-component__token">Token: {state.token}</p>
          <button 
            onClick={logOut}
            className="auth-component__button auth-component__button--logout"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="auth-component__login">
          <h3>Please log in</h3>
          <form onSubmit={logIn} className="auth-component__form">
            <div className="auth-component__field">
              <label>Username:</label>
              <input 
                type="text" 
                placeholder="Enter username"
                className="auth-component__input"
              />
            </div>
            <div className="auth-component__field">
              <label>Password:</label>
              <input 
                type="password" 
                placeholder="Enter password"
                className="auth-component__input"
              />
            </div>
            <button 
              type="submit"
              className="auth-component__button auth-component__button--login"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;