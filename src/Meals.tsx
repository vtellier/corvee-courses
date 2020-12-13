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

const useStyles = makeStyles((theme: Theme) => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '20%',
      flexShrink: 0,
      marginTop: 13,
    },
}));

type MealsProps = {
    meals: string[],
    onAddMeal: (meal:string) => void,
}

function Meals(props:MealsProps) {
    const textInput: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>()
    const onClickAddMenu = (e:object) => {
        if(textInput.current === null)
            return;
        props.onAddMeal(textInput.current.value.trim());
    };
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
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
            >
              <DeleteIcon />
            </IconButton>
            <Typography className={classes.heading}>
              { meal }
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Ingredients />
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
