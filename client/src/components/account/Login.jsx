import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled ,Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
      background: linear-gradient(0deg, #1a1a40 0%, #2c3e80 100%);
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    transition: background 0.4s ease-in-out;
    border-radius: 16px;
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #4f8edc;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'https://i.postimg.cc/8CgcxQ6z/Screenshot-2025-07-12-140552.png';

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }

        
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
 <Grid container sx={{ height: '100vh' }}>
        {/* Left Half */}
        <Grid item xs={12} md={6}>
            {/* You can import a separate component or use inline JSX */}
            <Box
                sx={{
                    height: '100%',
                    background: 'linear-gradient(to bottom right, #1a1a40, #2c3e50)',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 4
                }}
            >
                <Typography variant="h3" align="center">Welcome to Blog Space</Typography>
                <Typography variant="subtitle1" align="center" sx={{ mt: 2, opacity: 0.8 }}>
                    Express your ideas, share your knowledge.
                </Typography>
            </Box>
        </Grid>

        {/* Right Half with Original Login UI */}
        <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
            <Component>
                <Box>
                    <Image src={imageURL} alt="blog" />
                    {
                        account === 'login' ? (
                            <Wrapper>
                                <TextField style={{  color: '#ffffff'  }}variant="outlined" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                                <TextField variant="outlined" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                {error && <Error>{error}</Error>}
                                <LoginButton variant="contained" onClick={() => loginUser()} >Login</LoginButton>
                                <Text style={{ textAlign: 'center' }}>OR</Text>
                                <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                            </Wrapper>
                        ) : (
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                                <SignupButton onClick={() => signupUser()} >Signup</SignupButton>
                                <Text style={{ textAlign: 'center' }}>OR</Text>
                                <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                            </Wrapper>
                        )
                    }
                </Box>
            </Component>
        </Grid>
    </Grid>
    )
}

export default Login;