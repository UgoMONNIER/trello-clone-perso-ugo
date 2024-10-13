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
    name_espace: yup
        .string('Enter your name space')
        .required('name space is required'),
    description: yup
        .string('Enter your description')
        .required('description is required'),
});


const ModalForm = ({ reloadSpaceContent, handleClose }) => {

    const params = useParams()

    const handleSubmit = ({ name_espace, description }) => {


        
        let space = {
            id: uuid(),//un id random,
            title: formik.values.name_espace,//data du form,
            description: formik.values.description, // data du form,
            tables: []
        }

        let myHeaders = new Headers({ "Content-Type": "application/json" })
        const config = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(space)
        }

        fetch(`http://localhost:5000/spaceswork/${params.uid}`, config)
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
            name_espace: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

   


    return (
        <Box
              style={{
          display: "flex",
          justifyContent:'center',
          alignContent:'center',
          position: 'absolute',
          borderRadius:'10px',
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
                width:'700px',
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                
            }}
        >
            <TextField
                type="text"
                name="name_espace"
                style={{ margin: "20px" }}
                label="Nom de l'espace"
                value={formik.values.name_espace}
                onChange={formik.handleChange}
                error={formik.touched.name_espace && Boolean(formik.errors.name_espace)}
                helperText={formik.touched.name_espace && formik.errors.name_espace}
            />
            <TextField
                type="text-filesarea"
                name="description"
                multiline
                style={{ margin: "20px" }}
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
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
                Créer un espace
            </Button>


        </form>
        </Box>

    );
};

export default ModalForm;