
import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    margin: 10px;
    display: flex;
    border: 2px solid #1E90FF;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(30, 144, 255, 0.2);
    align-items: center;
   background: linear-gradient(360deg, #123069ff 0%, #8a9fc3ff 80%);
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    border: '1px ',
    height: 200
});

const Text = styled(Typography)`
    color: #878787
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color:#123069ff;
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;
const GradientBox = styled(Box)`
  width: 90%;
  height: 85%;
  padding: 24px;
  background: linear-gradient(135deg, #87CEEB 0%, #00BFFF 100%);
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 191, 255, 0.4);
  flex-shrink: 0;
  min-width: 200px;
  min-height: 150px;
  max-width: 800px;
  max-height: 600px;
`;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <GradientBox>
            <Image src={url} alt="post" />
            <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text sx={{ fontStyle: '-moz-initial', textAlign: 'right',color:'black' }}>Author: {post.username}</Text>
           <Text sx={{ fontStyle: 'italic', textAlign: 'right',color:'black' }}>Category:{post.categories}</Text>

           </Box>
            
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            
            <Details>{addEllipsis(post.description, 100)}</Details>
        </GradientBox>       
        </Container>
    )
}

export default Post;