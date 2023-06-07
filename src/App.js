import './App.css';
import Navbar from './component/Navbar/Navbar';
import Landingpage from './pages/LandingPage/Landingpage';
import Explore from './pages/Explore/Explore';
import Footer from './component/Footer/Footer';
import SingleR from './pages/Propertypage/Property1/Property'
import GroupC from './pages/Propertypage/Property2/Property'
import MicroC from './pages/Propertypage/Property3/Property'
import FamilyR from './pages/Propertypage/Property4/Property'
import SingleC from './pages/Propertypage/Property5/Property'
import DoubleR from './pages/Propertypage/Property6/Property'
import FamilyC from './pages/Propertypage/Property7/Property'
import MicroR from './pages/Propertypage/Property8/Property'
import DoubleC from './pages/Propertypage/Property9/Property'
import About from './pages/About/About'
import Bot from './Chatbot/chat'

import Login from './validation/components/Login'
import Register from "./validation/components/Register";
import Profile from "./validation/components/Profile";
import BoardUser from "./validation/components/BoardUser";
import BoardModerator from "./validation/components/BoardModerator";
import BoardAdmin from "./validation/components/BoardAdmin";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landingpage />} />
          <Route exact path='/explore' element={<Explore />} />
          <Route exact path='/about' element={<About />} />
          <Route path='/single_room' element={<SingleR />} />
          <Route path='/group_cabin' element={<GroupC />} />
          <Route path='/micro_cabin' element={<MicroC />} />
          <Route path='/family_room' element={<FamilyR />} />
          <Route path='/single_cabin' element={<SingleC />} />
          <Route path='/double_room' element={<DoubleR />} />
          <Route path='/family_cabin' element={<FamilyC />} />
          <Route path='/micro_room' element={<MicroR />} />
          <Route path='/double_cabin' element={<DoubleC />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
