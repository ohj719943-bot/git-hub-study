const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db');

app.use(cors());
app.use(express.json()); // JSON body 수신
app.use(express.urlencoded({ extended: true })); // form-data 수신 보강

app.use('/member', require('./member_router'));

connectDB();

app.all('/', (req, res) => {
    res.send('/member 를 이용해 join, list, get, update, delete');
});

// 3000번 포트로 변경
const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));