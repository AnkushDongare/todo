import { useState } from 'react'

const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        const newTodo = {
            id: Date.now(),
            text: text,
        };
        setTodos([...todos, newTodo]);
        setText('');
    }

    const handelDelete = (id) => {
        const updateTodos = todos.filter(todo => todo.id !== id);
        setTodos(updateTodos);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}
                        <button onClick={() => handelDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button>Add Todo</button>
            </form>
        </div>
    );
}


export default ToDo