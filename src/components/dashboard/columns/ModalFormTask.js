import React, { useState } from "react";
import {
    TextField,
    InputLabel,
    FormControl,
    Button,
    Select,
    Box,
    MenuItem,
    Alert,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import { useFormik } from 'formik';
import { useParams } from "react-router-dom";
import * as yup from 'yup';
import { v4 as uuid } from 'uuid'
import "./styleTask/task.css"

const validationSchema = yup.object({
    name_task: yup
        .string('Enter your name task')
        .required('name space is required'),
    description_task: yup
        .string('Enter your description')
        .required('description is required'),
    color: yup
        .string("Choose a color")
});


const ModalFormTask = ({ reloadSpaceContent, handleClose, idColumn }) => {
    const params = useParams()




    const handleSubmit = ({ name_task, description_task }) => {


        let tasks = {
            id: uuid(),//un id random,
            title: formik.values.name_task,//data du form,
            description: formik.values.description_task, // data du form,
            color: formik.values.color
        }

        let myHeaders = new Headers({ "Content-Type": "application/json" })
        const config = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(tasks)
        }
        fetch(`http://localhost:5000/tasks/${params.uid}/${params.id_space}/${params.idtable}/${idColumn}/newTask`, config)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                handleClose();
                reloadSpaceContent();

            })
            .catch((error) => {
                const code = error.message;
            })


    }

    const formik = useFormik({
        initialValues: {
            name_task: '',
            description_task: '',
            color: "#B0F2B6"
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });




    return (
        <Box
            style={{
                display: "flex",
                justifyContent: 'center',
                alignContent: 'center',
                position: 'absolute',
                borderRadius: '10px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: "whitesmoke"
            }}
        >

            <form
                onSubmit={formik.handleSubmit}
                style={{

                    display: "flex",
                    width: '700px',
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",

                }}
            >
                <TextField
                    type="text"
                    name="name_task"
                    style={{ margin: "30px" }}
                    label="Nom de la tâche"
                    value={formik.values.name_tableau}
                    onChange={formik.handleChange}
                    error={formik.touched.name_table && Boolean(formik.errors.name_table)}
                    helperText={formik.touched.name_table && formik.errors.name_table}
                />
                <TextField
                    type="text-filesarea"
                    name="description_task"
                    multiline
                    style={{ margin: "30px" }}
                    label="Description de la tâche"
                    value={formik.values.description_task}
                    onChange={formik.handleChange}
                    error={formik.touched.description_task && Boolean(formik.errors.description_task)}
                    helperText={formik.touched.description_task && formik.errors.description_task}
                />
                <FormControl variant="standard" sx={{ m: 2, minWidth: 120, width: "350px" }}>
                    <InputLabel
                        style={{
                            marginLeft: "20px",
                        }}
                    >Choissisez une couleur</InputLabel>
                    <Select
                        style={{
                            margin: "20px",
                            backgroundColor: formik.values.color,
                            borderRadius:"3px",
                        }}
                        name="color"
                        value={formik.values.color}
                        onChange={formik.handleChange}
                        error={formik.touched.color && Boolean(formik.errors.color)}
                        helperText={formik.touched.color && formik.errors.color}
                    >
                        
                        <MenuItem value={"#FFB121"} sx={{ backgroundColor: "#FFB121" }}> Orange</MenuItem>
                        <MenuItem value={"#B0F2B6"} sx={{ backgroundColor: "#B0F2B6" }}> Vert </MenuItem>
                        <MenuItem value={"#F2055C"} sx={{ backgroundColor: "#F2055C" }}> Rouge</MenuItem>
                        <MenuItem value={"#4364F7"} sx={{ backgroundColor: "#4364F7" }}> Bleu</MenuItem>
                    </Select>
                </FormControl>
                <div className="lign">
                    <Button
                        onClick={handleClose}
                        variant="outlined"
                        style={{
                            backgroundColor: "primary",
                            borderRadius: "10px",
                            marginLeft:"60px",
                            marginBottom: "20px",
                            width: "250px"
                        }}
                    >
                        Annuler
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        style={{
                            backgroundColor: "#0554F2",
                            borderRadius: "10px",
                            marginRight:"60px",
                            marginBottom: "20px",
                            width: "250px"
                        }}
                    >
                        Créer une tâche
                    </Button>

                </div>
            </form>
        </Box>

    );
};

export default ModalFormTask;