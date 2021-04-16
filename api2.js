//1
const express = require('express');  //引入模块
const mysql = require('mysql');      //引入mysql
const app = express();              //调用express
const port = 8080;                  //服务运行的端口


//2
//设置连接参数  (连接数据库)
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'vue08',
})

//查询用户的接口  /user?name='xxx'

app.get('/user',function (request,response) {  
    console.log(request.query)      //    query 是传值 name='xxx'
    let uname = request.query.name      //获取name参数

    //拼接sql语句
    const sql = `select * from p_users where user_name='${uname}'`
    
    //数据库查询用户信息
    connection.query(sql,function(err,result){
        console.log(result)
        //判断是否找到记录
        if(result.length){
            let data = {
                error:30001,
                msg:"找到记录",
            }
            response.send(JSON.stringify(data));
        }else{
            let data = {
                error:40001,
                msg:"没有找到记录"
            }
            response.send(JSON.stringify(data));
        }
    })

})

//客户端
app.get('/',function (req,res) {  
    console.log(req);
    res.send('hello');//向请求接口一端发送请求 
})


//3返回域名
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})