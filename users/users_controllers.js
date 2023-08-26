const fs = require('fs')


const createUser = (req, res) => {
    const userData = fs.readFileSync('./users/users.json')
    const userDataJson = JSON.parse(userData)
    const user = req.body

    user.api_key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    if (user.username === 'stephen') {
        user.role = 'admin'
    }
    else {
        user.role = 'user'
    }

    userDataJson.push(user)

    fs.writeFileSync('./users/users.json', JSON.stringify(userDataJson, null, 4), (err) => {
        if (err) {
            res.status(500).send(err)
        }
    })
    res.status(201).send(`User added with name: ${user.username}`)
}

module.exports = {
    createUser
}