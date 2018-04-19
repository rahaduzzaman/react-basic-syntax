import React from 'react';

const userinput = (props) => {
    return (
        <div>
            <input style={props.passStyle} type="text" onChange={props.change} value={props.name} />
        </div>
    )
};

export default userinput;