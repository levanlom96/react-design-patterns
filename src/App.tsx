import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import ContainerPresentationalPage from './pages/ContainerPresentationalPage/ContainerPresentationalPage';
import ComponentCompositionPage from './pages/ComponentComposition/ComponentCompositionPage';
import StateManagerWithReducersPage from './pages/StateManagerWithReducers/StateManagerWithReducersPage';
import HigherOrderComponentsPage from './pages/HigherOrderComponentsPage/HigherOrderComponentsPage';
import CompoundComponentsPage from './pages/CompoundComponentsPage/CompoundComponentsPage';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/container-presentational" element={<ContainerPresentationalPage />} />
            <Route path="/component-composition" element={<ComponentCompositionPage />} />
            <Route path="/state-manager-with-reducers" element={<StateManagerWithReducersPage />} />
            <Route path="/higher-order-components" element={<HigherOrderComponentsPage />} />
            <Route path="/compound-components" element={<CompoundComponentsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App

