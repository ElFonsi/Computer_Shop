import logo from './logo.svg';
import './App.css';


import Header from './Components/header/header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import MainSection from './Components/MainSection/MainSection';


function App() {
  return (
    <div className="App">
       <Header></Header>
       <MainSection></MainSection>
       <Footer></Footer>
    </div>
  );
}

export default App;
