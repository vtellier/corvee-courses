import React, { createRef } from 'react'
import {
    List, ListItem,
    Button,
    Fab,
    TextField
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Ingredient } from './dataStructure';

type IngredientsProps = {
    ingredients?: Ingredient[],
    onAddIngredient?: (ingredient:Ingredient) => void
}

function Ingredients (props: IngredientsProps) {
    const [ adding, setAdding ] = React.useState(true);
    const textLabelInput: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>()
    const onClickAdd = (e:object):void => {
        setAdding(true);
    }
    const onClickOk = (e:object):void => {
        if( textLabelInput.current !== null ) {
            const ingredient:Ingredient = {
                label: textLabelInput.current.value
            };
            console.log(ingredient);
            if(props.onAddIngredient !== undefined)
                props.onAddIngredient(ingredient);
        }
        setAdding(false);
    }
    return (
        <List>
            { props.ingredients !== undefined ?
              props.ingredients.map( (ingredient, index) => (
                    <ListItem key={'ingredient-'+index}>
                    { ingredient.label }
                    </ListItem>
                )
              ) : (<span>Veuillez saisir les ingrédients</span>)
            }
            { adding ? (
            <ListItem>
                <TextField
                    id="quantity"
                    label="Quantité"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    id="label"
                    inputRef={textLabelInput}
                    label="Ingrédient"
                    type="text"
                    InputLabelProps={{ shrink: true }}
                />
                <Button onClick={ onClickOk }>Ok</Button>
            </ListItem>
            ) : (
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={ onClickAdd } />
            </Fab>
            ) }
        </List>
    );
}

export default Ingredients;
