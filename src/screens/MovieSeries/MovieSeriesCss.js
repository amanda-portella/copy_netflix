import { Box, Button, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxBackground = styled(Box)((props) => ({
    backgroundImage: `url(${props.image})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }));

export const BoxGradient = styled(Box)`
    width: 100w;
    height: 100vh;
    background: linear-gradient(to top, #111 10%, transparent 90%);
` 

export const BoxTitleButtons = styled(Box)`
    display: flex; 
    height: inherit; 
    justify-content: center; 
    flex-direction: column;
    padding-left: 30px;
`

export const TypographyTitle = styled(Typography)`
    font-size: 50px;
    font-weight: bold;
`

export const BoxButtons = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 15px;
`

export const ButtonPlay = styled(Button)`
    align-self: flex-start;
    padding: 10px 30px;
    font-size: 18px;
    background-color: #FFF;
    color: #111;
    font-weight: bold;
`

export const ButtonCircle = styled(IconButton)`
    background-color: #2A2A2A99;
    border: 1px solid #FFF;
    border-radius: 50%;
    color: #FFF;
    padding: 15px 15px;
`

export const BoxInfo = styled(Box)`
    padding-left: 30px;
    padding-right: 30px;
    margin-top: -300px;
    display: flex;
    justify-content: space-between;
`

export const BoxNumbers = styled(Box)`
    display: flex;
    gap: 10px;
`

export const TypographyPoints = styled(Typography)`
    font-Size: 25px;
    font-Weight: bold;
    color: #46d369;
`

export const TypographyInfo = styled(Typography)`
    font-size: 25px;
`

export const TypographyOverview = styled(Typography)`
    width: 70%;
    margin-top: 30px;
    font-size: 19px;
`

export const TypographyGenres = styled(Typography)`
    margin-top: 30px;
    font-size: 16px;
    color: #777777;
`