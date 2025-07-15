import { useContext,useState, useEffect } from 'react';
import { styled, Box, Typography } from '@mui/material';
import { DataContext } from '../../context/DataProvider';
import { useLocation } from 'react-router-dom';
const Image = styled(Box)(({ purl }) => ({
  width: '100%',
  background: `url(${purl}) center/55% repeat-x #000`,
  height: '50vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 30px;
    background: #FFFFFF;
`;

const Banner = () => {
        const { account } = useContext(DataContext);
 const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [url, seturl] = useState('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDc2d2NkZDZoMXIzdHFwNHV0dHB5YTVldTZsanExM2w5OGgzZGdrOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TZf4ZyXb0lXXi/giphy.gif');
const category = queryParams.get('category'); 
 useEffect(() => {
    if(category=='Music')
  {
    seturl('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXpzdTFmcGNhb21mY3d5ajZvcnpuZW1zY29sY3FoeDU3bWJ4dTJhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4A1ySuQE9tfFIv2bEY/giphy.gif');
  }
else if(category=='Movies')
  {
    seturl('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzUzc3NtNGhzcGFhc2J2d2w1bDh5M3pzaWIxeXR5YnhkdXE3YjVhaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U8FvqfxkzxoSpokGaW/giphy.gif');
  }
else if(category=='Sports')
  {
    seturl('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzg1cnJudW84anQ0bWNhc21nOHZjd2c4cWY1bXF6cm51Zmhxa2VhaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUPGct4LThsOiwJg3K/giphy.gif');
  }
else if(category=='Tech')
  {
    seturl('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3J4Y3RkMGNqeHY3MXVrMGh5ZXdyMzdkbmZyMzRudTJ5M3kxbzhyYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26tOY3KjQUL9YhRT2/giphy.gif');
  }
  else if(category=='Fashion')
  {
    seturl('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjhwbDI3ZTZkdTcwZ2ZvdzdwYzZ2MWNiZzluZTVyeWNja21veGJqMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vBa3cuYCr6L6g/giphy.gif');
  }
  else{
    seturl('https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
  }


  }, [category]);  


    return (
        <Image  purl={url}
>
            <Heading>YOUR VERY OWN BLOG SPACE!!</Heading>
            <SubHeading>Welcome back!! {account.username}</SubHeading>
        </Image>
    )
}

export default Banner;