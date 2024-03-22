import React from "react";

const Card = ({img, title, date, price, description}) => {
    return (
        <div className='card'>
            <p id="heart">❤️</p>
            <img src={img} width={450} alt={title} />
            <h3 id="title">{title}</h3>
            <p id="description">{description}</p>
            <p id="date">{date}</p>
            <p id="price">${price} for one night</p>
        </div>
    )
};

export default Card;