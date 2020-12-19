import React, { createRef } from 'react'
import { RecoilState, useRecoilState } from 'recoil'
import {
    List, ListItem, ListItemText, ListItemSecondaryAction,
    Button, IconButton,
    Fab,
    TextField
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { Ingredient } from './dataStructure';

type IngredientsProps = {
    ingredients: RecoilState<Ingredient[]>,
}

function Ingredients (props: IngredientsProps) {
    const [ adding, setAdding ] = React.useState(true);
    const [ validAddForm, setValidAddForm ] = React.useState(true);
    const [ ingredients, setIngredients ] = useRecoilState(props.ingredients);
    const textLabelInput: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>()
    const quantityInput: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>()
    const onClickAdd = (e:object):void => {
        setAdding(true);
    }
    const onChangeLabel:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValidAddForm(e.currentTarget.value.trim() !== "");
    }
    const onClickOk:React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if( textLabelInput.current === null ) return;
        if( quantityInput.current === null ) return;

        const label = textLabelInput.current.value.trim();
        const quantity = quantityInput.current.value.trim();

        setValidAddForm(label !== "");

        if(label === "") return;

        const id = label.toLowerCase().replace(/\s{2,}/g," ").replace(/\s+/g, '');
        const ingredient:Ingredient = { id, label, quantity };
        setIngredients(oldIngredients => [...oldIngredients, ingredient]);
        setAdding(false);
    }
    const onClickCancel = (e:object):void => {
        setAdding(false);
        setValidAddForm(true);
        if( textLabelInput.current !== null ) {
            textLabelInput.current.value = "";
        }
    }
    const onClickRemoveIngredient = (index:number):void => {
        setIngredients(oldIngredients => [...oldIngredients.slice(0,index), ...oldIngredients.slice(index+1)]);
    }

    return (
        <List>
            { ingredients.length > 0 ?
              ingredients.map( (ingredient, index) => (
                    <ListItem key={'ingredient-'+index}>
                        <ListItemText
                            primary={ ingredient.label }
                            secondary={ ingredient.quantity }
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={ e => onClickRemoveIngredient(index) }>
                            <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
              ) : (<span>Veuillez saisir les ingrédients</span>)
            }
            { adding ? (
            <ListItem>
                <form onSubmit={ (e) => { e.stopPropagation(); e.preventDefault(); } } >
                    <TextField
                        id="label"
                        inputRef={textLabelInput}
                        label="Ingrédient"
                        type="text"
                        InputLabelProps={{ shrink: true }}
                        InputProps={{ onChange: onChangeLabel  }}
                        error={ !validAddForm }
                    />
                    <TextField
                        id="quantity"
                        inputRef={quantityInput}
                        label="Quantité"
                        type="text"
                        InputLabelProps={{ shrink: true }}
                    />
                    <Button type="submit" onClick={ onClickOk } disabled={ !validAddForm }>Ok</Button>
                    <Button onClick={ onClickCancel }>Cancel</Button>
                </form>
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
