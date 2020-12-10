import React, { ReactElement } from 'react'
import {
    Typography,
    Paper,
    List, ListItem
} from '@material-ui/core';

interface Props {
    classes : any
}

const Sidelines: React.FC<Props> = ({ classes }) => {
  return (
    <Paper className={classes.paper}>
    <Typography gutterBottom variant="h4" component="h2"> Les à-côté </Typography>
    <List>
        <ListItem button>Petit déjeuner</ListItem>
        <ListItem button>Goutter</ListItem>
        <ListItem button>Apéro</ListItem>
        <ListItem button>Autres</ListItem>
    </List>
    </Paper>
  )
}

export default Sidelines
