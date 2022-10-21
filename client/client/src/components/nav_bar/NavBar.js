import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import memories from "../../images/memories.png";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useHistory, useLocation } from "react-router";
import decode from "jwt-decode";
import axios from 'axios';
import { authActions } from "../../store/auth";
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../../constants/actionTypes';
const NavBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    // JWT
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };
  const[yearname,changeFilt]=useState('');
  const getdetails=async ()=>{
      const data = await axios.get("http://localhost:5000/student/getavgfirst");
      //changeFilt(data.data.data);
      console.log(data.data.data);
      localStorage.setItem("a",1);
      dispatch({ type: CREATE, payload: data.data.data });
  }
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Student Info
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        <div className={classes.profile}>
          <Button
            variant="contained"
            className={classes.logout}
            color="secondary"
            onClick={logout}
          >
            Add Student
          </Button>

          <Button
            onClick={getdetails} 
            variant="contained"
            className={classes.logout}
            color="primary"
          >
            View Details
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;