var mysql      = require('mysql');

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
    console.log(results)
 });

connection.end();
