import React from 'react'
import {
    Hidden,
    Typography,
    List, ListItem
} from '@material-ui/core';

interface Props {
}

const Sidelines: React.FC<Props> = () => {
  return (
    <div>
      <Hidden smDown>
        <Typography gutterBottom variant="h4" component="h2"> Les à-côté </Typography>
      </Hidden>
      <List>
          <ListItem button>Petit déjeuner</ListItem>
          <ListItem button>Goutter</ListItem>
          <ListItem button>Apéro</ListItem>
          <ListItem button>Autres</ListItem>
      </List>
    </div>
  )
}

export default Sidelines
