const express = require("express")
const cors = require('cors')


const app = express()
app.use(cors())
const PORT = process.env.PORT || 8000

let actors = {
    'salman': {
        'age': 54,
        'bith Location': 'Mumbai',
        'orgin From': 'indore'
    },
    'shahrukh': {
        'age': 53,
        'bith Location': 'Delhi',
        'orgin From': 'Delhi'
    },
    'ali fazal': {
        'age': 38,
        'bith Location': 'Lucknow',
        'orgin From': 'up'
    },
    'amir': {
        'age': 52,
        'bith Location': 'Mumbai',
        'orgin From': 'mumbai'
    },
    'unknown': {
        "age": 'unknown',
        'birth Location': 'unknown',
        'origin From': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get("/api/actors/:actorName", (request, response) => {
    const actorName = request.params.actorName
    if (actors[actorName]) {
        response.json(actors[actorName])
    } else {
        response.json(actors['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`Server is runnung on port ${PORT}`)
})