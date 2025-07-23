import express from 'express'

const app = express();

const PORT = 3001;

app.get('/', (req, res) => {
    res.json({
        message: "Hi there"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})