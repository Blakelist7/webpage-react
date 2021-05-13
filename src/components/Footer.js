import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the community to receive our latest
                    features
                </p>
                <p className="footer-subscription-text">
                    Any thoughts?
                </p>
                <div className="input-area">
                    <form>
                        <input type="text" name="name" placeholder="Name" className="footer-input"></input>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input">
                        </input>
                        <input type="text" name="message" placeholder="Enter your message" className="footer-input"></input>
                        <Button buttonStyle='btn--outline'>Submit</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
               <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <i className="fab fa-google"></i> Let's Gtok
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link className="social-icon-link"
                        to="/"
                        target="_blank"
                        aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link"
                        to="/"
                        target="_blank"
                        aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>     
            </section>  
        </div>
    )
}

export default Footer
