
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    background: #2c3e50;
       & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
            color: #FFFFFF;
    }

 `;

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
     const handleClick = (event) => {
  setTimeout(() => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    alert("logout successfull");
  }, 1000);
};
    
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link onClick={handleClick} to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;