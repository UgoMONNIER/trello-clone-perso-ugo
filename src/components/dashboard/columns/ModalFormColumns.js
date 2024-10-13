import React, { useState } from "react";
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
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


const validationSchema = yup.object({
    name_column: yup
        .string('Enter your name space')
        .required('name space is required'),
    description_column: yup
        .string('Enter your description')
        .required('description is required'),
});


const ModalFormColumns = ({ reloadSpaceContent, handleClose }) => {
    const params = useParams()




    const handleSubmit = ({ name_column, description_column }) => {



        let column = {
            id: uuid(),//un id random,
            title: formik.values.name_column,//data du form,
            description: formik.values.description_column, // data du form,
            tasks: []
        }

        let myHeaders = new Headers({ "Content-Type": "application/json" })
        const config = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(column)
        }
        fetch(`http://localhost:5000/columns/${params.uid}/${params.id_space}/${params.idtable}`, config)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                reloadSpaceContent()
                handleClose();
                console.log(data);
            })
            .catch((error) => {
                const code = error.message;
                console.log(error)
            })


    }

    const formik = useFormik({
        initialValues: {
            name_column: '',
            description_column: '',
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
                    name="name_column"
                    style={{ margin: "20px" }}
                    label="Nom de la colonne"
                    value={formik.values.name_column}
                    onChange={formik.handleChange}
                    error={formik.touched.name_column && Boolean(formik.errors.name_column)}
                    helperText={formik.touched.name_column && formik.errors.name_column}
                />
                <TextField
                    type="text-filesarea"
                    name="description_column"
                    multiline
                    style={{ margin: "20px" }}
                    label="Description de la colonne"
                    value={formik.values.description_column}
                    onChange={formik.handleChange}
                    error={formik.touched.description_column && Boolean(formik.errors.description_column)}
                    helperText={formik.touched.description_column && formik.errors.description_column}
                />



                <Button
                    type="submit"
                    variant="contained"
                    style={{
                        backgroundColor: "#0554F2",
                        borderRadius: "10px",
                        margin: "20px",
                    }}
                >
                    Créer une colonne
                </Button>


            </form>
        </Box>

    );
};

export default ModalFormColumns;