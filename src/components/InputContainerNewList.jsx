import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import InputCard from './input-card/InputCard';


const addListStyle = {
    addList: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        padding: ".5rem",
        marginLeft: ".5rem",
        '&:hover':{
            backgroundColor: "#EBECF0",
        },
    },
    input: {
        flexDirection: "row",
        width: 300,
    },
}

const InputContainerNewList = ( {listId , type} ) => {
    const [open, setOpen] = useState(false)
    return(
        <div style={addListStyle.input}>
        {open ? (
        <InputCard setOpen={setOpen} listId={listId} type={type}></InputCard>
        ) : (
        <Typography 
        style={addListStyle.addList} 
        onClick={() => setOpen(!open)}
        >+ Add a list</Typography>    
        )}
        </div>
    )
}

export default InputContainerNewList