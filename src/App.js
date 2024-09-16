
import './App.css';
import NavHeader from './Components/NavHeader';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Text  from './Components/Text';
import AllPlaced from './Components/AllPlaced';
import WhyChoose from './Components/WhyChoose';
import Footer from './Components/Footer';
import {BrowserRouter as Router,Routes,Route, useLocation} from 'react-router-dom'
import CourcesNav from './Courrces/CourcesNav';
import Home from './Components/Home';
import header1 from './images/traing-header.jpg';
import header2 from './images/header-2.jpg';
import header3 from './images/header-3.jpg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';



function App() {
  const dispatch = useDispatch();
  const loadCourses = async () => {
    try {
      const response = await axios.get('https://training-beta.acetians.com/admin/get-all.php', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch({ type: 'ADD_COURSE', payload: response.data });
    } catch (error) {
      console.error('Error fetching courses:', error);
      // Handle the error appropriately here, e.g., show an error message to the user
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);
  
  return (
    <div className="App">
      
      
      
      
      <Router>
      <NavHeader/>
      <Navbar/>
        <Routes> 
        <Route path="/" element={<Home bgImage={header1} title="Educator Programs" description="Empower your students with cutting-edge data science and accelerated computing knowledge. Gain access to powerful GPUs, extensive course materials, and hands-on training to enhance your curriculum." />}/>

<Route path="/workshops" element={<Home bgImage={header2} title="Instructor Led Workshops" description="Join immersive workshops led by expert instructors, designed to advance your data science and accelerated computing skills. Get practical experience using GPUs and specialized tools." />}/>

<Route path="/enterprise" element={<Home bgImage={header3} title="Enterprise Solutions" description="Transform your organization with scalable data science and accelerated computing solutions. Access top-tier GPUs, customizable course materials, and hands-on training tailored for businesses." />}/>
          <Route path="/course/:info" element={<CourcesNav  />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
