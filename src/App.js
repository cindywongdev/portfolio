import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Work'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
