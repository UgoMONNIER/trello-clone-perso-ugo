import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import "../../../css/style-dashboard.css"
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";
import ModalForm from "./ModalForm";



const AddEspace = ({reloadSpaceContent}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Card sx={{ maxWidth: 345, marginTop: 2 }}
    
    >

      <CardActionArea className="card-action-add-espace">


        <CardMedia className="card-media-add-espace" onClick={handleOpen} sx={{ height: 140 }}>
          <Typography className="add-espace">
            <AddIcon fontSize="large" />
            Ajouter un espace
          </Typography>
        </CardMedia>
      </CardActionArea>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      
      >
        <ModalForm 
        handleClose={handleClose}
        reloadSpaceContent={reloadSpaceContent}/>
      </Modal>


    </Card>
  );
};

export default AddEspace;