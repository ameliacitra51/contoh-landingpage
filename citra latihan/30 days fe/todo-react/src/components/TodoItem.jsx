function TodoItem({ todo, index, deleteTodo, toggleCompleted }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: todo.completed ? '#c8e6c9' : '#f9f9f9',
        color: '#333',
        padding: '12px 16px',
        borderRadius: '8px',
        marginBottom: '10px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        textDecoration: todo.completed ? 'line-through' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(index)}
          style={{ marginRight: '12px', width: '18px', height: '18px' }}
        />
        <span style={{ fontSize: '16px' }}>{todo.text}</span>
      </div>
      <button
        onClick={() => deleteTodo(index)}
        style={{
          backgroundColor: '#ff5252',
          color: '#fff',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Hapus
      </button>
    </li>
  );
}

export default TodoItem;
