import React,{ useEffect} from 'react'
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
import ScrollReveal from 'scrollreveal';




function App() {


  const sr = ScrollReveal({
    distance: '40px',
    duration: 1800,
    reset: true
  });
  
  useEffect(()=>{
    // eslint-disable-next-line
    sr.reveal(`.animation, .about-animation,.about-item,
    .join-title,.join-item, .member-name, .member-nation, ready-title, .footer-title, .footer-item`,{
      origin: 'top',
      interval: 200
    });

    // eslint-disable-next-line
    sr.reveal(`.about-img, .contact-card`,{
      origin: 'right'
    })


    // eslint-disable-next-line
    sr.reveal(`.about-title, .contact-title`,{
      origin: 'left'
    });


    // eslint-disable-next-line
    sr.reveal(`.member-avatar, .button-ready, .footer-logo`,{
      origin:'top'
    })

  },'')

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
