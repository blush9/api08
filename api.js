const express = require('express')   //引入模块
const mysql = require('mysql');
const app = express()                //调用express
const port = 8080                   //服务运行的端口

app.get('/list',function (req,res) {  

    //设置连接参数
var connection = mysql.createConnection({
      host     : 'localhost',    
      user     : 'root',
      password : 'root',
      database : 'vue08'
});
    //创建连接
connection.connect();

//执行query
connection.query('select user_id,user_name,email from p_users limit 5', function (error, results, fields) {
// if (error) throw error;
//     console.log('The solution is: ', results[0].solution);

    //获取查询的结果  results
    console.log(results);
    res.send(JSON.stringify(results))
 });

connection.end();

})

app.get('/', (req, res) => {
    const list = [
        {
            userid:1,
            name:'ss',
            age:33
        },
        {
            userid:2,
            name:'dd',
            age:56
        },
        {
            userid:3,
            name:'qq',
            age:41
        }
    ]

    //将数组转为json字符串
    res.send(JSON.stringify(list));

    res.send('Hello World!')
})

app.get('/user',function (req,res) {  

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})