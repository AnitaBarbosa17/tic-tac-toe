import React from "react";

const Cell = ({handleClick, value}) => {

    

    return (
        <button className='cell' onClick={handleClick}>{value}</button>
    )
}

export default Cell;