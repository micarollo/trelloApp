import React, {useState} from 'react';
import { Typography, InputBase } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

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


const Title = ({title}) => {
    const [open, setOpen] = useState()
    return(
        <>
        {open ? (
            <InputBase 
            value={title} 
            autoFocus
            style={titleStyle.inputStyle} 
            fullWidth
            onBlur={() => setOpen(!open)}
            />
            ) : (
            <div style={titleStyle.editableTitle}>
                <Typography style={titleStyle.title} onClick={()=> setOpen(!open)}>{title}</Typography>
                <MoreHorizIcon/>
            </div>
            )}
        </>
    )
}

export default Title