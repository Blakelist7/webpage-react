import React from 'react';
import '../App.css';
import { Button } from './Button';
import './LastSection.css';


function LastSection(){
    return(
        <div className="last-container">
            <h2>Why Let's Gtok</h2>
            <p>Lets Gtok aims to provide a safe space online
                for people to share and connect with genuine feelings.
                Users can share their feelings or activities even without 
                revealing their identity.
            </p>
            <div className="last-btns">
                <Button className="btns"
                buttonStyle="stb--outline"
                buttonSize="btn-medium">
                    Learn More
                </Button>
            </div>
        </div>
    )
}

export default LastSection;