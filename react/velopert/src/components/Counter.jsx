import React, { useReducer, useState } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT": {
            return state + 1;
        }
        case "DECREMENT": {
            return state - 1;
        }
        default: {
            return 0;
        }
    }
}

const Counter = ({ style, showAndHideCounter }) => {
    const [number, dispatch] = useReducer(reducer, 0);
    function add() {
        dispatch({ type: "INCREMENT" });
    };
    function sub() {
        dispatch({ type: "DECREMENT" });
    };
    function reset() {
        dispatch({ type: "RESET" })
    }
    return (
        <div style={style} className='counter'>
            <div className="counterWrapper">
                <h1>{number}</h1>
                <div className="button-wrapper">
                    <button onClick={sub}>sub</button>
                    <button onClick={reset}>reset</button>
                    <button onClick={add}>add</button>
                </div>
                <button onClick={showAndHideCounter}>닫기</button>
            </div>
        </div>
    );
};

export default Counter;