import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <h3>Share Feelings without being judged</h3>
            <div className="hero-btns">
                <Button className="btns" 
                buttonStyle="stb--outline"
                buttonSize="btn--medium"
                >Share Feelings
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
