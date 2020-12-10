import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import {
    Stepper,
    Step,
    StepLabel,
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
  container: {
    paddingBottom: 150,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));

function getSteps() {
    return [
        'Définition des repas',
        'Les à-côtés',
        'Récapitulatif'
    ];
}

function getStepContent(step: number, classes: any) {
  switch (step) {
    case 0:
      return (<Meals classes={classes} />);
    case 1:
      return (<Sidelines classes={classes} />);
    case 2:
      return (
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="h4" component="h2"> Apercu </Typography>
        </Paper>
      );
    default:
      return 'Unknown step';
  }
}

function App() {
    const classes = useStyles();
    const steps = getSteps();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});
  
    const handleStep = (step: number) => () => {
        console.log(step);
        setActiveStep(step);
    };
  
    return (
      <div>
        <AppBar position="static">
          <h1>Corvée-courses</h1>
        </AppBar>
        <Container maxWidth="md" className={classes.container}>
  
            { getStepContent(activeStep, classes) }
  
        </Container>
        <AppBar position="fixed" className={classes.appBar}>
            <Stepper activeStep={activeStep} alternativeLabel nonLinear>
              {
                  steps.map((label, index) => (
                      <Step key={label}>
                          <StepButton onClick={handleStep(index)} completed={completed[index]}>
                              {label}
                          </StepButton>
                      </Step>
                  ))
              }
            </Stepper>
        </AppBar>
      </div>
    );
}

export default App;
