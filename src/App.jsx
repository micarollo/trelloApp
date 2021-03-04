import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import {v4 as uuid} from 'uuid'
import InputContainerNewList from './components/InputContainerNewList';
import List from './components/List'
import store from './store'
import StoreApi from './store.Api'

const addStyle = {
    app: {
        display: "flex",
    }
}


const App = () => {
    const [data, setData] = useState(store)

    const addNewCard = (content, listId) => {
        const newCardId = uuid();
        
        const newCard = {
            id: newCardId, 
            content,
        }

        const list = data.lists[listId]
        list.cards = [...list.cards, newCard]

        const newDataState = {
            ...data,
            lists: {
                ...data.lists, 
                [listId]: list,
            },
        }
        setData(newDataState)
    };

    const addNewList = (title) => {
        const newListId = uuid();

        const newList = {
            id: newListId,
            title,
            cards: [],
        };

        
        const newListState = {
            lists: {
                ...data.lists,
                [newListId] : newList
            },
            listsIds: [...data.listsIds, newListId]
        };

        setData(newListState);

    }

    const changeTitle = (title, listId) => {
        const list = data.lists[listId]
        list.title = title

        const newState = {
            ...data,
            lists:{
                ...data.lists,
                [listId] : list,
            },
        }

        setData(newState)
    }

    const deleteList = (listId) => {
        
        let newState = {
            
            lists: {
                ...data.lists,
            },
            listsIds: [...data.listsIds]
        };
        delete newState.lists[listId]

        newState.listsIds = newState.listsIds.filter(item => item!==listId)
        
        setData(newState)

        
    }

    const deleteCard = (cardId, listId) => {
        
        let newState = {
            
            lists: {
                ...data.lists,
            },
            listsIds: [...data.listsIds]
        };
        
        newState.lists[listId].cards = newState.lists[listId].cards.filter(card => card.id!==cardId)

        
        setData(newState)
    }

    const onDragEnd = (result) => {
        const { destination, source,  draggableId } = result;

        if(!destination){
            return;
        }

        const sourceList = data.lists[source.droppableId]
        const destinationList = data.lists[destination.droppableId]
        const dragCard = sourceList.cards.filter(
            (card) => card.id == draggableId
        )[0];

        if (source.droppableId == destination.droppableId) {
            sourceList.cards.splice(source.index, 1)
            destinationList.cards.splice(destination.index, 0, dragCard)
        
            const newState = {
                ...data, 
                lists: {
                    ...data.lists,
                    [sourceList.id] : destinationList,
                },
            };
            setData(newState)
        }
    }

    return(
        <StoreApi.Provider value={{ addNewCard , addNewList , changeTitle , deleteList , deleteCard}}>
        <DragDropContext onDragEnd={onDragEnd}>
        <div style={addStyle.app}>
            {data.listsIds.map((listsIds) => {
                const list = data.lists[listsIds];
                return <List list={list} key={listsIds}/>
            })}
            <InputContainerNewList type="list"></InputContainerNewList>
        </div>
        </DragDropContext>
        </StoreApi.Provider>
    )
};

export default App



