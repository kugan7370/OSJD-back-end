const express = require('express');
// const res = require('express/lib/response');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const cookieParser = require('cookie-parser')



// db connection
const uri = 'mongodb+srv://frank:frank97@jersey-tutorial.w3xic7g.mongodb.net/OSJD?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connected successfully");
});


//middleware
app.use(express.json());
app.use(cors())
app.use(cookieParser())



//Routes
const userPath = require('./routers/user')
const AdminPath = require('./routers/Admin')


//user-paths
app.use('/user', userPath);


//admin-path
app.use('/admin', AdminPath);





//port listen
app.listen(8080, () => {
    console.log('server connected with http://localhost:8080');
})
