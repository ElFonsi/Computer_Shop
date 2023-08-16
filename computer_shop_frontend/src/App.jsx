import logo from './logo.svg';
import './App.css';


import Header from './Components/header/header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import MainSection from './Components/MainSection/MainSection';
import Login from './Components/Login/Login';
import Singin from './Components/Singin/Singin'

function App() {
  return (
    <div className="App">
       <Header></Header>
       <MainSection></MainSection>
       <Footer></Footer> 
       {/* <Login></Login>
       <Singin></Singin> */}

       
    </div>
  );
}

export default App;
