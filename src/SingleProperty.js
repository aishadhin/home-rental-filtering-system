import React from 'react';

const SingleProperty = ({ singleProperty }) => {
    const { name, img, location, type, date, price } = singleProperty
    return (
        <div>
            <div className="card bg-base-100 shadow">
                <figure className="px-10 pt-10">
                    <img src={img} alt="property" className="rounded-xl" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <div className='grid grid-cols-2 gap-x-6'>
                        <p>Location: {location}</p>
                        <p>Type: {type}</p>
                        <p>Date: {date}</p>
                        <p>Price: ${price}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProperty;