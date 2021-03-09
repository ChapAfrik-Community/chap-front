import './App.css';
import Header from './components/header/header.component';
import Banner from './components/banner/banner.component';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import InternShip from './components/internship/internship.component';
import Join from './components/join/join.component';
import Member from './components/member/member.component';
import ReadyJoin from './components/readyJoin/readyJoin.component';
import Footer from './components/footer/footer.component';
import About from './components/about/about.component';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Banner/>
      <div className="container">
        <InternShip/>
        <About/>
        <Join/>
        <Member/>
        <ReadyJoin/>
        <Route path='/privacy-policy' component={() => { 
            window.location.href = 'https://www.google.com'; 
            return null;
        }}/>
      </div>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
