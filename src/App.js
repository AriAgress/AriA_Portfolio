import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import projects from './Utils/ProjectObjects';

// Components
import Nav from './Components/Nav/Nav';

function App({ projects }) {
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
