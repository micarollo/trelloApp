import React, {useContext, useState} from 'react';
import { Typography, InputBase } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import storeApi from '../store.Api'

const titleStyle = {
    editableTitle: {
        display: "flex",
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "bold",
    },
    inputStyle: {
        fontWeight: "bold",
        '&:focus': {
            background: "#ddd",
            margin: ".5em",
        },
    },
}


const Title = ({title, listId}) => {
    const [open, setOpen] = useState()
    const [newTitle, setNewTitle] = useState(title)
    const { changeTitle } = useContext(storeApi);
    const { deleteList } = useContext(storeApi);

    const handleOnChange = (e) => {
        setNewTitle(e.target.value)
    }

    const handleOnBlur = () => {
        changeTitle(newTitle, listId)
        setOpen(false);
    }

    const handleOnClick = (e) => {
        deleteList(listId)
    }

    return(
        <>
        {open ? (
            <InputBase 
            onChange={handleOnChange}
            value={newTitle} 
            autoFocus
            style={titleStyle.inputStyle} 
            fullWidth
            onBlur={handleOnBlur}
            />
            ) : (
            <div style={titleStyle.editableTitle}>
                <Typography style={titleStyle.title} onClick={()=> setOpen(!open)}>{title}</Typography>
                <DeleteIcon
                onClick={handleOnClick}
                />
                
            </div>
            )}
        </>
    )
}

export default Title