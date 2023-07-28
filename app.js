const mongoose = require("mongoose")
const users = require('./models/user')

mongoose.connect('mongodb://localhost:27017/mydb'),{
    useNewUrlParser : true
}

users.find()
.exec()
.then(result=>{
    console.log(`Total Users ${result.length}`)
    console.log(result)
})
.catch(err=>{
    console.log(err)
})