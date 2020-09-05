import React, { useState } from 'react';
// import './NewTodoForm.css';

function NewTodoForm({ addTask }) {
    const INITIAL_STATE = {
        todo: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        addTask(formData.todo);
        setFormData(INITIAL_STATE);
    }

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <input
                id="todo"
                name="todo"
                type="text"
                placeholder="Add New Task"
                value={formData.todo}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    );
}

export default NewTodoForm;