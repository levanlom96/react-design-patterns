import HigherOrderComponentWrapper from './HigherOrderComponents';
import './HigherOrderComponentsPage.scss';

const HigherOrderComponentsPage: React.FC = () => {
  return (
    <div className="higher-order-components-page">
      <div className="pattern-header">
        <h1>Higher-Order Components (HOC) Pattern</h1>
        <p className="pattern-description">
          Higher-Order Components are functions that take a component and return a new component 
          with enhanced functionality. HOCs enable code reuse, logic abstraction, and cross-cutting 
          concerns like authentication, logging, or data fetching without modifying the original component.
        </p>
      </div>

      <div className="pattern-explanation">
        <div className="explanation-section">
          <h3>🔧 HOC Function</h3>
          <p>
            A function that <strong>enhances components</strong>:
          </p>
          <ul>
            <li>Takes a component as input</li>
            <li>Returns enhanced component</li>
            <li>Adds props, state, or behavior</li>
            <li>Wraps with additional functionality</li>
          </ul>
        </div>

        <div className="explanation-section">
          <h3>🎯 Enhancement Patterns</h3>
          <p>
            Common ways to <strong>enhance components</strong>:
          </p>
          <ul>
            <li>Inject additional props</li>
            <li>Conditional rendering logic</li>
            <li>State management abstraction</li>
            <li>Cross-cutting concerns</li>
          </ul>
        </div>
      </div>

      <div className="pattern-demo">
        <h2>Live Example: Name Injection HOC</h2>
        <p>
          Below demonstrates a Higher-Order Component that automatically injects a 
          <code>name</code> prop into any component. The <code>HigherOrderComponent</code> 
          function enhances the <code>AvatarComponent</code> by providing additional data.
        </p>
        
        <div className="demo-container">
          <div className="hoc-info">
            <h4>🏗️ HOC Pattern Breakdown:</h4>
            <div className="hoc-breakdown">
              <div className="breakdown-item">
                <strong>Input:</strong> <code>AvatarComponent</code> - Basic UI component
              </div>
              <div className="breakdown-item">
                <strong>HOC:</strong> <code>HigherOrderComponent</code> - Enhancement function
              </div>
              <div className="breakdown-item">
                <strong>Enhancement:</strong> Injects <code>name</code> prop automatically
              </div>
              <div className="breakdown-item">
                <strong>Output:</strong> <code>SampleHoc</code> - Enhanced component with name
              </div>
            </div>
          </div>
          
          <div className="demo-result">
            <HigherOrderComponentWrapper />
          </div>
        </div>
      </div>

      <div className="pattern-benefits">
        <h2>Benefits of Higher-Order Components</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>🔄 Code Reuse</h4>
            <p>Same enhancement logic can be applied to multiple components</p>
          </div>
          <div className="benefit-item">
            <h4>🎯 Separation of Concerns</h4>
            <p>Cross-cutting concerns separated from component logic</p>
          </div>
          <div className="benefit-item">
            <h4>🛠️ Composability</h4>
            <p>Multiple HOCs can be composed together for complex enhancements</p>
          </div>
          <div className="benefit-item">
            <h4>🧪 Testability</h4>
            <p>Enhancement logic can be tested independently</p>
          </div>
        </div>
      </div>

      <div className="pattern-use-cases">
        <h2>Common HOC Use Cases</h2>
        <div className="use-cases-grid">
          <div className="use-case-item">
            <h4>🔐 Authentication</h4>
            <p>Wrap components with authentication checks</p>
            <code>withAuth(Component)</code>
          </div>
          <div className="use-case-item">
            <h4>📊 Data Fetching</h4>
            <p>Inject data from APIs or stores</p>
            <code>withData(Component)</code>
          </div>
          <div className="use-case-item">
            <h4>🎨 Theming</h4>
            <p>Inject theme props and styling</p>
            <code>withTheme(Component)</code>
          </div>
          <div className="use-case-item">
            <h4>📝 Logging</h4>
            <p>Add logging and analytics tracking</p>
            <code>withLogging(Component)</code>
          </div>
        </div>
      </div>

      <div className="pattern-comparison">
        <h2>HOCs vs Other Patterns</h2>
        <div className="comparison-grid">
          <div className="comparison-item">
            <h4>🆚 HOCs vs Custom Hooks</h4>
            <p><strong>HOCs:</strong> Component enhancement with wrapping</p>
            <p><strong>Hooks:</strong> Logic sharing without wrapping</p>
            <p><strong>Use HOCs for:</strong> Props injection, conditional rendering</p>
          </div>
          <div className="comparison-item">
            <h4>🆚 HOCs vs Render Props</h4>
            <p><strong>HOCs:</strong> Static enhancement at definition time</p>
            <p><strong>Render Props:</strong> Dynamic enhancement at render time</p>
            <p><strong>Use HOCs for:</strong> Consistent enhancements across components</p>
          </div>
        </div>
      </div>

      <div className="pattern-best-practices">
        <h2>HOC Best Practices</h2>
        <div className="practices-grid">
          <div className="practice-item">
            <h4>✅ Do</h4>
            <ul>
              <li>Use descriptive HOC names (withAuth, withData)</li>
              <li>Forward refs when needed</li>
              <li>Preserve component displayName</li>
              <li>Pass through unrelated props</li>
            </ul>
          </div>
          <div className="practice-item">
            <h4>❌ Don't</h4>
            <ul>
              <li>Mutate the original component</li>
              <li>Use HOCs inside render methods</li>
              <li>Copy static methods manually</li>
              <li>Overuse HOCs for simple logic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HigherOrderComponentsPage;
