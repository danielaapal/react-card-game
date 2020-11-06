import React from 'react';

import './card-preview.styles.scss';

const CardPreview = ({id, folder, name, image, handleClick}) => (
    <div className="card-preview"
         onClick={handleClick}
         data-id={`${id}`}>
        <img alt={name} src={`../../assets/${folder}/${image}`} />
    </div>
)

export default CardPreview;

// {`${selected ? 'selected': ''}  