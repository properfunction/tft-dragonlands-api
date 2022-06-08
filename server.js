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
    'aoshin': {
        'origin': 'Tempest',
        'class': 'Dragon',
        'cost': 10,
        'ability': 'Lightning Rain'
    },
    'ashe': {
        'origin': 'Jade',
        'class': 'Dragonmancer, Swiftshot',
        'cost': 2,
        'ability': 'Volley'
    },
    'aurelionsol': {
        'origin': 'Astral',
        'class': 'Dragon, Evoker',
        'cost': 10,
        'ability': 'Black hole'
    },
    'bard': {
        'origin': 'Guild',
        'class': 'Bard, Mystic',
        'cost': 5,
        'ability': 'Tempered Fate'
    },
    'braum': {
        'origin': 'Scalescorn',
        'class': 'Guardian',
        'cost': 2,
        'ability': 'Unbreakable'
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

app.get('/champs/:name', (request, response) => {
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