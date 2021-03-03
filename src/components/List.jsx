import React from 'react';
import TrelloCard from './Card'
import Title from './TitleList';
import InputContainer from './input-card/InputContainer'

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
          {list.cards.map((card) => (
              <TrelloCard key={card.id} card={card} cardId={card.id} listId={list.id}></TrelloCard>
          ))}
          
          <InputContainer listId={list.id} type="card"></InputContainer>
      </div>

    )
}



export default List;