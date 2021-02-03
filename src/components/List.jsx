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
    }
}

const List = ({list}) => {
    return(
      <div style={styles.container}>
          <Title title={list.title}></Title>
          {list.cards.map((card) => (
              <TrelloCard key={card.id} card={card}></TrelloCard>
          ))}
          
          <InputContainer></InputContainer>
      </div>

    )
}



export default List;