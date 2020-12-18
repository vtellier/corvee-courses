import React from 'react'
import {
    Hidden,
    Typography,
    Accordion, AccordionSummary, AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    RecoilState,
    useRecoilValue,
} from 'recoil';

import { Recipe, sidelinesStates } from './dataStructure';
import Ingredients from './Ingredients';

interface AProps {
    recoilState: RecoilState<Recipe>
}

const AtomSideline: React.FC<AProps> = (props) => {
    const recipe = useRecoilValue(props.recoilState);
    return (
        <Accordion key={props.recoilState.key}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            { recipe.label }
          </AccordionSummary>
          <AccordionDetails>
            <Ingredients ingredients={ recipe.ingredients } />
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
