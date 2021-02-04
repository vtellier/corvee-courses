import React from 'react';
import {
    AppBar,
    Toolbar,
    Paper,
    Container,
    Stepper,
    Step,
    StepButton,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  atom,
  useRecoilState,
} from 'recoil';

import Meals from './Meals';
import Sidelines from './Sidelines';
import Summary from './Summary';

import './App.css';
import logo from './logo-alpha.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
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
    paddingTop: 20,
    paddingBottom: 150,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));

const getSteps = () => {
    return [
        'Définition des repas',
        'Les à-côtés',
        'Récapitulatif'
    ];
}

type AppProps = {
};

const activeStepState = atom({ key:'activeStep', default: 0 });

function App(props : AppProps) {

    const classes = useStyles();
    const steps = getSteps();
    const [activeStep, setActiveStep] = useRecoilState<number>(activeStepState);

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const getStepContent = () => {
        switch (activeStep) {
            case 0:
                return (<Meals />);
            case 1:
                return (<Sidelines />);
            case 2:
                return (<Summary />);
            default:
                return (<span>Something wrong happened 😒</span>);
        }
    }

    return (
    <div>
        <AppBar position="static">
        <Toolbar>
            <img src={logo} alt="Ravitaillement" title="Le logo de l'application" />
        </Toolbar>
        </AppBar>
        <Container maxWidth="md" className={classes.container}>

        <Paper elevation={1} className={classes.paper}>
            { getStepContent() }
        </Paper>

        </Container>
        <AppBar position="fixed" className={classes.appBar}>
            <Stepper activeStep={activeStep} alternativeLabel nonLinear>
            {
                steps.map((label, index) => (
                    <Step key={'step-'+index}>
                        <StepButton onClick={ handleStep(index) }>
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
