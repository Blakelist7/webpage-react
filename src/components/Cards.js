import React from 'react';
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
    return (
        <div className="cards">
            <h1>A community to spread positivity</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src= "./community1.jpg"
                        text="Share what's on your mind with the community"
                        path='/services'
                        label='Share feeling'/>
                        <CardItem
                        src="./community2.jpg" 
                        text="Share what are you doing with the community"
                        path='/services'
                        label='Share feeling'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
