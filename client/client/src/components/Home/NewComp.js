import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { authActions } from '../../store/auth';
import {useSelector} from  'react-redux';
import { createPost } from '../../api';
import {useState,useEffect} from 'react';
import axios from 'axios';
function createData(name,Roll,sem1av,sem2av) {
  return { name, Roll,sem1av,sem2av};
}

// var rows = [];
//band kr de pratik kya? haa kal dete hai ha
export default function  DenseTable() {
  const [rows,setRows]=React.useState([])
  const counter = useSelector((state) => state.posts);
    const posts = useSelector((state) => state.posts);
    console.log(counter);
    const [character, setCharacter] = useState([]);
    var data="";
    var flag=1;
    let temp=[...character];
    useEffect( async()=> {
       data = await axios.get("http://localhost:5000/student/getavgfirst");
      //changeFilt(data.data.data);
      console.log("hi");
      flag++;
      localStorage.setItem("a",1);
        //changeFilt(data.data.data);
        setCharacter(data.data.data);
        console.log(data.data.data);
    }, []);
    let pp=  localStorage.getItem("a");
    if(pp==1)
    {
      pp();
      async function pp (){
     
        data = await axios.get("http://localhost:5000/student/getavgfirst");
        setCharacter(data.data.data);
        localStorage.setItem("a",2);
      }
    }


    console.log(character);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 120 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Roll</TableCell>
            <TableCell align="right">Sem1 Avg</TableCell>
            <TableCell align="right">Sem2 Avg</TableCell>
            <TableCell align="right">Sem1 Per</TableCell>
            <TableCell align="right">Sem2 Per</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {character.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {console.log("SDS",row.name)}
                {row.name}
              </TableCell>
              <TableCell align="right">{row.roll}</TableCell>
              <TableCell align="right">{((row.marks1+row.marks2+row.marks3)/3).toFixed(2)}</TableCell>
              <TableCell align="right">{((row.marks4+row.marks5+row.marks6)/3).toFixed(2)}</TableCell>
              <TableCell align="right">{(((row.marks1+row.marks2+row.marks3)/300)*100).toFixed(2)}%</TableCell>
              <TableCell align="right">{(((row.marks4+row.marks5+row.marks6)/300)*100).toFixed(2)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
