import StarWarsCharactersContainer from './StarWarsCharactersContainer';
import './ComponentCompositionPage.scss';

const ComponentCompositionPage: React.FC = () => {
  return (
    <div className="component-composition-page">
      <div className="pattern-header">
        <h1>Component Composition Pattern</h1>
        <p className="pattern-description">
          Component Composition is a pattern that leverages React's component architecture to build 
          complex UIs by combining smaller, reusable components. It promotes building applications 
          through composition rather than inheritance, following the "composition over inheritance" principle.
        </p>
      </div>

      <div className="pattern-explanation">
        <div className="explanation-section">
          <h3>🧩 Composition Approach</h3>
          <p>
            Focus on <strong>building with smaller pieces</strong>:
          </p>
          <ul>
            <li>Custom hooks for logic reuse</li>
            <li>Higher-order components (HOCs)</li>
            <li>Render props pattern</li>
            <li>Children prop composition</li>
          </ul>
        </div>

        <div className="explanation-section">
          <h3>🔧 Custom Hooks</h3>
          <p>
            Extract and <strong>reuse stateful logic</strong>:
          </p>
          <ul>
            <li>Encapsulate complex state logic</li>
            <li>Share logic across components</li>
            <li>Easier testing and debugging</li>
            <li>Clean separation of concerns</li>
          </ul>
        </div>
      </div>

      <div className="pattern-demo">
        <h2>Live Example: Custom Hook Composition</h2>
        <p>
          Below demonstrates composition using a <code>useFetchStarWarsCharacters</code> custom hook.
          The hook encapsulates all the data fetching logic, while the container component focuses 
          on composition and the presentational component handles rendering.
        </p>
        
        <div className="demo-container">
          <div className="composition-info">
            <h4>🪝 Custom Hook: <code>useFetchStarWarsCharacters</code></h4>
            <p>Handles: API calls, loading states, error handling, data management</p>
            
            <h4>🏗️ Container: <code>StarWarsCharactersContainer</code></h4>
            <p>Handles: Hook composition, data flow orchestration</p>
            
            <h4>🎨 Presentation: <code>CharacterList</code></h4>
            <p>Handles: UI rendering, user interface display</p>
          </div>
          
          <div className="demo-result">
            <StarWarsCharactersContainer />
          </div>
        </div>
      </div>

      <div className="pattern-benefits">
        <h2>Benefits of Component Composition</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>🔄 Reusability</h4>
            <p>Custom hooks can be used across multiple components</p>
          </div>
          <div className="benefit-item">
            <h4>🧪 Testability</h4>
            <p>Logic is isolated in hooks, making unit testing easier</p>
          </div>
          <div className="benefit-item">
            <h4>📦 Modularity</h4>
            <p>Small, focused components that do one thing well</p>
          </div>
          <div className="benefit-item">
            <h4>🛠️ Maintainability</h4>
            <p>Changes are localized to specific hooks or components</p>
          </div>
        </div>
      </div>

      <div className="pattern-comparison">
        <h2>Composition vs Container-Presentation</h2>
        <div className="comparison-grid">
          <div className="comparison-item">
            <h4>🎯 Focus</h4>
            <p><strong>Composition:</strong> Reusable logic extraction</p>
            <p><strong>Container-Presentation:</strong> UI/logic separation</p>
          </div>
          <div className="comparison-item">
            <h4>📋 Implementation</h4>
            <p><strong>Composition:</strong> Custom hooks + components</p>
            <p><strong>Container-Presentation:</strong> Smart + dumb components</p>
          </div>
          <div className="comparison-item">
            <h4>🎁 Main Benefit</h4>
            <p><strong>Composition:</strong> Logic reusability</p>
            <p><strong>Container-Presentation:</strong> Clear responsibilities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentCompositionPage;
