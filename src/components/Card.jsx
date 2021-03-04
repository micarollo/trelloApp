import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import storeApi from '../store.Api'
import { Draggable } from 'react-beautiful-dnd';

const cardStyle = {
    card: {
        padding: ".5rem",
        margin: ".5rem",
        display: "flex",
        justifyContent: "space-between",
    },
}


const TrelloCard = ({card, cardId, listId, index}) => {
    const { deleteCard } = useContext(storeApi);

    const handleOnClick = (e) => {
        deleteCard(cardId, listId)
    }

    return(
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
            <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                <Card style={cardStyle.card}>
                    <Typography gutterBottom>{card.content}</Typography>
                    <ClearIcon
                    onClick={handleOnClick}
                    > 
                    </ClearIcon>
                </Card>
            </div>)}
        </Draggable>
    )
}

export default TrelloCard