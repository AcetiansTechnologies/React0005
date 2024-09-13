
import './App.css';
import NavHeader from './Components/NavHeader';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Text  from './Components/Text';
import AllPlaced from './Components/AllPlaced';
import WhyChoose from './Components/WhyChoose';
import Footer from './Components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CourcesNav from './Courrces/CourcesNav';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <NavHeader/>
      <Navbar/>
      
      
      
      <BrowserRouter>
        <Routes>
          <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/couresnav" element={<CourcesNav/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
