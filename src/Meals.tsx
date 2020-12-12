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
import { ProvisionList } from './dataStructure';
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
    menus: ProvisionList[],
    onAddMenu: (menu:ProvisionList) => void
}

type MealsState = {
}

class Meals extends React.Component<MealsProps,MealsState> {
    constructor(props: MealsProps) {
        super (props);
        this.state = {};
        this.onClickAddMenu = this.onClickAddMenu.bind(this);
    }
    onClickAddMenu(e:object) {
        const menu:ProvisionList = {
            provisions: [],
            label: "Nouveau menu",
            note: "",
        };
        this.props.onAddMenu(menu);
    }
    render() {
        const { classes } = this.props;
        return (
          <>
            <Hidden smDown>
              <Typography gutterBottom variant="h4" component="h2">Votre menu de la semaine</Typography>
            </Hidden>
              { this.props.menus.map((menu) => (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <IconButton aria-label="supprimer"
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                >
                  <DeleteIcon />
                </IconButton>
                <Typography className={classes.heading}>
                  { menu.label }
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Ingredients />
              </AccordionDetails>
            </Accordion>
              ))
            }
            <Button onClick={ this.onClickAddMenu }>Ajouter un plat</Button>
          </>
        )
      }
}

export default withStyles(styles)(Meals)
