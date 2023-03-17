var express = require("express");
var mysql = require("mysql2");
var app = express();
app.use(express.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0421imen0421..',
    database: 'dbuser'
});

con.connect((err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("connected !!")
    }
});


app.post('/post',(req,res)=>{
    const user=req.body.user;
    const password=req.body.password;

    con.query('insert into mytable values(?,?)',[password,user],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send("POSTED")
    }
    })
})

app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("on port 3000")
    }
})