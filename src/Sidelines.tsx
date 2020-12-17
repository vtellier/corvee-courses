import React from 'react'
import {
    Hidden,
    Typography,
    Accordion, AccordionSummary, AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Ingredients from './Ingredients';

interface Props {
}

interface Sideline {
    label: string,
    id: string,
}

const Sidelines: React.FC<Props> = () => {
    const sides: Sideline[] = [
        { label:'Petit déjeuner', id:'breakfast'          }, 
        { label:'Goutter',        id:'snack'              }, 
        { label:'Apéro',          id:'aperitif'           }, 
        { label:'Entretien',      id:'householdProducts' }, 
        { label:'Autres',         id:'others'             }, 
    ];
  return (
    <>
      <Hidden smDown>
        <Typography gutterBottom variant="h4" component="h2"> Les à-côté </Typography>
      </Hidden>
        { sides.map((item) => (
        <Accordion key={'sideline-'+item.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            { item.label }
          </AccordionSummary>
          <AccordionDetails>
            <Ingredients ingredients={[]} />
          </AccordionDetails>
        </Accordion>
        )) }
    </>
  )
}

export default Sidelines
