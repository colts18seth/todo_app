import React from 'react';

function Todo({ todo, remove }) {
    return (
        <li className="Todo">
            {todo}
            <button onClick={remove}>X</button>
        </li>
    );
}

export default Todo;