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
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';

import Meals from './Meals';
import Sidelines from './Sidelines';

import './App.css';
import {
    AppState,
    defaultState,
} from './dataStructure';

const styles = (theme: Theme) => createStyles({
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
});

type AppProps = {
    classes: any,
};

class App extends React.Component<AppProps,AppState> {
    constructor(props:AppProps) {
        super(props);
        this.state = defaultState();
    }
    getSteps() {
        return [
            'Définition des repas',
            'Les à-côtés',
            'Récapitulatif'
        ];
    }
    getStepContent(step: number, classes: any) {
        switch (step) {
            case 0:
            return (<Meals />);
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
    render() {
        const { classes } = this.props;
        const steps = this.getSteps();
    
        const handleStep = (step: number) => () => {
            console.log(step);
            this.setState({ activeStep:step });
        };
    
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
                { this.getStepContent(this.state.activeStep, classes) }
            </Paper>
    
            </Container>
            <AppBar position="fixed" className={classes.appBar}>
                <Stepper activeStep={this.state.activeStep} alternativeLabel nonLinear>
                {
                    steps.map((label, index) => (
                        <Step key={label}>
                            <StepButton onClick={handleStep(index)}>
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
}

export default withStyles(styles)(App);
