import AuthComponent from './AuthComponent';
import './StateManagerWithReducersPage.scss';

const StateManagerWithReducersPage: React.FC = () => {
  return (
    <div className="state-manager-page">
      <div className="pattern-header">
        <h1>State Manager with Reducers Pattern</h1>
        <p className="pattern-description">
          The State Manager with Reducers pattern uses React's useReducer hook to manage 
          complex state logic in a predictable way. This pattern is especially useful when 
          state has multiple sub-values or when the next state depends on the previous one.
        </p>
      </div>

      <div className="pattern-explanation">
        <div className="explanation-section">
          <h3>🔄 useReducer Hook</h3>
          <p>
            Manages state through <strong>reducer functions</strong>:
          </p>
          <ul>
            <li>Centralized state management logic</li>
            <li>Predictable state transitions</li>
            <li>Action-based state updates</li>
            <li>Pure functions for state changes</li>
          </ul>
        </div>

        <div className="explanation-section">
          <h3>⚡ Actions & Dispatch</h3>
          <p>
            State changes through <strong>dispatched actions</strong>:
          </p>
          <ul>
            <li>Type-safe action definitions</li>
            <li>Payload-based data transfer</li>
            <li>Single point of state updates</li>
            <li>Easy debugging and testing</li>
          </ul>
        </div>
      </div>

      <div className="pattern-demo">
        <h2>Live Example: Authentication State Manager</h2>
        <p>
          Below is a live demonstration of a authentication state manager using 
          <code>useReducer</code>. The reducer handles login/logout actions and 
          maintains user authentication state in a predictable manner.
        </p>
        
        <div className="demo-container">
          <div className="reducer-info">
            <h4>🔧 Reducer Pattern Components:</h4>
            <div className="reducer-breakdown">
              <div className="breakdown-item">
                <strong>State:</strong> <code>AuthState</code> - loggedIn, user, token
              </div>
              <div className="breakdown-item">
                <strong>Actions:</strong> <code>AuthAction</code> - login, logout
              </div>
              <div className="breakdown-item">
                <strong>Reducer:</strong> <code>authReducer</code> - pure function handling state transitions
              </div>
              <div className="breakdown-item">
                <strong>Dispatch:</strong> Triggers state changes via actions
              </div>
            </div>
          </div>
          
          <div className="demo-result">
            <AuthComponent />
          </div>
        </div>
      </div>

      <div className="pattern-benefits">
        <h2>Benefits of useReducer Pattern</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>🎯 Predictability</h4>
            <p>State changes are always predictable and traceable</p>
          </div>
          <div className="benefit-item">
            <h4>🧪 Testability</h4>
            <p>Pure reducer functions are easy to unit test</p>
          </div>
          <div className="benefit-item">
            <h4>📊 Complex State</h4>
            <p>Better for managing complex state with multiple properties</p>
          </div>
          <div className="benefit-item">
            <h4>🔍 Debugging</h4>
            <p>Action-based updates make debugging easier</p>
          </div>
        </div>
      </div>

      <div className="pattern-comparison">
        <h2>useState vs useReducer</h2>
        <div className="comparison-grid">
          <div className="comparison-item">
            <h4>📝 Use useState when:</h4>
            <ul>
              <li>Simple state (strings, numbers, booleans)</li>
              <li>Independent state updates</li>
              <li>Few state transitions</li>
              <li>Local component state</li>
            </ul>
          </div>
          <div className="comparison-item">
            <h4>🔄 Use useReducer when:</h4>
            <ul>
              <li>Complex state objects</li>
              <li>State depends on previous state</li>
              <li>Multiple ways to update state</li>
              <li>Need predictable state updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateManagerWithReducersPage;
