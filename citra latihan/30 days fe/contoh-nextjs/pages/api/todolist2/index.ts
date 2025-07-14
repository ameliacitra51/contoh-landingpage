import {db} from '@/lib/dbpostgres'
import type { NextApiRequest, NextApiResponse } from 'next'

type Todo = {
    id: number
    text: string
    completed: boolean
}

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    const {method} = req

    switch (method) {
        case 'GET': {
            const result = await db.query('SELECT * FROM todo ORDER BY id DESC')
            res.status(200).json(result.rows)
            break
        }

        case 'POST': {
            const {text} = req.body
            const result = await db.query('INSERT INTO todo (text) VALUES ($1) RETURNING *',
                [text])
            res.status(200).json(result.rows[0])
            break
        }

        case 'PUT': {
            const {id, text, completed} = req.body
            try {
                if (text !== undefined) {
                    await db.query('UPDATE todo SET text = $1 WHERE id = $2', [text, id])
                }

                if (completed !== undefined) {
                    await db.query('UPDATE todo SET completed = $1 WHERE id = $2', [completed, id])
                }
                res.status(200).json({message: 'berhasil di update'})
            } catch (error) {
                console.error(error)
                res.status(500).json({message: 'gagal mengupdate todo'})
            }
            break
        }

        case 'DELETE': {
            const {deleteId} = req.body
            await db.query('DELETE FROM todo WHERE id = $1', [deleteId])
            res.status(200).json({message: 'berhasil menghapus todo'})
        }
    
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}