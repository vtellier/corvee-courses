import React from 'react'
import {
    Accordion, AccordionSummary, AccordionDetails,
    Typography,
    List, ListItem,
    Button,
    IconButton,
    Fab,
    Hidden,
    TextField
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';

type MealDetailsProps = {
}

type MealDetailsState = {
}

class MealDetails extends React.Component<MealDetailsProps, MealDetailsState> {
    constructor(props:MealDetailsProps) {
        super(props);
        this.state = {
        };
    }
    render () {
        return (
            <List>
                <ListItem>
                1
                Oignons
                </ListItem>
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
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </List>
        );
    }
}

type MealsProps = {
}

type MealsState = {
}

class Meals extends React.Component<MealsProps,MealsState> {
    constructor(props: MealsProps) {
        super (props);
        this.state = {};
    }
    render() {
        return (
          <>
            <Hidden smDown>
              <Typography gutterBottom variant="h4" component="h2">Votre menu de la semaine</Typography>
            </Hidden>
              <Typography gutterBottom variant="h5" component="h3">Repas</Typography>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <IconButton aria-label="supprimer"
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <Typography>
                    Soupe aux choux
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MealDetails />
                </AccordionDetails>
              </Accordion>
              <Button>Ajouter un plat</Button>
          </>
        )
      }
}

export default Meals
