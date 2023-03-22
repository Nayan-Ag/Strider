import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Whyus from './components/Whyus';
import Testimonials from './components/Testimonials';
import Property from './components/Property';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Property></Property>
      <Whyus></Whyus>
      <Testimonials></Testimonials>
    </div>
  );
}

export default App;
