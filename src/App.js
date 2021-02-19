import './App.css';
import About from './components/About';
import AboutChapAfrik from './components/AboutChapAfrik';
import Banner from './components/Banner';
import Nav from './components/Nav';
import JoinUs from './components/JoinUs';
import TeamMember from './components/TeamMember';
import ReadyJoin from './components/ReadyJoin';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Nav/>
      {/* banner */}
      <Banner/>
      {/* about the intentship  */}
      <About/>
      {/* about chapAfrik */}
      <AboutChapAfrik/>
      {/* JoinUs components */}
      <JoinUs/>
      {/* our team members */}
      <TeamMember/>
      {/* ready to join us  */}
      <ReadyJoin/>
      {/* Footer  */}
      <Footer/>
    </div>
  );
}

export default App;
