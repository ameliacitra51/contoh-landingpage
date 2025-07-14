import { Pool } from 'pg'

export const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todolist2',
    password: '1234',
    port: 5432, 
})
