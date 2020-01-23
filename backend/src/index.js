const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http')
const info = require('./environments')

//info.user = seu usuario e info.password = sua senha cadastrados e autorizados para seu Cluster no mongodb
mongoose.connect(`mongodb+srv://${info.user}:${info.password}@cluster0-jzqcc.mongodb.net/os10?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const server = http.Server(app);

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')
setupWebsocket(server)

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3334);
