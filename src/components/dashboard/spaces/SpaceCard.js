import { 
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material';
import React from 'react';
import { Link , useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";




const SpaceCard = (props) => {
    const params = useParams()
    const navigate = useNavigate();

    const handleClick = ( ) => {
        navigate(`/admin/${params.uid}/sp_w/${props.id}`)
    }
    

  return <Card  sx={{ maxWidth: 345 , marginTop: 2}}>
            <CardActionArea>
                <CardMedia
                onClick={handleClick}
                component="img"
                height="140"
                image={props.imgUrl}
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>;
};

export default SpaceCard;