import { ControlledInput } from './ControlledInput';
import './ControlledInputPage.scss';

const ControlledInputPage: React.FC = () => {
  return (
    <div className="controlled-input-page">
      <div className="pattern-header">
        <h1>Controlled Input Pattern</h1>
        <p className="pattern-description">
          The Controlled Input pattern ensures that React components maintain full control over 
          form inputs by managing their state through React state and controlled updates. This 
          pattern provides predictable data flow, validation capabilities, and synchronized 
          state management for form elements.
        </p>
      </div>

      <div className="pattern-explanation">
        <div className="explanation-section">
          <h3>🎛️ Controlled Components</h3>
          <p>
            React components that <strong>control input values</strong>:
          </p>
          <ul>
            <li>State managed by React component</li>
            <li>Value prop controls input display</li>
            <li>onChange handler updates state</li>
            <li>Single source of truth</li>
          </ul>
        </div>

        <div className="explanation-section">
          <h3>🔄 Data Flow</h3>
          <p>
            Predictable <strong>unidirectional data flow</strong>:
          </p>
          <ul>
            <li>User input triggers onChange event</li>
            <li>Event handler updates React state</li>
            <li>State change triggers re-render</li>
            <li>New value displayed in input</li>
          </ul>
        </div>
      </div>

      <div className="pattern-demo">
        <h2>Live Example: Controlled Text Input</h2>
        <p>
          Below demonstrates a controlled input where the <code>inputValue</code> state 
          controls the input's value, and the <code>handleChange</code> function updates 
          the state on every keystroke, maintaining full React control over the input.
        </p>
        
        <div className="demo-container">
          <div className="controlled-info">
            <h4>🔧 Controlled Input Structure:</h4>
            <div className="controlled-breakdown">
              <div className="breakdown-item">
                <strong>State:</strong> 
                <code>const [inputValue, setInputValue] = useState("")</code>
              </div>
              <div className="breakdown-item">
                <strong>Value Prop:</strong> 
                <code>value=&#123;inputValue&#125;</code>
              </div>
              <div className="breakdown-item">
                <strong>Change Handler:</strong> 
                <code>onChange=&#123;handleChange&#125;</code>
              </div>
              <div className="breakdown-item">
                <strong>Update Function:</strong> 
                <code>setInputValue(event.target.value)</code>
              </div>
            </div>
          </div>
          
          <div className="demo-result">
            <div className="input-demo">
              <label htmlFor="controlled-demo">Controlled Input Demo:</label>
              <ControlledInput />
              <p className="demo-info">
                ✅ This input is fully controlled by React state
              </p>
            </div>

            <div className="comparison-demo">
              <h5>Comparison: Uncontrolled vs Controlled</h5>
              <div className="comparison-inputs">
                <div className="input-example">
                  <label>❌ Uncontrolled (avoid):</label>
                  <input type="text" placeholder="DOM manages this value" />
                  <p>Value managed by DOM</p>
                </div>
                <div className="input-example">
                  <label>✅ Controlled (recommended):</label>
                  <ControlledInput />
                  <p>Value managed by React state</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pattern-benefits">
        <h2>Benefits of Controlled Inputs</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>🎯 Predictable State</h4>
            <p>React state is the single source of truth for input values</p>
          </div>
          <div className="benefit-item">
            <h4>✅ Easy Validation</h4>
            <p>Validate and transform input data before updating state</p>
          </div>
          <div className="benefit-item">
            <h4>🔄 Synchronized UI</h4>
            <p>Input values always reflect current component state</p>
          </div>
          <div className="benefit-item">
            <h4>🧪 Testable Logic</h4>
            <p>Input behavior can be easily tested through state changes</p>
          </div>
        </div>
      </div>

      <div className="pattern-use-cases">
        <h2>Common Controlled Input Examples</h2>
        <div className="use-cases-grid">
          <div className="use-case-item">
            <h4>📝 Text Input</h4>
            <p>Basic controlled text input</p>
            <code>
              {`const [text, setText] = useState("");
<input 
  value={text} 
  onChange={(e) => setText(e.target.value)} 
/>`}
            </code>
          </div>
          <div className="use-case-item">
            <h4>☑️ Checkbox</h4>
            <p>Controlled checkbox input</p>
            <code>
              {`const [checked, setChecked] = useState(false);
<input 
  type="checkbox"
  checked={checked} 
  onChange={(e) => setChecked(e.target.checked)} 
/>`}
            </code>
          </div>
          <div className="use-case-item">
            <h4>📋 Select Dropdown</h4>
            <p>Controlled select element</p>
            <code>
              {`const [selected, setSelected] = useState("");
<select 
  value={selected} 
  onChange={(e) => setSelected(e.target.value)}
>
  <option value="a">Option A</option>
</select>`}
            </code>
          </div>
          <div className="use-case-item">
            <h4>📄 Textarea</h4>
            <p>Controlled multiline text input</p>
            <code>
              {`const [content, setContent] = useState("");
<textarea 
  value={content} 
  onChange={(e) => setContent(e.target.value)} 
/>`}
            </code>
          </div>
        </div>
      </div>

      <div className="pattern-advanced">
        <h2>Advanced Controlled Input Techniques</h2>
        <div className="advanced-grid">
          <div className="advanced-item">
            <h4>✅ Input Validation</h4>
            <p>Validate input before updating state</p>
            <code>
              {`const handleChange = (e) => {
  const value = e.target.value;
  if (value.length <= 10) {
    setValue(value);
  }
};`}
            </code>
          </div>
          <div className="advanced-item">
            <h4>🔄 Value Transformation</h4>
            <p>Transform input values on change</p>
            <code>
              {`const handleChange = (e) => {
  const value = e.target.value.toUpperCase();
  setValue(value);
};`}
            </code>
          </div>
          <div className="advanced-item">
            <h4>🎭 Formatted Inputs</h4>
            <p>Apply formatting to input values</p>
            <code>
              {`const handlePhoneChange = (e) => {
  const formatted = formatPhoneNumber(e.target.value);
  setPhone(formatted);
};`}
            </code>
          </div>
          <div className="advanced-item">
            <h4>⚡ Debounced Updates</h4>
            <p>Delay state updates for performance</p>
            <code>
              {`const debouncedValue = useDebounce(inputValue, 300);
useEffect(() => {
  // API call with debounced value
}, [debouncedValue]);`}
            </code>
          </div>
        </div>
      </div>

      <div className="pattern-comparison">
        <h2>Controlled vs Uncontrolled Inputs</h2>
        <div className="comparison-grid">
          <div className="comparison-item">
            <h4>🎛️ Controlled Inputs</h4>
            <p><strong>State:</strong> Managed by React component</p>
            <p><strong>Value:</strong> Always reflects component state</p>
            <p><strong>Updates:</strong> Through setState in onChange handler</p>
            <p><strong>Use for:</strong> Forms with validation, dynamic behavior</p>
          </div>
          <div className="comparison-item">
            <h4>🆓 Uncontrolled Inputs</h4>
            <p><strong>State:</strong> Managed by DOM element</p>
            <p><strong>Value:</strong> Accessed via refs when needed</p>
            <p><strong>Updates:</strong> Direct DOM manipulation</p>
            <p><strong>Use for:</strong> Simple forms, file inputs, third-party integration</p>
          </div>
        </div>
      </div>

      <div className="pattern-form-example">
        <h2>Complete Form Example</h2>
        <div className="form-example">
          <h4>🏗️ Multi-Input Controlled Form</h4>
          <code className="form-code">
            {`const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (field) => (event) => {
    setForm(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  return (
    <form>
      <input 
        value={form.name} 
        onChange={handleChange('name')} 
        placeholder="Name" 
      />
      <input 
        value={form.email} 
        onChange={handleChange('email')} 
        placeholder="Email" 
      />
      <textarea 
        value={form.message} 
        onChange={handleChange('message')} 
        placeholder="Message" 
      />
    </form>
  );
};`}
          </code>
        </div>
      </div>

      <div className="pattern-best-practices">
        <h2>Best Practices</h2>
        <div className="practices-grid">
          <div className="practice-item">
            <h4>✅ Do</h4>
            <ul>
              <li>Use controlled inputs for forms with validation</li>
              <li>Always provide both value and onChange props</li>
              <li>Initialize state with appropriate default values</li>
              <li>Use TypeScript for better event typing</li>
              <li>Consider performance for frequent updates</li>
            </ul>
          </div>
          <div className="practice-item">
            <h4>❌ Don't</h4>
            <ul>
              <li>Mix controlled and uncontrolled patterns</li>
              <li>Forget to handle onChange events</li>
              <li>Use controlled inputs for file uploads</li>
              <li>Update state on every keystroke for expensive operations</li>
              <li>Ignore accessibility attributes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlledInputPage;
