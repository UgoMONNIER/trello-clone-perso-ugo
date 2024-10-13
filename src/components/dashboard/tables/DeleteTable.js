import React, { useState } from "react";
import {
    Button
} from "@mui/material";
import { DeleteForever } from '@mui/icons-material';
import { useParams } from "react-router-dom";

import { v4 as uuid } from 'uuid'



const DeleteTable = ({ reloadSpaceContent, idcolumn }) => {
    const params = useParams()

    const handleClick = () => {
        const config = {
            method: 'DELETE',
        }
        fetch(`http://localhost:5000/columns/${params.uid}/${params.id_space}/${params.idtable}/${idcolumn}`, config)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                reloadSpaceContent()
                console.log(data);
            })
            .catch((error) => {
                const code = error.message;
                console.log(error)
            })
    }
    
    return (
        <Button
            onClick={handleClick}
            variant="contained"
            style={{
                backgroundColor: "#AAD8E6",
                margin: "20px",
                textAlign: "center",
            }}
        >
            Supprime moi !
            <DeleteForever />
        </Button>
    );
};

export default DeleteTable;