import React, { createRef } from 'react';
import { useRecoilState } from 'recoil';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
    Accordion, AccordionSummary, AccordionDetails,
    Typography,
    TextField,
    Button,
    IconButton,
    Hidden,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Ingredients from './Ingredients';
import { Recipe, Ingredient, mealsState } from './dataStructure';

const useStyles = makeStyles((theme: Theme) => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '20%',
      flexShrink: 0,
      marginTop: 13,
    },
}));

type MealsProps = { }

function Meals(props:MealsProps) {
    const [meals, setMeals]           = useRecoilState<Recipe[]>(mealsState);
    const [ validAddForm, setValidAddForm ] = React.useState(true);
    const textInput: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

    const addMeal = (meal:Recipe) => {
        console.log("got a new meal to add:", meal);
        setMeals(oldMeals => [meal, ...oldMeals]);
        console.log('Added');
    }

    const onClickAddMenu = (e:object) => {
        if(textInput.current === null) return;

        const label = textInput.current.value.trim();
        setValidAddForm(label !== "");

        if(label === '') return;

        const meal:Recipe = {
            label,
            ingredients: []
        }
        addMeal(meal);
        textInput.current.value = "";
    }

    const onClickRemoveMenu = (index:number) => {
        console.log('Got request to remove meal at index ', index);
        setMeals(oldMeals => [...oldMeals.slice(0,index), ...oldMeals.slice(index+1)]);
    }

    const onAddIngredientToMeal = (ingredient: Ingredient, mealIndex:number) => {
        //setMeals(oldMeals => {
        //    let meal = Object.assign(oldMeals[mealIndex], {});
        //    meal.ingredients.push(ingredient);
        //    return [...oldMeals.slice(0,mealIndex), meal, ...oldMeals.slice(mealIndex+1)];
        //});
    }

    const onRemoveIngredientFromMeal = (ingredientIndex: number, mealIndex:number) => {
        //setMeals(oldMeals => {
        //    let meal = Object.assign(oldMeals[mealIndex], {});
        //    meal.ingredients = [...meal.ingredients.slice(0, ingredientIndex), ...meal.ingredients.slice(ingredientIndex+1)];
        //    return [...oldMeals.slice(0,mealIndex), meal, ...oldMeals.slice(mealIndex+1)];
        //});
    }

    const onAddIngredient = (ingredient: Ingredient, mealIndex:number) => {
        console.log('Adding ingredient to menu', mealIndex);
        onAddIngredientToMeal(ingredient, mealIndex);
    }

    const onAddMealLabelChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValidAddForm(e.currentTarget.value.trim() !== "");
    }

    const classes = useStyles();
    return (
      <>
        <Hidden smDown>
          <Typography gutterBottom variant="h4" component="h2">Votre menu de la semaine</Typography>
        </Hidden>
          { meals.map((meal, index) => (
        <Accordion key={ 'meal-'+index }>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <IconButton aria-label="supprimer"
                onClick={(event) => { event.stopPropagation(); onClickRemoveMenu(index); }}
                onFocus={(event) => event.stopPropagation()}
            >
              <DeleteIcon />
            </IconButton>
            <Typography className={classes.heading}>
              { meal.label }
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Ingredients
                ingredients={meal.ingredients}
                onAddIngredient={ (ingredient:Ingredient) => onAddIngredient(ingredient,index) }
                onRemoveIngredient={ (ingredientIndex:number) => onRemoveIngredientFromMeal(ingredientIndex, index) }
            />
          </AccordionDetails>
        </Accordion>
          ))
        }
        <form onSubmit={ (e) => { e.stopPropagation(); e.preventDefault(); } } >
            <TextField
                inputRef={textInput}
                label="Saisissez le nom du plat"
                error={ !validAddForm }
                onChange={ onAddMealLabelChange }
            />
            <Button type="submit" onClick={ onClickAddMenu }>Ajouter un plat</Button>
        </form>
      </>
    )
}

export default Meals
