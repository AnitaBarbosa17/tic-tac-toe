import React, { useState } from 'react';
import Cell from './Cell'

const Board = () => {

    const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
    const [activePlayer, setActivePlayer] = useState("x");
    const [winner, setWinner] = useState("")

    const rules = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,4,8],
        [0,4,8],
        [2,4,6],
    ]

    const updateTurn = () => {
        rules.forEach(rule => {
            if( cells[rule[0]] !== "" && cells[rule[0]] === cells[rule[1]] && cells[rule[0]] === cells[rule[2]]) {
                setWinner( cells[rule[0]] )
                console.log("gano", winner)
            } 
        })
    }
    console.log( winner)
    const handleClick = (e, id) => {
        // console.log(id)
        if(activePlayer === "x" || activePlayer === "") {
            setActivePlayer("o")
            cells[id] = "x";
            setCells([...cells]);
        } else {
            setActivePlayer("x")
            cells[id] = "o";
            setCells([...cells]);
        }

        updateTurn()
    }

    return (
        <div className='board'>
            {cells.map((item, idx) => {

                return (
                    <Cell id={idx} handleClick={(e) => handleClick(e, idx)} value={item} />
                )
            })}
        </div>
    )
}

export default Board;