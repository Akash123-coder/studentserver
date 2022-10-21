const Student=require('../model/student');
var axios=require('axios');
exports.postData=async (req,res)=>{
    const posts=req.body;
    console.log(req.body); 
    try
    {
        
   const result =await Student.create(posts);  
   // let secret="happpy";
  //const token=jwt.sign({email:posts.email,id:result._id,mobile:posts.mobile},secret,{expiresIn:"2h"});
  //console.log(token);
    res.status(200).json({data:"200",token:"successful "})
    }
    catch(err)
    {
      console.log(err);
        res.status(409).json({
            status:"Failure in  Insertion"
        })
    } 
}
exports.getAvgFirst=async (req,res)=>{
    const semester=req.body;
    console.log("hi");
    try{
        const data=await Student.find({semester1:1});
       // console.log(data);
       let obj=[];

        for(let i=0;i<data.length;i++)
        {
                let p=parseInt(data[i].marks1);
                let q=parseInt(data[i].marks2);
                let r=parseInt(data[i].marks3);

                let s=parseInt(data[i].marks4);
                let t=parseInt(data[i].marks5);
                let u=parseInt(data[i].marks6);
               
                let obj1={};
                  
                console.log(data[i].name); 
                obj1['name']=data[i].name;
                obj1['roll']=data[i].roll;
                obj1['marks1']=p;
                obj1['marks2']=q;
                obj1['marks3']=r;
                obj1['marks4']=s;
                obj1['marks5']=t;
                obj1['marks6']=u;
                //obj1.push({"roll":data[i].roll,"marks1":data[i].marks1,"marks2":data[i].marks2});
              
                console.log(obj1);
                 obj.push(obj1);    
        }
      // console.log(newarray[0]);
        res.status(200).json({data:obj});
     }catch(err)
     {
       res.status(400).json("Invalid Data");
     } 
}
exports.getAvgSecond=async (req,res)=>{
    const semester=req.body;
    console.log("hi");
    try{
        const data=await Student.find({semester2:2});
       // console.log(data);
       let obj=[];
        let obj1=[];
        var newarray=[];
        let value=0;
        for(let i=0;i<data.length;i++)
        {
                value=value+data[i].marks4+data[i].marks5+data[i].marks6;
                value=value/3;
                console.log(value);
                obj[0]=data[i];
                obj1[0]=value;
                let pp=[];
                pp=obj.concat(obj1);
                //console.log(pp);
                newarray[i]=pp;
                console.log(newarray[i]);
        }
       //console.log(newarray[0]);
        res.status(200).json({data:newarray});
     }catch(err)
     {
       res.status(400).json("Invalid Data");
     } 
}
exports.getAvgFirstper=async (req,res)=>{
    const semester=req.body;
    console.log("hi");
    try{
        const data=await Student.find({semester1:1});
       // console.log(data);
       let obj=[];
        let obj1=[];
        let newarray=[];
        let value=0;
        for(let i=0;i<data.length;i++)
        {
                value=value+data[i].marks1+data[i].marks2+data[i].marks3;
                value=value/3;
                console.log(value);
                obj[0]=data[i];
                obj1[0]=value;
                let pp=[];
                pp=obj.concat(obj1);
                //console.log(pp);
                newarray[i]=pp;
                console.log(newarray[i]);
        }
      // console.log(newarray[0]);
        res.status(200).json({data:newarray});
     }catch(err)
     {
       res.status(400).json("Invalid Data");
     } 
}

exports.getAvgSecondper=async (req,res)=>{
    const semester=req.body;
    console.log("hi");
    try{
        const data=await Student.find({semester2:2});
       // console.log(data);
       let obj=[];
        let obj1=[];
        let newarray=[];
        let value=0;
        for(let i=0;i<data.length;i++)
        {
                value=value+data[i].marks4+data[i].marks5+data[i].marks6;
                value=value/3;
                console.log(value);
                obj[0]=data[i];
                obj1[0]=value;
                let pp=[];
                pp=obj.concat(obj1);
                //console.log(pp);
                newarray[i]=pp;
                console.log(newarray[i]);
        }
       console.log(newarray);
        res.status(200).json({data:newarray});
     }catch(err)
     {
       res.status(400).json("Invalid Data");
     }  
}

exports.selecttwostud=async (req,res)=>{
    const semester=req.body;
    try{
       // var obj=[];
        const data=await Student.find({});
        console.log(data);
        var myMap = new Map();
        var mapSort1 = new Map();
        for(let i=0;i<data.length;i++)
        {
            let avg=(data[i].marks1+data[i].marks2+data[i].marks3+data[i].marks4+data[i].marks5+data[i].marks6)/6;
            console.log(avg);
            myMap.set(data[i].name,avg);
            mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
        }
        console.log(myMap);
        const obj = Object.fromEntries(mapSort1);
        res.status(200).json({data:obj});
     }catch(err)
     {
       res.status(400).json("Invalid Data");
     } 
}
