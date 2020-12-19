import React from 'react'
import {
    useRecoilValue,
} from 'recoil'
import {
    Typography,
    Hidden,
    List, ListItem
} from '@material-ui/core';
import { uniqueIngredientsSelector } from './dataStructure';

interface SummaryProps {
}

const Summary: React.FC<SummaryProps> = (props) => {
    const ingredients = useRecoilValue( uniqueIngredientsSelector );
    return (
        <>
            <Hidden smDown>
                <Typography gutterBottom variant="h4" component="h2">
                    Voici la liste des courses
                </Typography>
            </Hidden>
            <span> Ajustez votre liste en fonction de ce que vous avez déjà dans vos équipés </span>
            <List>
                { ingredients.map((ingredient) => (
                    <ListItem>
                        { ingredient.label }
                        { ingredient.quantity ? ' - '+ingredient.quantity : '' }
                    </ListItem>
                )) }
            </List>
        </>
    );
}

export default Summary;
