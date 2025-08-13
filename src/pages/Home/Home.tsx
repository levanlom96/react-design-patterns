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
