const express = require('express')
const inventoryRouter = require('./router/inventory_route.js');
const usersRouter = require('./users/users_route.js');
  
// create an express application
const app = express()

// port
const port = 8000;

// middleware
app.use(express.json())

// inventory
app.use('/items', inventoryRouter);

// user creation
app.use('/users', usersRouter);

// 404
app.get('*' , (req, res) => {
    res.status(404).send('404 Item Not Found')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
    }
)