import React from 'react';

import './card-collection.styles.scss';
import {garden} from '../../data/cards.data';
import CardPreview from '../card-preview/card-preview.component';
import Winner from '../winner/winner.components';

class CardCollection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            folder: props.folder,
            cards: [],
            winner: false
        }
    }

    componentDidMount = () => {
        if (this.state.folder === 'garden') {
            const cardsList = this.shuffleCards(garden.concat(garden));
            this.setState({cards: cardsList});
        }
    }

    shuffleCards = (arr) => {
        var j, x, i;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    }

    clickCard = (e) => {
        let element = e.target;
        if (e.target.nodeName === 'IMG') {
            element = element.parentElement;
        }
        
        element.classList.add('flipped');
        if (document.querySelectorAll('.flipped').length === 2) {
            const id1 = document.querySelectorAll('.flipped')[0].getAttribute('data-id');
            const id2 = document.querySelectorAll('.flipped')[1].getAttribute('data-id');

            if (id1 === id2) {
                document.querySelectorAll('.flipped').forEach(function(el) {
                    el.classList.add('done');
                });

                document.querySelectorAll('.flipped').forEach(function(el) {
                    el.classList.remove('flipped');
                });
            } 
            
        } else if (document.querySelectorAll('.flipped').length > 2) {
            document.querySelectorAll('.flipped').forEach(function(el) {
                el.classList.remove('flipped');
            });
            element.classList.add('flipped');
        }

        this.checkWinner();
    }

    checkWinner = () => {
        const points = document.querySelectorAll('.done').length;
        const numberOfCards = document.querySelectorAll('.card-preview').length;
        if (points === numberOfCards) {
            console.log('winner!');
            this.setState({winner: true});
        }
    }

    render() {
        const {folder, cards, winner} = this.state;

        return (
            <div className="card-collection">
                {
                    cards.map(({id, ...otherProps}, index) => (
                        <CardPreview key={index} 
                                     folder={folder} 
                                     handleClick={this.clickCard} 
                                     id={id}
                                     {...otherProps}/>
                    ))
                }

                {
                    winner ? <Winner /> : ''
                }
                
            </div>
        )
    }
}

export default CardCollection;