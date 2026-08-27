const express = require('express');
const app = express(

);

app.use(function (req,res,next){
    console.log('@pre Handler');
    console.log(req.query);
    if(req.query.grade !=='S') {
        res.status(403).json({'msg': '접근권한이 없습니다.'});
    }else {
        next();
    }

});


app.get('/',(req,res,next)=>{
    console.log('@router');
    res.send('라우터 전급과 반환')
    next();
});

//특정한 요청시에만 동작시킬 경우
app.use('/',(req,res)=>{
    console.log('@Post Handler');
    console.log('일처리 후 뒷정리')
});

app.listen(80,()=>console.log('http://localhost'));