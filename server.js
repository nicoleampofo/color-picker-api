const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

// template
// '': {
    // 'Name': '',
    // 'RGB': '(, , )',
    // 'Hex': '#',
    // 'HSL': '(, , )'
// },

let colors = {
    'red': {
        'name': 'Red',
        'RGB': 'RGB: (255, 0, 0)',
        'Hex': 'Hex: #ff0000',
        'HSL': 'HSL: (0, 100%, 50%)'
    },

    'orange': {
        'name': 'Orange',
        'RGB': 'RGB: (255, 165, 0)',
        'Hex': 'Hex: #ffa500',
        'HSL': 'HSL: (39, 100%, 50%)',
    },

    'yellow': {
        'name': 'Yellow',
        'RGB': 'RGB: (255, 255, 0)',
        'Hex': 'Hex: #ffff00',
        'HSL': 'HSL: (60, 100%, 50%)'
    },

    'green': {
        'Name': 'Green',
        'RGB': '(0, 128, 0',
        'Hex': '#008000',
        'HSL': '(120, 100%, 25%)'
    },

    'blue': {
        'Name': 'Blue',
        'RGB': '(0, 0, 255)',
        'Hex': '#0000ff',
        'HSL': '(240, 100%, 50%)'
    },

    'purple': {
        'Name': 'Purple',
        'RGB': '(128, 0, 128)',
        'Hex': '#800080',
        'HSL': '(300, 100%, 25%)'
    },
    'pink': {
        'Name': 'Pink',
        'RGB': '(255, 192, 203)',
        'Hex': '#ffc0cb',
        'HSL': '(350, 100%, 88%)'
    },
    'white': {
        'Name': 'White',
        'RGB': '(255, 255, 255)',
        'Hex': '##ffffff',
        'HSL': '(0, 0%, 100%)'
    },
    'black': {
        'Name': 'Black',
        'RGB': '(0, 0, 0)',
        'Hex': '#000000',
        'HSL': '(0, 0%, 0%)'
    },
    'brown': {
        'Name': 'Brown',
        'RGB': '(165, 42, 42)',
        'Hex': '#a52a2a',
        'HSL': '(0, 59%, 41%)'
    },
    'gray': {
        'Name': 'Gray',
        'RGB': '(128, 128, 128)',
        'Hex': '#808080',
        'HSL': '(0, 0%, 50%)'
    },
    'unknown': {
        'name': 'Unknown',
        'RGB': 'RGB: unknown',
        'Hex': 'Hex: unknown',
        'HSL': 'HSL: unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/colors/:colorName', (request, response) => {
    const colName = request.params.colorName.toLowerCase()
    console.log(colName)
    if(colors[colName]){
        response.json(colors[colName])
    } else {
        response.json(colors['unknown'])
    }

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})