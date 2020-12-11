import React from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
    Accordion, AccordionSummary, AccordionDetails,
    Typography,
    Button,
    IconButton,
    Hidden,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';

import Ingredients from './Ingredients';

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
