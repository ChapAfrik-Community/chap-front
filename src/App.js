import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Nav/>
      {/* banner */}
      <Banner/>
      {/* about the intentship  */}
      <About/>
    </div>
  );
}

export default App;
