import connection from '../../mysql/connection'

export default async function handler(req, res) {
    try {
        const { pid } = req.body
        const queryresult = await connection.awaitQuery(`SELECT * FROM users WHERE url = ?`, [pid]);
        const response = { ...queryresult[0] }
        res.json(response)
    } catch (err) {
        res.json(err);
        res.status(500).end()
    }
}