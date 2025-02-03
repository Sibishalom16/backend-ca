const express=require("express")
const app=express();
const port = 3000;
app.use(express.json);

app.get("/",(req,res)=>{"Server is running "});
app.post("/Login",(req,res)=>{
    const{Username,Email,Password,Dateofbirth}=req.body();
    if (!Username) return res.send(400).json({error:"Username cannot be empty"});
    if (!Email) return res.send(400).json({error:"Email cannot be empty"});
    if (!Password) return res.send(400).json({error:"Password lengths should be greater than 8 or less than or equal to 16"});
    if (!Dateofbirth) return res.send(400).json({error:"Date of birth cannot be empty "});

    res.json("Login Successfull",data())
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
