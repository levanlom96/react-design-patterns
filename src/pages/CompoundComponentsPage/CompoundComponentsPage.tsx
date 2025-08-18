import CompoundComponents from './CompoundComponents';
import './CompoundComponentsPage.scss';

const CompoundComponentsPage: React.FC = () => {
  return (
    <div className="compound-components-page">
      <div className="pattern-header">
        <h1>Compound Components Pattern</h1>
        <p className="pattern-description">
          The Compound Components pattern allows you to create flexible and reusable components 
          that work together to form a complete UI element. Instead of passing many props, 
          child components communicate through shared context, providing an intuitive and 
          declarative API similar to HTML elements.
        </p>
      </div>

      <div className="pattern-explanation">
        <div className="explanation-section">
          <h3>🧩 Component Composition</h3>
          <p>
            Components that <strong>work together</strong>:
          </p>
          <ul>
            <li>Parent component provides context</li>
            <li>Child components consume context</li>
            <li>Flexible arrangement and styling</li>
            <li>Semantic and intuitive API</li>
          </ul>
        </div>

        <div className="explanation-section">
          <h3>🔄 Shared State</h3>
          <p>
            State management through <strong>React Context</strong>:
          </p>
          <ul>
            <li>Centralized state in parent</li>
            <li>Context provider pattern</li>
            <li>Type-safe context consumption</li>
            <li>Implicit communication</li>
          </ul>
        </div>
      </div>

      <div className="pattern-demo">
        <h2>Live Example: Toggle Compound Component</h2>
        <p>
          Below demonstrates a Toggle compound component where <code>Toggle</code> provides 
          the state, and <code>Toggle.On</code>, <code>Toggle.Off</code>, and 
          <code>Toggle.Button</code> consume that state to render conditionally and handle interactions.
        </p>
        
        <div className="demo-container">
          <div className="compound-info">
            <h4>🏗️ Compound Components Structure:</h4>
            <div className="compound-breakdown">
              <div className="breakdown-item">
                <strong>Parent:</strong> <code>Toggle</code> - Manages state and provides context
              </div>
              <div className="breakdown-item">
                <strong>Child:</strong> <code>Toggle.On</code> - Renders when state is true
              </div>
              <div className="breakdown-item">
                <strong>Child:</strong> <code>Toggle.Off</code> - Renders when state is false
              </div>
              <div className="breakdown-item">
                <strong>Child:</strong> <code>Toggle.Button</code> - Controls state changes
              </div>
            </div>
          </div>
          
          <div className="demo-result">
            <CompoundComponents />
          </div>
        </div>
      </div>

      <div className="pattern-benefits">
        <h2>Benefits of Compound Components</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>🎯 Flexible API</h4>
            <p>Intuitive component composition without complex prop drilling</p>
          </div>
          <div className="benefit-item">
            <h4>🧩 Separation of Concerns</h4>
            <p>Each sub-component has a single, clear responsibility</p>
          </div>
          <div className="benefit-item">
            <h4>🎨 Customizable Layout</h4>
            <p>Users can arrange and style components as needed</p>
          </div>
          <div className="benefit-item">
            <h4>📖 Readable Code</h4>
            <p>Self-documenting component structure and relationships</p>
          </div>
        </div>
      </div>

      <div className="pattern-use-cases">
        <h2>Common Compound Component Examples</h2>
        <div className="use-cases-grid">
          <div className="use-case-item">
            <h4>📋 Accordion</h4>
            <p>Collapsible content sections</p>
            <code>
              {`<Accordion>
  <Accordion.Item>
    <Accordion.Header />
    <Accordion.Content />
  </Accordion.Item>
</Accordion>`}
            </code>
          </div>
          <div className="use-case-item">
            <h4>📱 Tabs</h4>
            <p>Tabbed navigation interface</p>
            <code>
              {`<Tabs>
  <Tabs.List>
    <Tabs.Tab />
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel />
  </Tabs.Panels>
</Tabs>`}
            </code>
          </div>
          <div className="use-case-item">
            <h4>🎛️ Form</h4>
            <p>Cohesive form elements</p>
            <code>
              {`<Form>
  <Form.Field>
    <Form.Label />
    <Form.Input />
    <Form.Error />
  </Form.Field>
</Form>`}
            </code>
          </div>
          <div className="use-case-item">
            <h4>🍔 Menu</h4>
            <p>Dropdown menu systems</p>
            <code>
              {`<Menu>
  <Menu.Button />
  <Menu.Items>
    <Menu.Item />
  </Menu.Items>
</Menu>`}
            </code>
          </div>
        </div>
      </div>

      <div className="pattern-comparison">
        <h2>Compound Components vs Other Patterns</h2>
        <div className="comparison-grid">
          <div className="comparison-item">
            <h4>🆚 Compound vs Prop Drilling</h4>
            <p><strong>Compound:</strong> Implicit state sharing via context</p>
            <p><strong>Prop Drilling:</strong> Explicit prop passing through hierarchy</p>
            <p><strong>Use Compound for:</strong> Related components with shared state</p>
          </div>
          <div className="comparison-item">
            <h4>🆚 Compound vs Render Props</h4>
            <p><strong>Compound:</strong> Declarative component composition</p>
            <p><strong>Render Props:</strong> Functional component composition</p>
            <p><strong>Use Compound for:</strong> Consistent UI patterns and layouts</p>
          </div>
        </div>
      </div>

      <div className="pattern-implementation">
        <h2>Implementation Pattern</h2>
        <div className="implementation-grid">
          <div className="implementation-item">
            <h4>1️⃣ Create Context</h4>
            <p>Define shared state interface and create context</p>
            <code>const ToggleContext = createContext&lt;ToggleContextType&gt;()</code>
          </div>
          <div className="implementation-item">
            <h4>2️⃣ Parent Component</h4>
            <p>Manage state and provide context to children</p>
            <code>&lt;ToggleContext.Provider value=&#123;&#123; on, toggle &#125;&#125;&gt;</code>
          </div>
          <div className="implementation-item">
            <h4>3️⃣ Child Components</h4>
            <p>Consume context and render based on state</p>
            <code>const &#123; on &#125; = useContext(ToggleContext)</code>
          </div>
          <div className="implementation-item">
            <h4>4️⃣ Attach to Parent</h4>
            <p>Create compound API by attaching to parent</p>
            <code>Toggle.On = ToggleOn</code>
          </div>
        </div>
      </div>

      <div className="pattern-best-practices">
        <h2>Best Practices</h2>
        <div className="practices-grid">
          <div className="practice-item">
            <h4>✅ Do</h4>
            <ul>
              <li>Use meaningful component names</li>
              <li>Validate context usage with error boundaries</li>
              <li>Keep sub-components focused and simple</li>
              <li>Provide TypeScript interfaces for context</li>
              <li>Use dot notation for sub-components</li>
            </ul>
          </div>
          <div className="practice-item">
            <h4>❌ Don't</h4>
            <ul>
              <li>Overuse compound components for simple cases</li>
              <li>Create deep nesting hierarchies</li>
              <li>Mix compound pattern with heavy prop drilling</li>
              <li>Forget to handle context undefined states</li>
              <li>Make sub-components too complex</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoundComponentsPage;
