import { useContext } from "react";

import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { API } from '../../../service/api';
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
   margin: 30px 900px 30px 70px;
  background: linear-gradient(135deg, #568db5ff 0%, #ffffff 100%);
  padding: 10px;
  border-radius: 30px;
  transition: background 0.4s ease-in-out;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
        border: '10px solid #163448ff';

`;

const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #fff5f5ff;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
    border: 1px solid #878787;
        border-radius: 10px;
    background: #ffffffff;
`;

const Comment = ({ comment, setToggle }) => {

    const { account } = useContext(DataContext)
    
    const removeComment = async () => {
       await API.deleteComment(comment._id);
       setToggle(prev => !prev);
    }

    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
                { comment.name === account.username && <DeleteIcon onClick={() => removeComment()} color="error" /> }
            </Container>
            <Typography>{comment.comments}</Typography>
        </Component>
    )
}

export default Comment;