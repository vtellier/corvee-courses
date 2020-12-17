import React from 'react'
import {
    Hidden,
    Typography,
    Accordion, AccordionSummary, AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Ingredient, Sideline } from './dataStructure';
import Ingredients from './Ingredients';

interface Props {
    sidelines:Sideline,
    onAddIngredient: (sidelineId:string, ingredient:Ingredient) => void
}

const Sidelines: React.FC<Props> = (props) => {
  return (
    <>
      <Hidden smDown>
        <Typography gutterBottom variant="h4" component="h2"> Les à-côté </Typography>
      </Hidden>
        { Object.entries(props.sidelines).map(([key,item]) => (
        <Accordion key={'sideline-'+key}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            { item.label }
          </AccordionSummary>
          <AccordionDetails>
            <Ingredients
                ingredients={ item.ingredients }
                onAddIngredient={ (ingredient:Ingredient) => props.onAddIngredient(key, ingredient) }
            />
          </AccordionDetails>
        </Accordion>
        )) }
    </>
  )
}

export default Sidelines
