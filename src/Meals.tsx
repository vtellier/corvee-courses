import React, { ReactElement } from 'react'
import {
    Typography,
    Paper,
    List, ListItem,
    Button,
    Grid,
    TextField
} from '@material-ui/core';

interface Props {
    classes : any
}

const Meals: React.FC<Props> = ({ classes }) => {
  return (
    <Grid container>
      <Grid item>
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="h4" component="h2">Repas</Typography>
          <List>
            <ListItem button>Soupe aux choux</ListItem>
            <ListItem button>Cassoulet</ListItem>
          </List>
          <Button>Ajouter un plat</Button>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="h4" component="h2"> Ingrédients </Typography>
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
          </List>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Meals
