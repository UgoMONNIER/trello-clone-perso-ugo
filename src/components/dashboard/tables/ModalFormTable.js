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
    name_tableau: yup
        .string('Enter your name space')
        .required('name space is required'),
    description_tab: yup
        .string('Enter your description')
        .required('description is required'),
});


const ModalFormTable = ({ reloadSpaceContent, handleClose }) => {
    const params = useParams()




    const handleSubmit = ({ name_tableau, description_tab }) => {



        let table = {
            id: uuid(),//un id random,
            title: formik.values.name_tableau,//data du form,
            description: formik.values.description_tab, // data du form,
            columns: []
        }

        let myHeaders = new Headers({ "Content-Type": "application/json" })
        const config = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(table)
        }
        fetch(`http://localhost:5000/tables/${params.uid}/${params.id_space}`, config)
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
            name_tableau: '',
            description_tab: '',
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
                    name="name_tableau"
                    style={{ margin: "20px" }}
                    label="Nom du tableau"
                    value={formik.values.name_tableau}
                    onChange={formik.handleChange}
                    error={formik.touched.name_tableau && Boolean(formik.errors.name_tableau)}
                    helperText={formik.touched.name_tableau && formik.errors.name_tableau}
                />
                <TextField
                    type="text-filesarea"
                    name="description_tab"
                    multiline
                    style={{ margin: "20px" }}
                    label="Description"
                    value={formik.values.description_tab}
                    onChange={formik.handleChange}
                    error={formik.touched.description_tab && Boolean(formik.errors.description_tab)}
                    helperText={formik.touched.description_tab && formik.errors.description_tab}
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
                    Créer un tableau
                </Button>


            </form>
        </Box>

    );
};

export default ModalFormTable;