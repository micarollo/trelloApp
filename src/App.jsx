import React, { useState } from 'react';
import {v4 as uuid} from 'uuid'
import InputContainerNewList from './components/InputContainerNewList';
import InputContainer from './components/input-card/InputContainer'
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

        newState.listsIds = newState.listsIds.filter(item => item!=listId)
        
        setData(newState)

        // console.log(newState)
        
    }

    return(
        <StoreApi.Provider value={{ addNewCard , addNewList , changeTitle , deleteList}}>
        <div style={addStyle.app}>
            {data.listsIds.map((listsIds) => {
                const list = data.lists[listsIds];
                return <List list={list} key={listsIds}/>
            })}
            <InputContainerNewList type="list"></InputContainerNewList>
        </div>
        </StoreApi.Provider>
    )
};

export default App



