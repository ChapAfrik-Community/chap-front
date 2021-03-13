import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
// import components 
import Header from './components/header/header.component';
import Banner from './components/banner/banner.component';
import InternShip from './components/internship/internship.component';
import Join from './components/join/join.component';
import Member from './components/member/member.component';
import ReadyJoin from './components/readyJoin/readyJoin.component';
import Footer from './components/footer/footer.component';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';

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
        <Contact/>
        <ReadyJoin/>
        <Route path='/blank' component={() => { 
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
