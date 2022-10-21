import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    name: "",
    marks1: "",
    marks2: "",
    marks3: "",
    marks4: "",
    marks5: "",
    marks6: "",
    rollno: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      name: "",
      marks1: "",
      marks2: "",
      marks3: "",
      marks4: "",
      marks5: "",
      marks6: "",
      rollno: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log(postData);
        await axios.post("http://localhost:5000/student/postdata",postData);
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{"Creating a Student"}</Typography>
        <TextField
          name="Student Name"
          variant="outlined"
          label="Student Name"
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />
        <Typography variant="h6">{"Semester 1"}</Typography>
        <div className={classes.subjectDiv}>
          <TextField
            name="Eng"
            variant="outlined"
            label="Eng"
            halfWidth
            value={postData.marks1}
            onChange={(e) =>
              setPostData({ ...postData, marks1: e.target.value })
            }
          />
          <TextField
            name="Math"
            variant="outlined"
            label="Math"
            halfWidth
            value={postData.marks2}
            onChange={(e) =>
              setPostData({ ...postData, marks2: e.target.value })
            }
          />
          <TextField
            name="Sci"
            variant="outlined"
            label="Sci"
            halfWidth
            value={postData.marks3}
            onChange={(e) =>
              setPostData({ ...postData, marks3: e.target.value })
            }
          />
        </div>
        <Typography variant="h6">{"Semester 2"}</Typography>
        <div className={classes.subjectDiv}>
          <TextField
            name="Eng"
            variant="outlined"
            label="English"
            halfWidth
            value={postData.marks4}
            onChange={(e) =>
              setPostData({ ...postData, marks4: e.target.value })
            }
          />
          <TextField
            name="Math"
            variant="outlined"
            label="Math"
            halfWidth
            value={postData.marks5}
            onChange={(e) =>
              setPostData({ ...postData, marks5: e.target.value })
            }
          />
          <TextField
            name="Science"
            variant="outlined"
            label="Sci"
            halfWidth
            value={postData.marks6}
            onChange={(e) =>
              setPostData({ ...postData, marks6: e.target.value })
            }
          />
        </div>

        <TextField
          name="Roll No"
          variant="outlined"
          label="Roll No."
          fullWidth
          value={postData.roll}
          onChange={(e) => setPostData({ ...postData, roll: e.target.value })}
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
