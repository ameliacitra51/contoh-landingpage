import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/todos');
        console.log('Data dari backend', res.data)
        setTodo(res.data);
      } catch (error) {
        console.error('Gagal mengambil data todo', error);
      }
    };
    fetchTodo();
  }, []);

  const addTodo = async (text) => {
    if (text.trim() === '') return;
    try {
      const res = await axios.post('http://localhost:5000/api/todos', { text });
      setTodo([...todo, res.data]);
    } catch (error) {
      console.error('Gagal menambahkan todo', error);
    }
  };

  const toggleCompleted = async (index) => {
    const current = todo[index];
    const updated = { ...current, completed: !current.completed };

    try {
      await axios.put(`http://localhost:5000/api/todos/${current.id}`, {
        completed: updated.completed
      });
      const newTodo = [...todo];
      newTodo[index] = updated;
      setTodo(newTodo);
       console.log("Berhasil update:", updated);
    } catch (error) {
      console.error('Gagal update todo', error);
    }
  };

  const deleteTodo = async (index) => {
    const id = todo[index].id;
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      const newTodo = [...todo];
      newTodo.splice(index, 1);
      setTodo(newTodo);
    } catch (error) {
      console.error('Gagal menghapus todo', error);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>To-do List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted}/>
    </div>
  );
}

export default App;
