import React from 'react';

import './card-preview.styles.scss';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const CardPreview = ({id, folder, name, image, handleClick}) => {
    const images = importAll(require.context('../../assets/garden/', false, /\.(png|jpe?g|svg)$/));
    console.log(images);
    return (
         <div className="card-preview"
            onClick={handleClick}
            data-id={`${id}`}>
            <img alt={name} src={images[image].default} />
        </div>
    )
}

export default CardPreview;
