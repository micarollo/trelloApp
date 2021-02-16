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

const InputCard = ({setOpen, listId , type}) => {
    const {addNewCard , addNewList} = useContext(storeApi)
    const [inputText, setInputText] = useState('')

    const handleOnChange = (e) => {
        setInputText(e.target.value)
    }

    const handleButtonConfirm = (e) => {
        if(type === 'card') {
            addNewCard(inputText, listId)
            setOpen(false)
        }else{
            addNewList(inputText)
            setOpen(false)
        }
        
    }

    return(
        <>
            <Paper style={inputCardStyle.paper}>
                <InputBase
                onChange={handleOnChange}
                style={inputCardStyle.input}
                placeholder={type === 'card' 
                ?"Enter card content"
                :"Enter title list"}
                value={inputText}
                ></InputBase>
            </Paper>
            <>
                <Button 
                style={inputCardStyle.btnConfirm}
                onClick={() => handleButtonConfirm()}>
                {type === 'card'
                ?"Add Card"
                :"Add List"}
                </Button>
                <IconButton
                onClick={() => setOpen(false)}>
                    <ClearIcon></ClearIcon>
                </IconButton>
            </>
        </>
    )
}

export default InputCard