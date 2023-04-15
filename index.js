
const express = require("express")
const fs= require("fs")
const path=require("path");


const dirPath= path.join(__dirname , "timestamps");
console.log(dirPath)

const app=express()


app.use(express.static("timestamps"))
 
app.get("/static",(req,res)=>{
    let time= new Date()
let dateString= time.toUTCString().slice(0,-4)
console.log(dateString);


const timeStamp =`Last Created TimeStamp : ${dateString}`

    fs.writeFileSync(`${dirPath}/date-time.txt`,timeStamp, (err)=>{
        if(err){
       console.log(err)
        }else{
            console.log("file created Successfully")
        }
     
})
    res.sendFile(path.join(__dirname,"timestamps/date-time.txt"));
})

app.get("/",(req,res)=>{
    res.send("hi how are u?")
})

app.listen(5000,()=> console.log(`server started in localhost:5000`))