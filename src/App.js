import { Routes, Route } from 'react-router-dom';
import NavBar from './componets/NavBar';
import MyResume from './pages/MyResume';
import About from './pages/About'
import Home from './pages/Home'
import Footer from './componets/Footer';
import Details from './pages/Details';

function App() {
  return (

    <div>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/myresume' element={<MyResume/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/details/*' element={<Details/>}/>
        </Routes>
      </div>

      <Footer className="w-full" />
    </div>
  );
}

export default App;
