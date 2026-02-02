import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss'
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppNavbar from './common/AppNavbar'
import Home from './pages/Home/Home'
import CaseStudies from './pages/CaseStudies/CaseStudies'
import Contact from './pages/Contact/Contact'
import CaseDetails from './pages/CaseStudies/CaseDetails';

function App() {

  return (
    <div className="app dark">
      <Container>
        <AppNavbar />
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
