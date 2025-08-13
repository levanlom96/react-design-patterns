import StarWarsCharactersContainer from '../../ContainerPresentationalPattern/Container';
import './ContainerPresentationalPage.scss';

const ContainerPresentationalPage: React.FC = () => {
  return (
    <div className="container-presentational-page">
      <div className="pattern-header">
        <h1>Container & Presentational Pattern</h1>
        <p className="pattern-description">
          This pattern separates business logic (data fetching, state management) from 
          presentation logic (UI rendering). The container component handles all the logic 
          while the presentational component focuses solely on how things look.
        </p>
      </div>

      <div className="pattern-explanation">
        <div className="explanation-section">
          <h3>🏗️ Container Component</h3>
          <p>
            Responsible for <strong>how things work</strong>:
          </p>
          <ul>
            <li>Fetching data from APIs</li>
            <li>Managing component state</li>
            <li>Handling business logic</li>
            <li>Passing data to presentational components</li>
          </ul>
        </div>

        <div className="explanation-section">
          <h3>🎨 Presentational Component</h3>
          <p>
            Responsible for <strong>how things look</strong>:
          </p>
          <ul>
            <li>Rendering UI elements</li>
            <li>Displaying data passed from container</li>
            <li>Handling user interactions via callbacks</li>
            <li>Focusing on visual presentation</li>
          </ul>
        </div>
      </div>

      <div className="pattern-demo">
        <h2>Live Example: Star Wars Characters</h2>
        <p>
          Below is a live demonstration where the <code>StarWarsCharactersContainer</code> 
          fetches data from an API and passes it to the <code>CharacterList</code> 
          presentational component for rendering.
        </p>
        
        <div className="demo-container">
          <StarWarsCharactersContainer />
        </div>
      </div>

      <div className="pattern-benefits">
        <h2>Benefits of This Pattern</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>🧪 Better Testing</h4>
            <p>Presentational components are easier to test as they only depend on props</p>
          </div>
          <div className="benefit-item">
            <h4>♻️ Reusability</h4>
            <p>Presentational components can be reused with different data sources</p>
          </div>
          <div className="benefit-item">
            <h4>🎯 Separation of Concerns</h4>
            <p>Clear separation between business logic and UI concerns</p>
          </div>
          <div className="benefit-item">
            <h4>🐛 Easier Debugging</h4>
            <p>Issues can be isolated to either logic or presentation layer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerPresentationalPage;
