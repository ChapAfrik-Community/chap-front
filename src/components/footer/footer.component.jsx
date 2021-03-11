import React from 'react'
import { HashLink as Link} from 'react-router-hash-link';
import ChapAfrikWhite from '../../assets/images/chapAfrik-white.png';

function Footer() {
    return (
        // <!-- Footer -->
        // <!-- Footer -->
        <footer className="page-footer font-small indigo bg-dark mt-4">
        
          {/* <!-- Footer Links --> */}
          <div className="container text-center text-md-left">
        
            {/* <!-- Grid row --> */}
            <div className="row">
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto">
        
                {/* <!-- Links --> */}
                <img 
                src={ChapAfrikWhite}
                alt="logo2"
                style={{
                    width:'120px',
                    objectFit:'contain'
                }}
                className="navbar-brand mt-3 mb-4"
                />
        
                <ul className="list-unstyled">
                  
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto">
        
                {/* <!-- Links --> */}
                <h5 className="font-weight-bold text-white text-white mt-3 mb-2">Our Community</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <Link className="nav-link text-white" to="#about">About us</Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="#member">Meet our Team</Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="#">Contact us</Link>
                  </li>
                  
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto">
        
                {/* <!-- Links --> */}
                <h5 className="font-weight-bold text-white mt-3 mb-2">The Intership</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <Link className="nav-link text-white" to="#about">About</Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="#readyjoin">Apply Now</Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="#">Terms & policy</Link>
                  </li>
                 
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto">
        
                {/* <!-- Links --> */}
                <h5 className="font-weight-bold text-white  mt-3 mb-2">Get in touch</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <Link className="nav-link text-white" to="#">Email us</Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="#">Twitter</Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="#">Instagram</Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="#">Slack</Link>
                  </li>
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
            </div>
            {/* <!-- Grid row --> */}
        
          </div>
          {/* <!-- Footer Links --> */}
        
          {/* <!-- Copyright --> */}
          <div className="footer-copyright text-white py-3"> 
          <p className="ml-4 text-white">© 2021 ChapAfrik. All Rights Reserved</p> 
          </div>
          {/* <!-- Copyright --> */}
        
        </footer>
     
    )
}

export default Footer
