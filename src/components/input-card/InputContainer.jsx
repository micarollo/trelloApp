import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import InputCard from './InputCard';

const addCardStyle = {
    addCard: {
        padding: ".5rem",
        margin: ".5rem",
        '&:hover':{
            backgroundColor: "#EBECF0",
        },
    },
}

const InputContainer = () => {
    const [open, setOpen] = useState(false)
    return(
        <>
        {open ? (
        <InputCard setOpen={setOpen}></InputCard>
        ) : (
        <Typography 
        style={addCardStyle.addCard} 
        onClick={() => setOpen(!open)}
        >+ Add a card</Typography>    
        )}
        </>
    )
}

export default InputContainer