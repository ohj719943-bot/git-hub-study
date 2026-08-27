const experss = require('express'); //express 모듈 호출
const app = experss(); // express 를 객체화 하여 app 에 할당

// 겟방식으로 / 요청이 오면... 할일
// btn.addEventListener('click',(evt)=>{});이거와 비슷
app.get('/',(req,res)=>{
    res.send('Hello, World Express.js');

});
// 서버는 8000번 포트로 실행
app.listen(8000,function(){
    console.log('sercer on : http://localhost:8000');
});

// node index.js