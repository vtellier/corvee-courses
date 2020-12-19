import React from 'react'
import {
    useRecoilValue,
} from 'recoil'
import {
    Typography,
    Hidden,
    List, ListItem
} from '@material-ui/core';
import { allIngredientsSelector } from './dataStructure';

interface SummaryProps {
}

const Summary: React.FC<SummaryProps> = (props) => {

    const ingredients = useRecoilValue( allIngredientsSelector );

    return (
        <>
            <Hidden smDown>
                <Typography gutterBottom variant="h4" component="h2"> Voici la liste des courses </Typography>
            </Hidden>
            <span> Ajustez votre liste en fonction de ce que vous avez déjà dans vos équipés </span>
            <List>
                { ingredients.map((ingredient) => (
                    <ListItem>{ ingredient.label }</ListItem>
                )) }
            </List>
        </>
    );
}

export default Summary;
