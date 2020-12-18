import React from 'react'
import {
    Hidden,
    Typography,
    Accordion, AccordionSummary, AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    RecoilState,
    useRecoilState,
} from 'recoil';

import { Ingredient, Recipe, sidelinesStates } from './dataStructure';
import Ingredients from './Ingredients';

interface AProps {
    recoilState: RecoilState<Recipe>
}

const AtomSideline: React.FC<AProps> = (props) => {
    const [recipe, setRecipe] = useRecoilState(props.recoilState);
    const onAddIngredient = (ingredient:Ingredient): void => {
        console.log('onAddIngredient');
        //setRecipe((old:Recipe) => {
        //    old.ingredients = [...old.ingredients, ingredient];
        //    return old;
        //});
    };
    const onRemoveIngredient = (index:number): void => {
        console.log('onRemoveIngredient');
        //setRecipe((old:Recipe) => {
        //    old.ingredients = [...old.ingredients.slice(0,index), ...old.ingredients.slice(index+1)];
        //    return old;
        //});
    };
    return (
        <Accordion key={props.recoilState.key}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            { recipe.label }
          </AccordionSummary>
          <AccordionDetails>
            <Ingredients
                ingredients={ recipe.ingredients }
                onAddIngredient={ onAddIngredient }
                onRemoveIngredient={ onRemoveIngredient }
            />
          </AccordionDetails>
        </Accordion>
    );
}

interface Props { }

const Sidelines: React.FC<Props> = (props) => {
    const sidelinesAtoms: RecoilState<Recipe>[] = sidelinesStates;

    return (
    <>
      <Hidden smDown>
        <Typography gutterBottom variant="h4" component="h2"> Les à-côté </Typography>
      </Hidden>
        { sidelinesAtoms.map((atom) => (
            <AtomSideline recoilState={atom} />
        )) }
    </>
    )
}

export default Sidelines
