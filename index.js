import express from "express"
const app = express()
const port = 3000
import {route} from "./routes/route.js"

app.set("view engine", "ejs")
app.set("views", "./templates")

app.use("/", route)

app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`servidor criado na porta : ${port}`)
    }

})
