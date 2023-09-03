import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Landing_page from './Components/Landing_page/Landing_page';
import Freedom from './Components/Freedom/Freedom';
import Endgame from './Components/Endgame/Endgame';
import Security from './Components/Security/Security';
import Newera from './Components/Newera/Newera';
import Pushing_togher from './Components/Pushing_togher/Pushing_togher';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Landing_page/>
    <Freedom/>
    <Endgame/>
    <Security/>
    <Newera/>
    <Pushing_togher/>
    <Footer/>
   
    </div>
  );
}

export default App;
