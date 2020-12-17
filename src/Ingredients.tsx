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
    const [ validAddForm, setValidAddForm ] = React.useState(true);
    const textLabelInput: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>()
    const onClickAdd = (e:object):void => {
        setAdding(true);
    }
    const onChangeLabel:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValidAddForm(e.currentTarget.value.trim() !== "");
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
                    InputProps={{ onChange: onChangeLabel  }}
                    error={ !validAddForm }
                />
                <Button onClick={ onClickOk } disabled={ !validAddForm }>Ok</Button>
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
