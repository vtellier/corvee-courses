import React from 'react'
import {
    useRecoilValue,
} from 'recoil'
import {
    Typography,
    Hidden,
    List, ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction,
} from '@material-ui/core';
import {
    uniqueIngredientsSelector,
    Ingredient
} from './dataStructure';
import Checkbox from '@material-ui/core/Checkbox';

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

                    // We will merge the quantities on one line, to make it simple for now
                    const quantities:string[] = ingredientsGroup.reduce((acc:string[], ing:Ingredient) => {
                        if(ing.quantity !== undefined)
                            acc.push(ing.quantity);
                        return acc;
                    },[]);
                    
                    // One day we should display somewhere all the meals this ingredient is needed for
                    const meals:string|null = null;
                    
                    return (
                        <ListItem>
                            <ListItemText
                                key={ingredientsGroup[0].id}
                                primary={ label + ': ' + quantities.join(', ') }
                                secondary={ meals }
                            />
                            <ListItemSecondaryAction>
                                <Checkbox />
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                }) }
            </List>
        </>
    );
}

export default Summary;
