import React from 'react';
import { useEffect } from 'react';
import Navbar from './components/navbar';
import Portfolio from './pages/Portfolio';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/services';
import Contact from './pages/contact';
import About from './pages/about';
import Home from './pages/Home';
import Privacy from './pages/privacy';
import Legal from './pages/legal';

function App() {
  // const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })


  // useEffect(() => {
  //   const trailContainer = document.getElementById('main');

  //   const trailStatic = document.createElement('div');
  //   trailStatic.classList.add('cursor-trail-static');
  //   trailStatic.style.left = `${cursorPos.x}px`;
  //   trailStatic.style.top = `${cursorPos.y}px`;

  //   trailContainer?.appendChild(trailStatic)

  //   document.addEventListener('mousemove', (event) => {
  //     trailStatic.remove()
  //   })

  // }, [cursorPos])
  useEffect(() => {
    const trailContainer = document.getElementById('main');


    document.addEventListener('mousemove', (event) => {
      const trail = document.createElement('div');
      trail.classList.add('cursor-trail');
      // setCursorPos({
      //   x: event.clientX,
      //   y: event.clientY
      // })
      trail.style.left = `${event.clientX}px`;
      trail.style.top = `${event.clientY}px`;

      // cursorPos.x = event.clientX;
      // cursorPos.y = event.clientY
      trailContainer?.appendChild(trail);


      setTimeout(() => {
        trail.remove();
      }, 200);
    })


  }, [])
  return (
    <Router>
    
      <div id="main" className='.main-container w-[100%] bg-[#fff] flex flex-col items-center'>
      <Navbar />
        <div className='min-h-[100vh] max-w-[1740px] w-[100%] w-full  '>
          

          <Routes>
            <Route path='/' element={<Home />} />
           <Route path='/contact-us' element={<Contact />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/Legal' element={<Legal />} />
          </Routes>
          {/* <Home /> */}
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
