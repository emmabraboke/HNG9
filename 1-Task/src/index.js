import express from "express"
import {port} from "../config/index.js"
import userRoute from "./routes/user.route.js"

const app = express()

app.use("/api/v1", userRoute)

const Port = port || 5000

app.listen(Port,()=>{
    console.log(`server is running on http://localhost/${Port}`)
})

