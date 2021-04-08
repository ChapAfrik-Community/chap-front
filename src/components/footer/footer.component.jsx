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
                className="navbar-brand footer-logo mt-3 mb-4"
                />
        
                <ul className="list-unstyled">
                  
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto">
        
                {/* <!-- Links --> */}
                <h5 className="font-weight-bold text-white footer-title text-white mt-3 mb-2">Our Community</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <Link className="nav-link footer-item text-white" to="#about">About us</Link>
                  </li>
                  <li>
                    <Link className="nav-link footer-item text-white" to="#member">Meet our Team</Link>
                  </li>
                  <li>
                    <Link className="nav-link footer-item text-white" to="#contact">Contact us</Link>
                  </li>
                  
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto">
        
                {/* <!-- Links --> */}
                <h5 className="font-weight-bold footer-title text-white mt-3 mb-2">The Intership</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <Link className="nav-link footer-item text-white" to="#about">About</Link>
                  </li>
                  <li>
                   <a href='https://forms.gle/cudtLhsYLHYHnovT7' target="_blank" rel='noopener noreferrer' className="nav-link footer-item text-white">Apply Now</a>
                  </li>
                  <li>
                    <Link className="nav-link footer-item text-white" to="#">Terms & policy</Link>
                  </li>
                 
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto">
        
                {/* <!-- Links --> */}
                <h5 className="font-weight-bold footer-title text-white  mt-3 mb-2">Get in touch</h5>
        
                <ul className="list-unstyled">
                  <li>
                   <a href='https://#' target="_blank" rel='noopener noreferrer' className="nav-link footer-item text-white">Instagram</a>
                  </li>
                  <li>
                   <a href='https://twitter.com/chapafrik' target="_blank" rel='noopener noreferrer' className="nav-link footer-item text-white">Twitter</a> 
                  </li>
                  <li>
                   <a href='https://www.linkedin.com/company/chapafrik' target="_blank" rel='noopener noreferrer' className="nav-link footer-item text-white">Linkedin</a>
                  </li>
                  <li>
                   <a href='https://join.slack.com/t/chapafrik/shared_invite/zt-nmkpw4dd-w_mIdMC39OoR_H4y_P6LpA' target="_blank" rel='noopener noreferrer' className="nav-link footer-item text-white">Slack</a>
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
          <small className="ml-4 text-white">© 2021 ChapAfrik. All Rights Reserved</small> 
          </div>
          {/* <!-- Copyright --> */}
        
        </footer>
     
    )
}

export default Footer
