import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = (todo) => {
        setTasks(tasks => [...tasks, { todo }])
    };
    const remove = (e) => {
        console.log(e.target.parentNode)
        e.target.parentNode.remove();
    }

    return (
        <div>
            <div><NewTodoForm addTask={addTask} /></div>
            <ul className="TodoList">
                {tasks.map(({ todo }) => {
                    console.log(todo)
                    return < Todo
                        key={uuid()}
                        todo={todo}
                        remove={(e) => remove(e)}
                    />
                }
                )}
            </ul>
        </div>
    );
}

export default TodoList;