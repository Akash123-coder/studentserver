import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";

import Form from "../Form/Form";
import NewComp from "../Home/NewComp"
import { useEffect, useState } from "react";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";
import Paper from '@material-ui/core/Paper';
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
             <NewComp></NewComp>
          </Grid>
         
          <Grid item xs={12} sm={4}>
            <Paper>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Paper>
            
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
export default Home;
