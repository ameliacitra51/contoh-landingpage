const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'todolist'
});

db.connect((err) => {
    if (err) {
        console.error('Gagal menyambungkan ke databse', err);
    } else {
        console.log('Terhubung ke database')
    }
});

module.exports = db;