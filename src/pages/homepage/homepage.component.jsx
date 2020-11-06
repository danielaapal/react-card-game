import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <h1>Choose a game</h1>
        
        <Link to='/game'>
            <div className="card-game">
                <img src='../../assets/garden/flower.png'/>
                <span>Card Game - Garden</span>
            </div>
        </Link>


        <p className="flaticon">Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>

    </div>
)

export default HomePage;