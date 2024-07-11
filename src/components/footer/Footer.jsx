import React from 'react';
import './footer.css';
import navLogo from '../../assets/Nav_Logo.svg';
import { BsDisplay } from 'react-icons/bs';

function Footer() {
  return (
    <footer class="footer-section">
        <div class="container">
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src={navLogo} class="img-fluid" alt="logo"/></a>
                            </div>
                          <div className='team-section'>
                            <div class="footer-widget-heading">
                                <h3>Team</h3>
                            </div>
                            <ul>
                                <li><a href="#">Board Members</a></li>
                                <li><a href="#">Club Members</a></li>
                            </ul>
                          </div>
                          <div className='Resources-section'>
                            <div class="footer-widget-heading">
                                <h3>Resources</h3>
                            </div>
                            <ul>
                                <li><a href="#">Releases</a></li>
                                <li><a href="#">Projects</a></li>
                            </ul>
                          </div>
                          <div className='club-section'>
                            <div class="footer-widget-heading">
                                <h3>Club</h3>
                            </div>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Join us</a></li>
                            </ul>
                          </div>
                          <div className='subscribe-section'>
                          <div class="footer-widget-heading">
                                <h3>Subscribe to our newsletter</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button>search</button>
                                </form>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2024, Rotaract Club of Coimbatore Royals</p>
                        </div>
                        <div className="credits">Designed By <span>SquadofCreators</span></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer