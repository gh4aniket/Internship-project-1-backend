
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email,LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://plus.unsplash.com/premium_photo-1664360971209-94360ceb5f3a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Aniket Swaroop Shrivastava</Typography>
                <Text variant="h5">I'm a 3rd year Btech. Student at Maharaja Agrasen Institue Of technology, Delhi. 
                    I've built websites and  desktop applications.<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/gh4aniket" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/gh21aniket/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        ,send me an Email on
                            <Email />
                         gh4aniket@gmail.com.
                         or connect with me on LinkedIn
                        <Link href="https://www.linkedin.com/in/aniket-swaroop-shrivastava-34a879292/" color="inherit" target="_blank">
                            <LinkedIn />
                        </Link>
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;