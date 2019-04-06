const express = require('express')
const index = require('./routes/index.js');
// const indexDb = require('./routes/indexDb.js');
const mongoose = require('mongoose')
const app = express()
const port = 3000

// Database Connection
mongoose.Promise = global.Promise

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
}).then(()=> {
    console.log("Successfully")
}).catch(err => {
    console.log("Field", err)
    process.exit()
})

// Routing

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/posts', index)
// app.use('/api/node', indexDb)


require('./routes/indexDb.js')(app);
// Listen Port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
