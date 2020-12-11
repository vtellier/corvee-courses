import React from 'react'
import {
    Typography,
    List, ListItem,
    Button,
    Grid,
    TextField
} from '@material-ui/core';

interface Props {
}

const Meals: React.FC<Props> = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4" component="h2">Votre menu de la semaine</Typography>
      </Grid>
      <Grid item xs={12} md={8} xl={10}>
        <Typography gutterBottom variant="h5" component="h3">Repas</Typography>
        <List>
          <ListItem button>Soupe aux choux</ListItem>
          <ListItem button>Cassoulet</ListItem>
        </List>
        <Button>Ajouter un plat</Button>
      </Grid>
      <Grid item xs={12} md={4} xl={2}>
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
  )
}

export default Meals
