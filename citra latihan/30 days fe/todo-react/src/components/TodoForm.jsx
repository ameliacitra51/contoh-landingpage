import { useState } from "react";

function TodoForm({addTodo}) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Add Task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                flex: 1,
                padding: '10px 14px',
                fontSize: '16px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                outline: 'none',
                }}
            />
            <button
                type="submit"
                style={{
                backgroundColor: '#685ed8',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                }}
            >
                Add +
            </button>
        </form>
    );
}

export default TodoForm;