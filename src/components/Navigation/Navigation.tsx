import { Link, useLocation } from 'react-router-dom';
import './Navigation.scss';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/container-presentational', label: 'Container & Presentational' },
    { path: '/component-composition', label: 'Component Composition' },
    { path: '/state-manager-with-reducers', label: 'State Manager with Reducers' },
    { path: '/higher-order-components', label: 'Higher-Order Components' },
    { path: '/compound-components', label: 'Compound Components' },
  ];

  return (
    <nav className="navigation">
      <div className="navigation__brand">
        <h2>React Design Patterns</h2>
      </div>
      <ul className="navigation__list">
        {navItems.map((item) => (
          <li key={item.path} className="navigation__item">
            <Link
              to={item.path}
              className={`navigation__link ${
                (item.exact && location.pathname === item.path) ||
                (!item.exact && location.pathname.startsWith(item.path))
                  ? 'navigation__link--active'
                  : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
