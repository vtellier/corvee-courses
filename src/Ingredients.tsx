import React from 'react'
import {
    List, ListItem,
    Button,
    Fab,
    TextField
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

type IngredientsProps = {
}

function Ingredients (props: IngredientsProps) {
    const [ adding, setAdding ] = React.useState(true);
    const onClickAdd = (e:object):void => {
        setAdding(true);
    }
    const onClickOk = (e:object):void => {
        setAdding(false);
    }
    return (
        <List>
            <ListItem>
            1
            Oignons
            </ListItem>
            { adding ? (
            <ListItem>
                <TextField
                id="quantity"
                label="Quantité"
                type="text"
                InputLabelProps={{ shrink: true }}
                />
                <TextField
                id="quantity"
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
