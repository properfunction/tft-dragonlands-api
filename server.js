const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let champions = {
    'aatrox': {
        'origin': 'Shimmerscale',
        'class': 'Warrior',
        'cost': 1,
        'ability': 'Deathbringer Strike'
    },
    'anivia': {
        'origin': 'Jade',
        'class': 'Evoker, Legend',
        'cost': 3,
        'ability': 'Prismatic Storm'
    },
    'Ao Shin': {
        'origin': 'Tempest',
        'class': 'Dragon',
        'cost': 10,
        'ability': 'Lightning Rain'
    },
    'unknown': {
        'origin': 'unknown',
        'class': 'unknown',
        'cost': 0,
        'ability': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    console.log('Just hit!')
})

app.get('/api/:name', (request, response) => {
    const championName = request.params.name.toLowerCase()
    if(champions[championName]){
        response.json(champions[championName])
    }else{
        response.json(champions['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})