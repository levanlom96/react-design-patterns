import { Link } from 'react-router-dom';
import './Home.scss';

const Home: React.FC = () => {
  const patterns = [
    {
      name: 'Container & Presentational',
      path: '/container-presentational',
      description: 'Separates business logic from presentation logic for better maintainability and testability.',
      benefits: ['Better separation of concerns', 'Easier testing', 'Reusable presentational components']
    },
    {
      name: 'Component Composition',
      path: '/component-composition',
      description: 'Builds complex UIs by combining smaller, reusable components and custom hooks.',
      benefits: ['Logic reusability with custom hooks', 'Better modularity', 'Easier testing and maintenance']
    },
    {
      name: 'State Manager with Reducers',
      path: '/state-manager-with-reducers',
      description: 'Manages complex state logic using useReducer for predictable state transitions.',
      benefits: ['Predictable state updates', 'Better for complex state', 'Easier debugging and testing']
    },
    {
      name: 'Higher-Order Components',
      path: '/higher-order-components',
      description: 'Functions that take components and return enhanced components with additional functionality.',
      benefits: ['Code reuse across components', 'Separation of concerns', 'Composable enhancements']
    },
    {
      name: 'Compound Components',
      path: '/compound-components',
      description: 'Create flexible component APIs where child components work together through shared context.',
      benefits: ['Intuitive component composition', 'Flexible layouts', 'Implicit state sharing']
    },
    {
      name: 'Props Combination',
      path: '/prop-combination',
      description: 'Group related props into objects and use spread operator for cleaner component APIs.',
      benefits: ['Reusable prop configurations', 'Cleaner component APIs', 'Better prop organization']
    },
    {
      name: 'Controlled Input',
      path: '/controlled-input',
      description: 'Manage form input state through React for predictable data flow and validation capabilities.',
      benefits: ['Predictable state management', 'Easy input validation', 'Synchronized UI updates']
    },
  ];

  return (
    <div className="home">
      <div className="home__header">
        <h1>React Design Patterns</h1>
        <p className="home__subtitle">
          Explore and learn various React design patterns that help create maintainable, 
          scalable, and testable applications.
        </p>
      </div>

      <div className="home__content">
        <section className="patterns">
          <h2>Available Patterns</h2>
          <div className="patterns__grid">
            {patterns.map((pattern) => (
              <div key={pattern.path} className="pattern-card">
                <h3 className="pattern-card__title">{pattern.name}</h3>
                <p className="pattern-card__description">{pattern.description}</p>
                
                <div className="pattern-card__benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {pattern.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <Link to={pattern.path} className="pattern-card__link">
                  View Example →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
