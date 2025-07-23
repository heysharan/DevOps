import express from 'express'

const app = express();;

app.get('/', (req, res) => {
    res.json({
        message: "Hi there"
    })
})

app.listen(3000, () => {
    console.log(`Server running on PORT 3000`)
})