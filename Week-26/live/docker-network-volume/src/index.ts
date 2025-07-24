import express from 'express'
import { PrismaClient } from './generated/prisma';
import argon2 from 'argon2'

const client = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/user', async (req, res) => {
    const username = req.body.username
    try{
        const user = await client.user.findUnique({
            where: {
                username: username
            }
        })

        res.json({
            data: user
        })
    }catch(e) {
        res.json({
            error: e
        })
    }
})

app.post('/user', async (req, res) => {
    const { name, username, password } = req.body
    const hashedPassword = await argon2.hash(password);
    try{
        const user = await client.user.create({
            data: {
                name: name,
                username: username,
                password: hashedPassword
            }
        })
        res.json({
            message: "Signup Successful!",
            data: user
        })
    }catch(e){
        res.json({
            error: e
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on PORT - ${PORT}`)
})