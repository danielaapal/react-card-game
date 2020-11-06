import React from 'react';
import CardCollection from '../../components/card-collection/card-collection.component';

import './game.styles.scss';

const Game = () => (
    <div className="game">
        <h1>Card Game</h1>
        <CardCollection folder="garden" />
    </div>
)

export default Game;