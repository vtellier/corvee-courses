import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import {
    List,
    ListItem
} from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div>
      <AppBar position="static">
        <h1>Corvée-courses</h1>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper>
            <Typography gutterBottom variant="h4" component="h2">Menus</Typography>
            <List>
              <ListItem button>Soupe aux choux</ListItem>
              <ListItem button>Cassoulet</ListItem>
            </List>
            <Button>Ajouter un plat</Button>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper>
            Les à-côté
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper>
            Ingrédients
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper>
            Apercu de la liste
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
