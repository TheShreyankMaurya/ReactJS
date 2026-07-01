import { useState } from "react";

export default function Ludo() {
    let [move, setMove] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });

    function updateBlue() {
        setMove((prevMove) => {
            return { ...prevMove, blue: prevMove.blue + 1 };
        });
    }

    function updateRed() {
        setMove((prevMove) => {
            return { ...prevMove, red: prevMove.red + 1 };
        });
    }

    function updateGreen() {
        setMove((prevMove) => {
            return { ...prevMove, green: prevMove.green + 1 };
        });
    }

    function updateYellow() {
        setMove((prevMove) => {
            return { ...prevMove, yellow: prevMove.yellow + 1 };
        });
    }

    return (
        <div>
            <p>Game begins!</p>
            <div>
                <p>Blue Moves = {move.blue}</p>
                <button onClick={updateBlue}>+1</button>

                <p>Red Moves = {move.red}</p>
                <button onClick={updateRed}>+1</button>

                <p>Green Moves = {move.green}</p>
                <button onClick={updateGreen}>+1</button>

                <p>Yellow Moves = {move.yellow}</p>
                <button onClick={updateYellow}>+1</button>
            </div>
        </div>
    );
}
