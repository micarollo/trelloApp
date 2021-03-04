import React from 'react';
import TrelloCard from './Card'
import Title from './TitleList';
import InputContainer from './input-card/InputContainer'
import { Droppable } from 'react-beautiful-dnd';

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: ".5rem",
    }
}

const List = ({list}) => {
    return(
      <div style={styles.container}>
          <Title title={list.title} listId={list.id}></Title>
          <Droppable droppableId={list.id}>
              {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.cards.map((card, index) => (
                    <TrelloCard key={card.id} card={card} cardId={card.id} listId={list.id} index={index}></TrelloCard>
                ))}
                {provided.placeholder}
              </div>)}
          </Droppable>
          <InputContainer listId={list.id} type="card"></InputContainer>
      </div>

    )
}



export default List;