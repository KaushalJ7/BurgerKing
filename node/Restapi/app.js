let express = require('express');
let app = express();
let port = 9500;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb://localhost:27017";
let db;

// middleware require for frondend
app.use(cors())

app.get('/',function(req,res) {
    res.send('<h1> Hi from Express code</h1>')
})

app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })  
})`1`

app.get('/ourmenu',(req,res) => {
    let cityid = Number(req.query.cityid)
    let query = {}
    if (cityid){
        query={city_id:cityid}
    }
    db.collection('ourmenu').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })  
})

app.get('/ourmenu',(req,res) => {
    let cityid = Number(req.query.cityid)
    let mealid = Number(req.query.mealid)
    let query = {}
    if (cityid){
        query={city_id:cityid}
    }else if (mealid){
        query={"mealTypes.mealtype_id":mealid}
    }
    db.collection('ourmenu').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })  
})

app.get('/ourmenu',(req,res) => {
    db.collection('ourmenu').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })  
})

app.get('/favmenu',(req,res) => {
    db.collection('favmenu').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })  
})

app.get('/menupack',(req,res) => {
    db.collection('menupack').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })  
})

app.get('/foodvegn',(req,res) => {
    db.collection('foodvegn').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })  
})

MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,dc) => {
    if(err) console.log('Error While Conecting');
    db = dc.db('burgerking');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})