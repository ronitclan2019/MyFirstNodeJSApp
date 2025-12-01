const express = require('express')
const app = express()
const logger = require('morgan')
const PORT = process.env.PORT || 8080;

app.use(logger('dev'))

app.get('/', (req, res) => {
    res.status(200)
    res.send('Working...')
})

app.get('/pizzas', (req, res) => {
    res.status(200)
    res.json({
        pizzas: [
            {
                type: 'pepperoni', 
                size: 'large'
            },
            {
                type: 'meat lovers',
                size: 'xlarge'
            },
            {
                type: 'buffalo chicken',
                size: 'medium'
            }
        ]
    })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app
