import React from 'react';

const Box = (props) => {
    return (
        <div className="box" key={props.square.id}></div>
    );
}

export default Box;
