import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
        <div class="container">
        <div class="row">
          
        <div class="col-xs-12 col-sm-6 col-md-3">
        <div class="widget subscribe no-box">
        <h5 class="widget-title">46Shops.com<span></span></h5>
        <p>This website provides Products to your destination at our localle in MP 46 and as we grow we will try to expand our site to various other places </p>
        </div>
        </div>
        
        <div class="col-xs-12 col-sm-6 col-md-3">
        <div class="widget no-box">
        <h5 class="widget-title">Quick Links<span></span></h5>
        <ul class="thumbnail-widget">
        <li>
        <div class="thumb-content"><Link to="/register">Get Started</Link></div> 
        </li>
        <li>
        <div class="thumb-content"><a href="/cart">Cart</a></div> 
        </li>
        </ul>
        </div>
        </div>
        
        <div class="col-xs-12 col-sm-6 col-md-3">
        <div class="widget no-box">
        <h5 class="widget-title">Get Started<span></span></h5>
        <p>Make your First Order In Quick Steps.</p>
        <Link class="btn btnn" to="/register" target="_blank">Register Now</Link>
        </div>
        </div>
        
        <div class="col-xs-12 col-sm-6 col-md-3">
        
        <div class="widget no-box">
        <h5 class="widget-title">Contact Us<span></span></h5>
        
        <p><a href="mailto:alencolins@gmail.com" title="glorythemes">alencolins@gmail.com</a></p>
        <ul class="social-footer2">
        
        </ul>
        </div>
        </div>
        
        </div>
        </div>
        </div>
          
        <div class="footer-copyright">
        <div class="container">
        <div class="row">
        <div class="col-md-12 text-center">
        <p>Copyright © Sanket Bagad. All rights reserved.</p>
        </div>
        </div>
        </div>
        </div>
        </footer>
        </>
    )
}

export default Footer
