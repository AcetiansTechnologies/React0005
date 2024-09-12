
import './App.css';
import NavHeader from './Components/NavHeader';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Text  from './Components/Text';
import AllPlaced from './Components/AllPlaced';
import WhyChoose from './Components/WhyChoose';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavHeader/>
      <Navbar/>
      <Header/>
      <Text/>
      <AllPlaced/>
      <WhyChoose/>
      <Footer/>

    </div>
  );
}

export default App;
