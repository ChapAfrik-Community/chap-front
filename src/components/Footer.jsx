import React from 'react'
import '../css/Footer.css';
function Footer() {
    return (
        <footer class="footer section">
            <div class="footer__container bd-container bd-grid">
                <div class="footer__content">
                    <h3 class="footer__title">
                        ChapAfrik
                    </h3>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Our Community</h3>
                    <ul>
                        <li><a href="#" class="footer__link">About us </a></li>
                        <li><a href="#" class="footer__link">Meet our team</a></li>
                        <li><a href="#" class="footer__link">Contact us</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Our Company</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Blog</a></li>
                        <li><a href="#" class="footer__link">About us</a></li>
                        <li><a href="#" class="footer__link">Our mision</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">The Internship</h3>
                    <ul>
                        <li><a href="#" class="footer__link">About</a></li>
                        <li><a href="#" class="footer__link">Apply now</a></li>
                        <li><a href="#" class="footer__link">Terms & policy</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Get in touch</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Email us</a></li>
                        <li><a href="#" class="footer__link">Twitter</a></li>
                        <li><a href="#" class="footer__link">Instagram</a></li>
                        <li><a href="#" class="footer__link">Slack</a></li>
                    </ul>
                </div>
            </div>

            <p class="footer__copy">&#169; 2021 ChapAfrik. All right reserved</p>
        </footer>

    )
}

export default Footer
