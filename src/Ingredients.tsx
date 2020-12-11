import React from 'react'
import {
    List, ListItem,
    Fab,
    TextField
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

type IngredientsProps = {
}

type IngredientsState = {
    adding: boolean,
}

class Ingredients extends React.Component<IngredientsProps, IngredientsState> {
    constructor(props:IngredientsProps) {
        super(props);
        this.state = {
            adding: false,
        };
    }
    render () {
        return (
            <List>
                <ListItem>
                1
                Oignons
                </ListItem>
                { this.state.adding ? (
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
                </ListItem>
                ) : (
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
                ) }
            </List>
        );
    }
}

export default Ingredients;