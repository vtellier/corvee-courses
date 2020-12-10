import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import {
    Stepper,
    Step,
    StepButton,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Meals from './Meals';
import Sidelines from './Sidelines';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <h1>Corvée-courses</h1>
      </AppBar>
      <Container maxWidth="md">
          {true ? (<Meals classes={classes} />) : (
              true ? (<Sidelines classes={classes} />) : (
                <Paper className={classes.paper}>
                  <Typography gutterBottom variant="h4" component="h2"> Apercu </Typography>
                </Paper>
              )
          ) }
        <Stepper>
          <Step>
            <span>Définition des repas</span>
          </Step>
          <Step>
            <span>Les à-côtés</span>
          </Step>
          <Step>
            <span>Récapitulatif</span>
          </Step>
        </Stepper>
      </Container>
    </div>
  );
}

export default App;
