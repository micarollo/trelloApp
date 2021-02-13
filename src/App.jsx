import React, { useState } from 'react';
import {v4 as uuid} from 'uuid'
import List from './components/List'
import store from './store'
import StoreApi from './store.Api'

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

    return(
        <StoreApi.Provider value={{ addNewCard }}>
        <div>
            {data.listsIds.map((listsIds) => {
                const list = data.lists[listsIds];
                return <List list={list} key={listsIds}/>
            })}
        </div>
        </StoreApi.Provider>
    )
};

export default App



{/* class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
                <h1>To do</h1>
                 <List title="list"/>
            </>
        );
    }
}

export default App;  */}
