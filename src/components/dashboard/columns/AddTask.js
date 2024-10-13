import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import "../../../css/style-dashboard.css"
import Typography from '@mui/material/Typography';
import { Modal } from "@mui/material";
import ModalFormTask from "./ModalFormTask";
import "./styleTask/task.css"


const AddTask = ({ reloadSpaceContent, idColumn }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <Card sx={{ maxWidth: 345, marginTop: 2 }}

        >

            <CardActionArea >
                <CardMedia onClick={handleOpen} sx={{ height: 40 }}>
                    <Typography className="add-espace">
                        <AddIcon fontSize="large" />
                        Ajouter une tâche
                    </Typography>
                </CardMedia>
            </CardActionArea>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalFormTask
                    idColumn={idColumn}
                    handleClose={handleClose}
                    reloadSpaceContent={reloadSpaceContent} />
            </Modal>


        </Card>
    );
};

export default AddTask;
