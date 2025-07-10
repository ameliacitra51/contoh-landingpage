const express = require('express');
const cors = require('cors');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', todoRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;
