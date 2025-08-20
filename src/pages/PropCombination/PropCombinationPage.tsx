import PropCombination from './PropCombination';
import './PropCombinationPage.scss';

const PropCombinationPage: React.FC = () => {
  return (
    <div className="prop-combination-page">
      <div className="pattern-header">
        <h1>Props Combination Pattern</h1>
        <p className="pattern-description">
          The Props Combination pattern involves grouping related props into objects and using 
          the spread operator to pass them to components. This pattern promotes reusability, 
          reduces prop drilling, and makes component APIs cleaner and more maintainable by 
          organizing props into logical groups.
        </p>
      </div>

      <div className="pattern-explanation">
        <div className="explanation-section">
          <h3>📦 Props Grouping</h3>
          <p>
            Organize props into <strong>logical objects</strong>:
          </p>
          <ul>
            <li>Group related styling props</li>
            <li>Create reusable prop configurations</li>
            <li>Reduce component API complexity</li>
            <li>Enable prop composition patterns</li>
          </ul>
        </div>

        <div className="explanation-section">
          <h3>🔄 Spread Operator</h3>
          <p>
            Use spread syntax for <strong>clean prop passing</strong>:
          </p>
          <ul>
            <li>Spread grouped props into components</li>
            <li>Combine multiple prop objects</li>
            <li>Override specific props when needed</li>
            <li>Maintain prop type safety</li>
          </ul>
        </div>
      </div>

      <div className="pattern-demo">
        <h2>Live Example: Styled Paragraph Component</h2>
        <p>
          Below demonstrates props combination where styling properties are grouped into 
          a <code>paragraphProps</code> object and spread into the <code>P</code> component. 
          This approach makes the component reusable with different style configurations.
        </p>
        
        <div className="demo-container">
          <div className="props-info">
            <h4>🎨 Props Combination Structure:</h4>
            <div className="props-breakdown">
              <div className="breakdown-item">
                <strong>Grouped Props:</strong> 
                <code>paragraphProps = &#123; color, size, lineHeight, fontWeight, fontFamily &#125;</code>
              </div>
              <div className="breakdown-item">
                <strong>Spread Syntax:</strong> 
                <code>&lt;P &#123;...paragraphProps&#125;&gt;</code>
              </div>
              <div className="breakdown-item">
                <strong>Component:</strong> 
                <code>P</code> - Accepts and applies styling props
              </div>
              <div className="breakdown-item">
                <strong>Result:</strong> 
                Reusable styled paragraph with grouped configurations
              </div>
            </div>
          </div>
          
          <div className="demo-result">
            <PropCombination />
            
            <div className="additional-examples">
              <h5>Additional Variations:</h5>
              <div className="variations">
                <div className="variation">
                  <code>baseProps</code>: Default styling
                  <div style={{ 
                    color: '#3498db', 
                    fontSize: '16px', 
                    lineHeight: '1.5', 
                    fontWeight: 'normal', 
                    fontFamily: 'Arial' 
                  }}>
                    Base styled text
                  </div>
                </div>
                <div className="variation">
                  <code>headerProps</code>: Header styling
                  <div style={{ 
                    color: '#2c3e50', 
                    fontSize: '24px', 
                    lineHeight: '1.3', 
                    fontWeight: 'bold', 
                    fontFamily: 'Georgia' 
                  }}>
                    Header styled text
                  </div>
                </div>
                <div className="variation">
                  <code>accentProps</code>: Accent styling
                  <div style={{ 
                    color: '#e74c3c', 
                    fontSize: '18px', 
                    lineHeight: '1.4', 
                    fontWeight: '600', 
                    fontFamily: 'Helvetica' 
                  }}>
                    Accent styled text
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pattern-benefits">
        <h2>Benefits of Props Combination</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>♻️ Reusability</h4>
            <p>Create reusable prop configurations that can be shared across components</p>
          </div>
          <div className="benefit-item">
            <h4>🧹 Clean APIs</h4>
            <p>Reduce the number of individual props by grouping related ones</p>
          </div>
          <div className="benefit-item">
            <h4>🎯 Organization</h4>
            <p>Logical grouping of props makes code more maintainable</p>
          </div>
          <div className="benefit-item">
            <h4>🔧 Flexibility</h4>
            <p>Easy to override specific props while maintaining base configurations</p>
          </div>
        </div>
      </div>

      <div className="pattern-use-cases">
        <h2>Common Props Combination Use Cases</h2>
        <div className="use-cases-grid">
          <div className="use-case-item">
            <h4>🎨 Styling Props</h4>
            <p>Group related styling properties</p>
            <code>
              {`const styleProps = {
  color: 'blue',
  fontSize: '16px',
  fontWeight: 'bold'
};
<Text {...styleProps} />`}
            </code>
          </div>
          <div className="use-case-item">
            <h4>📱 Layout Props</h4>
            <p>Combine layout and positioning props</p>
            <code>
              {`const layoutProps = {
  margin: '10px',
  padding: '20px',
  display: 'flex'
};
<Container {...layoutProps} />`}
            </code>
          </div>
          <div className="use-case-item">
            <h4>🔧 Configuration Props</h4>
            <p>Bundle component configuration options</p>
            <code>
              {`const configProps = {
  autoFocus: true,
  placeholder: 'Enter text',
  maxLength: 100
};
<Input {...configProps} />`}
            </code>
          </div>
          <div className="use-case-item">
            <h4>🎭 Theme Props</h4>
            <p>Apply theme-based prop combinations</p>
            <code>
              {`const darkTheme = {
  backgroundColor: '#333',
  color: '#fff',
  borderColor: '#555'
};
<Card {...darkTheme} />`}
            </code>
          </div>
        </div>
      </div>

      <div className="pattern-advanced">
        <h2>Advanced Props Combination Techniques</h2>
        <div className="advanced-grid">
          <div className="advanced-item">
            <h4>🔗 Prop Merging</h4>
            <p>Combine multiple prop objects with override capabilities</p>
            <code>
              {`const baseProps = { color: 'blue', size: '16px' };
const overrides = { color: 'red' };
const finalProps = { ...baseProps, ...overrides };`}
            </code>
          </div>
          <div className="advanced-item">
            <h4>🎯 Conditional Props</h4>
            <p>Apply props based on conditions</p>
            <code>
              {`const dynamicProps = {
  ...baseProps,
  ...(isError && errorProps),
  ...(isLoading && loadingProps)
};`}
            </code>
          </div>
          <div className="advanced-item">
            <h4>🏭 Prop Factories</h4>
            <p>Create functions that generate prop objects</p>
            <code>
              {`const createButtonProps = (variant) => ({
  color: variants[variant].color,
  background: variants[variant].bg,
  padding: '8px 16px'
});`}
            </code>
          </div>
          <div className="advanced-item">
            <h4>📋 Prop Extraction</h4>
            <p>Extract specific props while spreading the rest</p>
            <code>
              {`const { className, style, ...restProps } = props;
return <div className={cn(className)} 
            style={style} 
            {...restProps} />;`}
            </code>
          </div>
        </div>
      </div>

      <div className="pattern-comparison">
        <h2>Props Combination vs Other Patterns</h2>
        <div className="comparison-grid">
          <div className="comparison-item">
            <h4>🆚 Props Combination vs Individual Props</h4>
            <p><strong>Combination:</strong> Grouped, reusable prop objects</p>
            <p><strong>Individual:</strong> Each prop passed separately</p>
            <p><strong>Use Combination for:</strong> Related props that are often used together</p>
          </div>
          <div className="comparison-item">
            <h4>🆚 Props Combination vs Context</h4>
            <p><strong>Combination:</strong> Explicit prop passing with grouping</p>
            <p><strong>Context:</strong> Implicit state sharing through component tree</p>
            <p><strong>Use Combination for:</strong> Component-specific configurations</p>
          </div>
        </div>
      </div>

      <div className="pattern-best-practices">
        <h2>Best Practices</h2>
        <div className="practices-grid">
          <div className="practice-item">
            <h4>✅ Do</h4>
            <ul>
              <li>Group logically related props together</li>
              <li>Use TypeScript interfaces for prop objects</li>
              <li>Create reusable prop configurations</li>
              <li>Use meaningful names for prop objects</li>
              <li>Destructure props in components for clarity</li>
            </ul>
          </div>
          <div className="practice-item">
            <h4>❌ Don't</h4>
            <ul>
              <li>Group unrelated props together</li>
              <li>Create overly complex prop objects</li>
              <li>Spread props without understanding them</li>
              <li>Ignore TypeScript warnings about prop types</li>
              <li>Use props combination for simple single props</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropCombinationPage;
