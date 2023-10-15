const express = require('express'); 
const cors = require('cors');
const app = express();
const port = 1218;

app.get('/I_HATE_SERVER', LoadData);
app.listen(port, StartServer);

app.use(cors());

function LoadData(req, res){ 
    res.header("Access-Control-Allow-Origin", "*");
    res.send('서버도 싫다');
}

function StartServer(){
    console.log('코딩이 싫다 http://localhost:${port}/I_HATE_SERVER');
}