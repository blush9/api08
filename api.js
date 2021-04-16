const express = require('express')   //引入模块
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()                //调用express
const port = 8080                   //服务运行的端口

    //设置连接参数
    var connection = mysql.createConnection({
          host     : 'localhost',    
          user     : 'root',
          password : 'root',
          database : 'vue08'
    });

    app.use(cors());    //跨域处理
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:true }));


    //登录接口
    app.post('/user/login',function (req,res) {  
        console.log(req)
        let user_name = req.body.user_name  //接受的用户名
        let user_pass = req.body.upwd //接收的密码

        //查询数据库

        connection.connect();

        connection.query(`select * from p_users where user_name=${user_name}and password=${user_pass}`,function(error,results){
            //查询的结果 
            console.log(results);
            res.send('ok');
        })
    })








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

//用户注册
app.post('/user/reg',function (req,res) {  
    var connection = mysql.createConnection({
          host     : 'localhost',    
          user     : 'root',
          password : 'root',
          database : 'vue08'
    });
        //创建连接
    connection.connect();

    //接受 post 参数
    let user_name = req.user_name;
    let email = req.email;
    let mobile = "";

    let sql = `insert into p_users (\`user_name\`,\`email\`,\`mobile\`)values('${user_name}','${email}','${mobile}')`;

    connection.query(sql,function (err,result) {  
        console.log(result)
    })
    // console.log()
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})