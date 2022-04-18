import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

// Components
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;
