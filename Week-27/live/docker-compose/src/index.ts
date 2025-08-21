import express from 'express';
import { PrismaClient } from './generated/prisma/index.js';
import argon2 from 'argon2'

const app = express();
const PORT = 3000;
const prismaClient = new PrismaClient();
app.use(express.json())

app.get('/', async (req, res) => {
    const username = req.body
    try {
        const user = await prismaClient.user.findFirst({
            where: {
                username: username
            }
        })
        res.json({
            user
        })
    } catch (e) {
        console.error(e)
        res.json({
            error: e
        })
    }
})

app.post('/', async (req, res) => {
    const { username, password } = req.body
    const hashedPassword = await argon2.hash(password)

    try {
        await prismaClient.user.create({
            data: {
                username: username,
                password: hashedPassword
            }
        })

        res.json({
            message: "User Created !"
        })
    } catch (e) {
        console.error(e)
        res.json({
            error: e
        })
    }

})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})