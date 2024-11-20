import './App.css';
import ParkingSpace from './components/Parkingspace';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Wallet from './components/Wallet';

function App() {
  return (
    <Router>
  <div className="App">
    <Navbar />
    <Routes>
      
      <Route path='/signup'element={<SignUp/>}/>
      <Route path="/login" element={<Login />} />
      <Route path='/Wallet'element={<Wallet/>}/>
      <Route path='/parkingspace' element={<ParkingSpace/>}/>
    </Routes>
    <Footer />
 </div>
   </Router>


  );
}

export default App;