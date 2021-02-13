import React, {useState , useContext} from 'react';
import Paper from '@material-ui/core/Paper'
import { Button, IconButton, InputBase } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import storeApi from '../../store.Api'

const inputCardStyle = {
    paper: {
        margin: ".5em",
        paddingBottom: "2em",
    },
    input: {
        margin: ".5em",
    },
    btnConfirm:{
        backgroundColor: "green",
        color: "#fff",
        margin: ".5em"
    },
}

const InputCard = ({setOpen, listId}) => {
    const {addNewCard} = useContext(storeApi)
    const [inputText, setInputText] = useState('')

    const handleOnChange = (e) => {
        setInputText(e.target.value)
    }

    const handleButtonConfirm = (e) => {
        addNewCard(inputText, listId)
        setOpen(false)
    }

    return(
        <>
            <Paper style={inputCardStyle.paper}>
                <InputBase
                onChange={handleOnChange}
                style={inputCardStyle.input}
                placeholder="Enter a title of this card"
                value={inputText}
                ></InputBase>
            </Paper>
            <>
                <Button 
                style={inputCardStyle.btnConfirm}
                onClick={() => handleButtonConfirm()}
                >Add Card</Button>
                <IconButton
                onClick={() => setOpen(false)}>
                    <ClearIcon></ClearIcon>
                </IconButton>
            </>
        </>
    )
}

export default InputCard