const fs = require('fs')
const validateUser = (req, res, next) => {
    const userData = fs.readFileSync('./users/users.json')
    const userDataJson = JSON.parse(userData)
    const exists = userDataJson.find(user => user.username === req.body.username)
    if (!req.body.username || !req.body.username.trim()) {
        res.status(400).send('Username is required')
    } else if (!req.body.password || !req.body.password.trim()) {
        res.status(400).send('Password is required')
    } else if (exists) {
        res.status(400).send('Username already exists')
    }
    
    else {
        next()
    }
}

module.exports = {
    validateUser
}
