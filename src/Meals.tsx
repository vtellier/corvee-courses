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
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" component="h2">Votre menu de la semaine</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography gutterBottom variant="h5" component="h3">Repas</Typography>
          <List>
            <ListItem button>Soupe aux choux</ListItem>
            <ListItem button>Cassoulet</ListItem>
          </List>
          <Button>Ajouter un plat</Button>
        </Grid>
        <Grid item xs={4}>
          <Typography gutterBottom variant="h5" component="h3"> Ingrédients </Typography>
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
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Meals
