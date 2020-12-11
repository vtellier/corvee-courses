import React from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
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

type IngredientsProps = {
}

type IngredientsState = {
}

class Ingredients extends React.Component<IngredientsProps, IngredientsState> {
    constructor(props:IngredientsProps) {
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

const styles = (theme: Theme) => createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '20%',
      flexShrink: 0,
      marginTop: 13,
    },
});

type MealsProps = {
    classes: any,
}

type MealsState = {
}

class Meals extends React.Component<MealsProps,MealsState> {
    constructor(props: MealsProps) {
        super (props);
        this.state = {};
    }
    render() {
        const { classes } = this.props;
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
                  <Typography className={classes.heading}>
                    Soupe aux choux
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Ingredients />
                </AccordionDetails>
              </Accordion>
              <Button>Ajouter un plat</Button>
          </>
        )
      }
}

export default withStyles(styles)(Meals)
