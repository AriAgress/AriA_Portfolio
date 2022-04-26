import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import Nav from './Components/Nav/Nav';
import Body from './Components/Body/Body';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
