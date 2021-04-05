import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Services from './components/Services'

import { Particles,  ShapeType } from 'react-particles-js'
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
  <>
    <Particles
      className="particles-canvas" 
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }}

    />
    <Navbar />
    <Header />
    <AboutMe />
    <Services />
  </>
  )
}

export default App;
