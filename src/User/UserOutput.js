import React from 'react';
import './User.css';

const useroutput = (props) => {
    return (
        <div className="name-card">
            <p>Example Name: {props.name}</p>
            <p>Second Example Text</p>
        </div>
    )
};

export default useroutput;