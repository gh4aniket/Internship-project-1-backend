import { useState, useEffect, useContext } from 'react';

import { Box, Typography, styled,keyframes} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom'

import { API } from '../../service/api';

import { DataContext } from '../../context/DataProvider';

// components
import Comments from './comments/Comments';

const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled(Box)(({ theme }) => ({
   marginTop: '30px',
  marginRight: '5px',
  marginBottom: '60px',
  marginLeft: '5px',
     backgroundColor: '#2c3e50',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image = styled('img')({
    width: '90%',
    height: '50vh',
    objectFit: 'cover',
    margin: '10px 20px 10px 80px',
        borderRadius: '16px' // sets rounded corners
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const AnimatedHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.5rem',
  padding: '24px 60px',
  textAlign: 'center',
  color: '#fff',
  position: 'relative',
  background: 'linear-gradient(135deg, #2c3e50, #34495e)',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
  margin: '60px auto',
  width: 'fit-content',
  clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)', // <-- slanted trapezoid
  transition: 'transform 0.4s ease',
  zIndex: 2,
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    backgroundImage: `
      repeating-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.06) 0px,
        rgba(255, 255, 255, 0.12) 10px,
        transparent 10px,
        transparent 20px
      )
    `,
    animation: 'slideZigzag 8s linear infinite',
    zIndex: 1,
    pointerEvents: 'none'
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
    padding: '18px 30px'
  }
}));

const DescriptionBox = styled(Typography)(({ theme }) => ({
   fontSize: '30px',
   fontWeight: 200,
  padding: '20px 30px',
  margin: '20px auto',
  color: '#2c3e50',
  background: 'linear-gradient(135deg, #568db5ff 0%, #ffffff 100%)',
  borderRadius: '20px',
  textAlign: 'center',
  border: '2px solid #3498db',
  boxShadow: '0 6px 18px rgba(52, 152, 219, 0.15)',
  transition: 'box-shadow 0.4s ease',
height:'1000px',
width:'90%',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    padding: '16px 20px',
    margin: '16px'
  }
}));

const DetailView = () => {
        const [url, seturl] = useState('https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80');
    const [post, setPost] = useState({});
    const { account } = useContext(DataContext);

    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
                seturl(response.data.picture);
            }
        }
        fetchData();
    }, []);

    const deleteBlog = async () => {  
        await API.deletePost(post._id);
        navigate('/')
    }

    return (
        <Container>
            <Image src={url} alt="post" />
            <Box style={{ float: 'right' }}>
                {   
                    account.username === post.username && 
                    <>  
                        <Link to={`/update/${post._id}`}><EditIcon style={{backgroundColor:'white'}} color="primary" /></Link>
                        <DeleteIcon style={{backgroundColor:'white'}} onClick={() => deleteBlog()} color="error" />
                    </>
                }
            </Box>
            <AnimatedHeading>{post.title}</AnimatedHeading>

            <Author>
                <Link to={`/?username=${post.username}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography style={{fontWeight: 600,marginLeft:'30px', fontSize:'25px'}}>Author: <span style={{fontWeight: 600,marginRight:'30px', fontSize:'25px'}}>{post.username}</span></Typography>
                </Link>
                <Typography style={{marginLeft: 'auto',marginRight:'30px', fontWeight:600, fontSize:'25px'}}>Created On: {new Date(post.createdDate).toDateString()}</Typography>
            </Author>

            <DescriptionBox>{post.description}</DescriptionBox>
            <Comments post={post} />
        </Container>
    )
}

export default DetailView;