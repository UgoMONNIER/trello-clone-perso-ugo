import React, { useState } from "react";
import {
    Button
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from "react-router-dom";

import { v4 as uuid } from 'uuid'



const DeleteTask = ({ reloadSpaceContent, idColumn, idTask }) => {
    const params = useParams()



    const handleClickDeleteTask = () => {

        const config = {
            method: 'DELETE',
        }
        fetch(`http://localhost:5000/tasks/${params.uid}/${params.id_space}/${params.idtable}/${idColumn}/${idTask}/deleteTask`, config)
            .then((response) => {
                return response.json() // pour mettre en format JSON ?
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

        <CloseIcon
        onClick={handleClickDeleteTask}
        sx={{ 
        cursor:"pointer",
        width: "20px", marginLeft:"40px"}} />
    );
};

export default DeleteTask;