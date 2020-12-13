import React from 'react';
import {
    AppBar,
    Toolbar,
    Paper,
    Container,
    Typography,
    Hidden,
    Stepper,
    Step,
    StepButton,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Meals from './Meals';
import Sidelines from './Sidelines';

import './App.css';
import {
    AppState,
    ProvisionList,
    ShoppingSession,
    defaultState,
    defaultShoppingSession,
} from './dataStructure';

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

function App(props : AppProps) {
    const classes = useStyles();
    const steps = getSteps();
    const [activeStep, setActiveStep] = React.useState(0);
    const [shoppingSession, setShoppingSession] = React.useState(defaultShoppingSession());

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const onAddMenu = (menu:ProvisionList):void => {
        console.log('Adding a new menu');
        //this.state.shoppingSession.menus.push(menu);
    }

    const getStepContent = () => {
        switch (activeStep) {
            case 0:
            return (<Meals menus={ shoppingSession.menus } onAddMenu={ onAddMenu } />);
            case 1:
            return (<Sidelines />);
            case 2:
            return (
                <div>
                    <Hidden smDown>
                        <Typography gutterBottom variant="h4" component="h2"> Voici la liste des courses </Typography>
                    </Hidden>
                    <span> Ajustez votre liste en fonction de ce que vous avez déjà dans vos équipés </span>
                </div>
            );
            default:
            return 'Unknown step';
        }
    }

    return (
    <div>
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Ravitaillement
            </Typography>
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
                    <Step key={label}>
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
