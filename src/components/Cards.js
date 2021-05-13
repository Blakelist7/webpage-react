import React from 'react';
import CardItem from './CardItem'
import './Cards.css';
import Image1 from './Images/image-1.png';
import Image2 from './Images/image-2.png';

function Cards() {
    return (
        <div className="cards">
            <h1>A community to spread positivity</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={Image1}
                        text="Share what's on your mind with the community"
                        label='Share feeling'
                        path='/services'
                        />
                        <CardItem
                        src={Image2} 
                        text="Share what are you doing with the community"
                        path='/services'
                        label='Share feeling'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
