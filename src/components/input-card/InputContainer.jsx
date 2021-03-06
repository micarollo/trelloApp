import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import InputCard from './InputCard';

const addStyle = {
    input: {
        flexDirection: "row",
        width: 300,
    },
    addCard: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        padding: ".5rem",
        marginLeft: ".5rem",
        '&:hover':{
            backgroundColor: "#EBECF0",
        },
    },
}

const InputContainer = ( {listId , type} ) => {
    const [open, setOpen] = useState(false)
    return(
        <div style={addStyle.input}>
        {open ? (
        <InputCard setOpen={setOpen} listId={listId} type={type}></InputCard>
        ) : (
        <Typography 
        style={addStyle.addCard} 
        onClick={() => setOpen(!open)}>
        +Add a card
        </Typography>    
        )}
        </div>
    )
}

export default InputContainer