import React, { createRef } from 'react'
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
import { Recipe, Ingredient } from './dataStructure';

const useStyles = makeStyles((theme: Theme) => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '20%',
      flexShrink: 0,
      marginTop: 13,
    },
}));

type MealsProps = {
    meals: Recipe[],
    onAddMeal: (meal:Recipe) => void,
    onRemoveMeal: (index:number) => void,
    onAddIngredientToMeal: (ingredient:Ingredient, mealIndex: number) => void,
}

function Meals(props:MealsProps) {
    const textInput: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>()
    const onClickAddMenu = (e:object) => {
        if(textInput.current === null)
            return;
        const meal:Recipe = {
            label: textInput.current.value.trim(),
            ingredients: []
        }
        props.onAddMeal(meal);
        textInput.current.value = "";
    };
    const onClickRemoveMenu = (index:number) => {
        props.onRemoveMeal(index);
    }
    const onAddIngredient = (ingredient: Ingredient, mealIndex:number) => {
        console.log('Adding ingredient to menu', mealIndex);
        props.onAddIngredientToMeal(ingredient, mealIndex);
    }
    const classes = useStyles();
    return (
      <>
        <Hidden smDown>
          <Typography gutterBottom variant="h4" component="h2">Votre menu de la semaine</Typography>
        </Hidden>
          { props.meals.map((meal, index) => (
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
            />
          </AccordionDetails>
        </Accordion>
          ))
        }
        <TextField inputRef={textInput} label="Saisissez le nom du plat" />
        <Button onClick={ onClickAddMenu }>Ajouter un plat</Button>
      </>
    )
}

export default Meals
