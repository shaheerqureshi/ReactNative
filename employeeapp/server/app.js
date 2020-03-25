const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')

app.use(bodyParser.json())
const Employee = mongoose.model("employee")
const mongouri = "mongodb+srv://saq:9IzOUvjEbc8txYuL@cluster0-qz7ui.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongouri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on("connected",()=>{
    console.log("connected to mongo db")
})
mongoose.connection.on("Error",(err)=>{
    console.log("Error connecting to mongo db",err)
})

app.get('/',(req,res)=>{
    Employee.find().then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
app.post('/send-data',(req,res)=>{
    const employee = new Employee({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        salary:req.body.salary,
        pic:req.body.pic
    })
    employee.save().then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})
app.post('/delete',(req,res)=>{
    Employee.findByIdAndRemove(req.body.id).then(data=>{
        console.log(data)
        res.send(data)
    })
})

app.post('/post',(req,res)=>{
    Employee.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        salary:req.body.salary,
        pic:req.body.pic
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})
app.listen(3000,()=>{
    console.log('server running')
 })

// "name":"shaheer",
//         "email":"shaheerqureshi334@gmail.com",
//         "phone":"03331576059",
//         "salary":"15000",
//         "pic":"myURL"