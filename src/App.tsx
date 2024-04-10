import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import PageNotFound from './pages/PageNotFound';
import StoreProvider from './contexts/StoreProvider';

import './App.css';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
