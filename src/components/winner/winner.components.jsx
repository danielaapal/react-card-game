import React from 'react';
import { Link } from 'react-router-dom';

import './winner.styles.scss';

const Winner = () => (
    <div className="winner">
         <span>You win!</span>

         <Link to={`/`}> New game</Link>
    </div>
)

export default Winner;