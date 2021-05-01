import React from 'react';

const Card = (props) => {
    const {name, email, id} = props;
    return (
        
        <div className='tc grow bg-washed-yellow br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='photoRobot' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;