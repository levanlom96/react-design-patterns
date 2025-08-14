export type AuthState = {
  loggedIn: boolean;
  user: { name: string } | null;
  token: string | null;
};

export type AuthAction = 
  | { type: "login"; payload: { user: { name: string }; token: string } }
  | { type: "logout" };

export const initState: AuthState = {
  loggedIn: false,
  user: null,
  token: null,
};

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "login":
      return {
        loggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "logout":
      return initState;
    default:
      return state;
  }
}