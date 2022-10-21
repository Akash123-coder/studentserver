const cors=require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express=require('express');
const mongoose=require('mongoose');
const app=express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({extended:false}));//urlencoded
app.use(cors());//cors
const StudentRoute = require('./router/StudentRoute');
//const entryRoute=require('./Routes/EntryRoutes')
console.log(process.env.DATABASE);
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
   useUnifiedTopology: true 
  })
  .then(() => console.log('DB connection successful!'));
  app.use('/student', StudentRoute);
  //app.use('/entry',entryRoute);
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
/*
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
*/
