const db = require('../config/db');

//untuk mengambil semua todo dari databse
const getTodo = (req, res) => {
  db.query('SELECT * FROM todos', (err, result) => {
    if (err) {
      console.error("DB ERROR:", err);
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
};

//mengambil todo berdasarkan id
const getTodoById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM todos WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (result.length === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json(result[0]);
  });
};


//menambahkan todo
const addTodo = (req, res) => {
    const {text} = req.body;
    const query = 'INSERT INTO todos (text, completed) VALUES (?, ?)';
    db.query(query, [text, false], (err, result) => {
        if (err) return res.status(500).json({error: err});
        res.status(201).json({id: result.insertId, text, completed: false});
    });
};

//update todo
const updateTodo = (req, res) => {
    const {id} = req.params;
    const {completed} = req.body;
    const query = 'UPDATE todos SET completed = ? WHERE id = ?';
    db.query(query, [completed, id], (err) => {
        if (err) return res.status(500).json({error: err});
        res.json({id, completed});
    });
};

//hapus todo
const deleteTodo = (req, res) => {
    const {id} = req.params;
    db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({error: err});
        res.status(204).send();
    });
};

module.exports = {getTodo, getTodoById, addTodo, updateTodo, deleteTodo}