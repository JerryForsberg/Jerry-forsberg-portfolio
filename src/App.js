import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppNavbar from './common/AppNavbar'
import Home from './pages/Home/Home'
import CaseStudies from './pages/CaseStudies/CaseStudies'
import Contact from './pages/Contact/Contact'
import CaseDetails from './pages/CaseStudies/CaseDetails';

function App() {

  const [theme, setTheme] = useState('light'); // State to manage theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <div className={`app ${theme}`}> {/* Apply theme class */}
      <Container>
        <AppNavbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caseStudies" element={<CaseStudies />} />
          <Route path="/case/:id" element={<CaseDetails />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
