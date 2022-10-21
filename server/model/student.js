const mongoose=require('mongoose');
const StudentSchema = new mongoose.Schema({
   name:String,
    roll:String,
    class:String,
    subject1:String,
    subject2:String,
    subject3:String,
    semester1:{
      type:String,
      default:1,
    },
    semester2:{
      type:Number,
      default:2,
    },
    marks1:
    {
      type:String,
      default:"0"
    },
    marks2:  {
      type:String,
      default:"0"
    },
    marks3:  {
      type:String,
      default:"0"
    },
    marks4:  {
      type:String,
      default:"0"
    },
    marks5:  {
      type:String,
      default:"0"
    },
    marks6:  {
      type:String,
      default:"0"
    }
  });
const Student = mongoose.model('Student', StudentSchema);
module.exports=Student;