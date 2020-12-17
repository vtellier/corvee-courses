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

import {
    Recipe,
    Ingredient,
    Sideline,
    defaultSidelines
} from './dataStructure';

import './App.css';

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
    const [meals, setMeals]           = React.useState<Recipe[]>([]);
    const [sidelines, setSidelines]   = React.useState<Sideline>(defaultSidelines);

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    // ******************** Meals ***********************
    const onAddMeal = (meal:Recipe) => {
        console.log("got a new meal to add:", meal);
        setMeals(oldMeals => [meal, ...oldMeals]);
        console.log('Added');
    }

    const onRemoveMeal = (index:number) => {
        console.log('Got request to remove meal at index ', index);
        setMeals(oldMeals => [...oldMeals.slice(0,index), ...oldMeals.slice(index+1)]);
    }

    const onAddIngredientToMeal = (ingredient: Ingredient, mealIndex:number) => {
        setMeals(oldMeals => {
            let meal = Object.assign(oldMeals[mealIndex], {});
            meal.ingredients = [...meal.ingredients, ingredient];
            return [...oldMeals.slice(0,mealIndex), meal, ...oldMeals.slice(mealIndex+1)];
        });
    }

    const onRemoveIngredientFromMeal = (ingredientIndex: number, mealIndex:number) => {
        setMeals(oldMeals => {
            let meal = Object.assign(oldMeals[mealIndex], {});
            meal.ingredients = [...meal.ingredients.slice(0, ingredientIndex), ...meal.ingredients.slice(ingredientIndex+1)];
            return [...oldMeals.slice(0,mealIndex), meal, ...oldMeals.slice(mealIndex+1)];
        });
    }
    // ******************** /Meals ***********************

    // ******************* Sidelines *********************
    const onAddIngredientToSideline = (sidelineId:string, ingredient:Ingredient) => {
        setSidelines((oldSidelines:Sideline) => {
            console.log('Adding ingredient to', sidelineId);
            let clone = Object.assign(oldSidelines, {});
            if(sidelineId in clone) {
                clone[sidelineId as keyof typeof clone].ingredients =
                    [...clone[sidelineId as keyof typeof clone].ingredients, ingredient];
            }
            return clone;
        });
    }

    const onRemoveIngredientFromSideline = (sidelineId:string, ingredientIndex:number) => {
        setSidelines((oldSidelines:Sideline) => {
            console.log('Removing ingredient from', sidelineId);
            let clone = Object.assign(oldSidelines, {});
            if(sidelineId in clone) {
                clone[sidelineId as keyof typeof clone].ingredients = [
                    ...clone[sidelineId as keyof typeof clone].ingredients.slice(0, ingredientIndex),
                    ...clone[sidelineId as keyof typeof clone].ingredients.slice(ingredientIndex+1)
                ];
            }
            return clone;
        });
    }
    // ******************** /Sidelines ***********************

    const getStepContent = () => {
        switch (activeStep) {
            case 0:
            return (<Meals
                        meals={meals}
                        onAddMeal={onAddMeal}
                        onRemoveMeal={onRemoveMeal}
                        onAddIngredientToMeal={onAddIngredientToMeal}
                        onRemoveIngredientFromMeal={onRemoveIngredientFromMeal}
                    />);
            case 1:
            return (<Sidelines
                        onAddIngredient={onAddIngredientToSideline} 
                        onRemoveIngredient={onRemoveIngredientFromSideline}
                        sidelines={sidelines}
                    />);
            case 2:
            return (
                <div>
                    <Hidden smDown>
                        <Typography gutterBottom variant="h4" component="h2"> Voici la liste des courses </Typography>
                    </Hidden>
                    <span> Ajustez votre liste en fonction de ce que vous avez déjà dans vos équipés </span> </div>);
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
