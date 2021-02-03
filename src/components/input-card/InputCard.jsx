import React, {useState , useContext} from 'react';
import Paper from '@material-ui/core/Paper'
import { Button, IconButton, InputBase } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import data from '../../store'
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

const InputCard = ({setOpen}) => {
    const {addNewCard} = useContext(storeApi)
    const [inputText, setInputText] = useState('')

    const handleButtonConfirm = () => {
        addNewCard(inputText)
        setOpen(false)
    }

    const handleOnChange = (e) => {
        setInputText(e.target.value)
    }

    return(
        <>
            <Paper style={inputCardStyle.paper}>
                <InputBase
                onChange={handleOnChange}
                style={inputCardStyle.input}
                placeholder="Enter a title of this card"
                onBlur={()=> setOpen(false)}
                ></InputBase>
            </Paper>
            <>
                <Button 
                style={inputCardStyle.btnConfirm}
                onClick={handleButtonConfirm}
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