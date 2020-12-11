import React from 'react'
import {
    Typography,
    List, ListItem
} from '@material-ui/core';

interface Props {
}

const Sidelines: React.FC<Props> = () => {
  return (
    <div>
      <Typography gutterBottom variant="h4" component="h2"> Les à-côté </Typography>
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
