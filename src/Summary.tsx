import React from 'react'
import {
    useRecoilValue,
} from 'recoil'
import {
    Typography,
    Hidden,
    List, ListItemText,
} from '@material-ui/core';
import {
    uniqueIngredientsSelector,
    Ingredient
} from './dataStructure';

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
                { ingredients.map((ingredientsGroup) => {
                    const label = ingredientsGroup[0].label;
                    const quantities:string[] = ingredientsGroup.reduce((acc:string[], ing:Ingredient) => {
                        if(ing.quantity !== undefined)
                            acc.push(ing.quantity);
                        return acc;
                    },[]);
                    return ( <ListItemText
                                key={ingredientsGroup[0].id}
                                primary={ label }
                                secondary={ quantities.join(', ') }
                                    /> )
                }) }
            </List>
        </>
    );
}

export default Summary;
