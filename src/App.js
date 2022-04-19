import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import projects from './Utils/ProjectObjects';

// Components
import Nav from './Components/Nav/Nav';
import Body from './Components/Body/Body';
import Projects from './Components/Projects/Projects';

function App({ projects }) {
  return (
    <div className='App'>
      <Nav />
      <Body />
      <Projects />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;
