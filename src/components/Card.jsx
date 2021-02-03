import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const cardStyle = {
    card: {
        padding: ".5rem",
        margin: ".5rem",
    },
}


const TrelloCard = ({card}) => {
    return(
        <Card style={cardStyle.card}>
            <Typography gutterBottom>{card.content}</Typography>
        </Card>
    )
}

export default TrelloCard