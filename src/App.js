import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

// Components
import Nav from './Components/Nav/Nav';
import Body from './Components/Body/Body';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Body />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;
