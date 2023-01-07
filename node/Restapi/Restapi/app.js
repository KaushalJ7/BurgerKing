let express = require('express');
let app = express();
let port = 9500;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let bodyParser = require('body-parser');
let mongoUrl = "mongodb://localhost:27017";
// let mongoUrl = "mongodb+srv://test:test123@cluster0.31rwbwq.mongodb.net/?retryWrites=true&w=majority";
let db;

// middleware require for frondend
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res) {
    res.send('<h1> Hi from Express code</h1>')
})

// app.listen(port,() =>{
//     console.log(`server is running on port ${port}`)
// })

app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })  
})

// app.get('/ourmenu',(req,res) => {
//     let cityid = Number(req.query.cityid)
//     let query = {}
//     if (cityid){
//         query={city_id:cityid}
//     }
//     db.collection('ourmenu').find(query).toArray((err,result) =>{
//         if(err) throw err;
//         res.send(result)
//     })  
// })

//menu user selected
app.post('/menuItem',(req,res) => {
    if(Array.isArray(req.body.id)){
        db.collection('menu').find({menu_id:{$in:req.body.id}}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }else{
        res.send('Invalid Input')
    }
})

app.post('/placeOrder',(req,res) => {
    db.collection('placeorder').insert(req.body,(err,result) =>{
        if(err) throw err;
        res.send('Order Placed')
    })  
})

// app.get('/viewOrder',(req,res) => {
//     db.collection('placeorder').find().toArray((err,result) =>{
//         if(err) throw err;
//         res.send(result)
//     })  
// })

app.get('/viewOrder',(req,res) => {
    let email = req.query.email;
    let query = {};
    if(email){
        query={email:email}
    }else{
        query={}
    }
    db.collection('placeorder').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

///update order
app.put('/updateOrder/:id',(req,res) => {
    let oid = Number(req.params.id);
    db.collection('placeorder').updateOne(
        {order:oid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date
            }
        },(err,result) =>{
            if(err) throw err;
            res.send('Order Updated')
        }
    )
})

//delete order
app.delete('/deleteOrder/:id',(req,res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('placeorder').remove({_id},(err,result) => {
        if(err) throw err;
        res.send('Order Deleted')
    })
})

app.get('/ourmenu',(req,res) => {
    let cityid = Number(req.query.cityid)
    let mealId = Number(req.query.mealId)
    let query = {}
    if (cityid && mealId){
        query={city_id:cityid,"mealTypes.mealtype_id":mealId}
    }else if (cityid){
        query={city_id:cityid}
    }else if (mealId){
        query={"mealTypes.mealtype_id":mealId}
    }
    db.collection('ourmenu').find(query).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })  
})

app.get('/filter/:mealId',(req,res) =>{
    let query = {};
    let mealId = Number(req.params.mealId);
    let foodId = Number(req.query.foodId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    let sort = {cost:-1};
    if(req.query.sort){
        sort={cost:req.query.sort}
    }
    if(foodId){
        query={
            "mealTypes.mealtype_id":mealId,
            "foodtype.foodtype_id":foodId
        }
    }else if(lcost && hcost){
        query={
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    db.collection('ourmenu').find(query).sort(sort).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    }) 
})

app.get('/filters/:mealId',(req,res) =>{
    let query = {};
    let mealId = Number(req.params.mealId);
    let foodId = Number(req.query.foodId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    let sort = {cost:-1};
    if(req.query.sort){
        sort={cost:req.query.sort}
    }
    if(foodId){
        query={
            "mealTypes.mealtype_id":mealId,
            "foodtype.foodtype_id":foodId
        }
    }else if(lcost && hcost){
        query={
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    db.collection('favmenu').find(query).sort(sort).toArray((err,result) =>{
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

app.get('/menu',(req,res) => {
    db.collection('menu').find().toArray((err,result) =>{
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

app.get('/details/:menuId',(req,res) => {
    let id = Number(req.params.menuId)
    // let id = mongo.ObjectId(req.params.menuId)
    // db.collection('ourmenu').find({_id:id}).toArray((err,result) =>{
    db.collection('ourmenu').find({menu_id:id}).toArray((err,result) =>{
        if(err) throw err;
        res.send(result)
    })  
})

app.get('/menu/:restId',(req,res) => {
    let id = Number(req.params.restId)
    
    db.collection('foodvegn').find({restaurant_id:id}).toArray((err,result) =>{
    // db.collection('menu').find({location_id:id}).toArray((err,result) =>{   
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