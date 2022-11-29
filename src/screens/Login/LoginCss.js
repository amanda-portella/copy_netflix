import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxImageBackground = styled(Box)`
    height: 100vh;
    background-image: url('https://img.helpnetsecurity.com/wp-content/uploads/2020/03/23143409/netflix-collection.jpg');
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.4;
`;

export const BoxContainerAll = styled(Box)`
    height: 80px; 
    position: absolute; 
    top: 1px; 
    left: 0px; 
    right: 0px; 
    bottom: 0px;
`

export const BoxContainerForm = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center; 
`

export const BoxContainerComponents = styled(Box)`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    background-color: #0B0B04;
    padding: 70px 100px 70px 100px; 
`
export const TypographyEnter = styled(Typography)`
    align-self: flex-start;
    font-weight: bold;
    margin-bottom: 30px;
    font-size: 32px;
`

export const TextFieldLogin = styled(TextField)`
    background-color: #333333;
    border-radius: 8px; 
    width: 400px;
    margin-bottom: 20px;
`

export const InputProps = {
    color: '#FFF',
    fontSize: 20
}

export const InputLabelProps = {
    color : '#8C8C8C',
    fontSize: 18
}

export const ButtonEnter = styled(Button)`
    background-color: #E50914;
    color: #FFF; 
    margin-top: 20px;
    width: 400px;
    padding: 15px;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: bold;
    &:hover {
        background-color: #E50914;
    }
`

export const BoxRememberHelp = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 400px; 
    align-items: center;
    margin-top: 5px;
    margin-bottom: 60px;
`

export const BoxCheckbox = styled(Box)`
    display: flex;
    align-self: flex-start;
    align-items: center;
`

export const LinkNeedHelp = styled(Link)`
    font-size: 16px;
    color: #B3B3B3;
    cursor: pointer;
`

export const TypographyNewNetflix = styled(Typography)`
    font-size: 16px;
    color: #737373;
`

export const LinkSignUp = styled(Link)`
    font-size: 16px;
    color: #FFF;
    cursor: pointer;
`

export const BoxInfo = styled(Box)`
    width: 400px;
    margin-top: 10px;
`

export const TypographyDisclaimer = styled(Typography)`
    font-size: 14px;
    color: #8c8c8c;
`

export const LinkLearnMore = styled(Link)`
    font-size: 14px;
    color: #0071EB;
    cursor: pointer;
`

export const HelperText = {
    color: '#e87c03',
    fontSize: 13
}