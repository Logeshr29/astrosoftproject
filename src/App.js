import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { SocialIcon } from 'react-social-icons'
import OverlayContainer from './components/canvasEditor';
// import ImageCombiner from './components/canvasEditor';
import './css/elegant-icons.css';
// import './css/owl.carousel.min.css';
// import './css/slicknav.min.css';
import './css/style.css';
import './css/footer.css'
import './css/OverlayContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, BrowserRouter } from 'react-router-dom';

// import './public/fonts/elegant-icons.css';


function App() {
  return (
    <Router>
    <Home/>
  </Router>);
}

export default App;
