import React from 'react'
import {
    Typography,
    Hidden,
} from '@material-ui/core';

interface SummaryProps {
}

const Summary: React.FC<SummaryProps> = (props) => {
    return (
        <>
            <Hidden smDown>
                <Typography gutterBottom variant="h4" component="h2"> Voici la liste des courses </Typography>
            </Hidden>
            <span> Ajustez votre liste en fonction de ce que vous avez déjà dans vos équipés </span>
        </>
    );
}

export default Summary;
