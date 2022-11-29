import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Checkbox } from '@mui/material'
import { BoxCheckbox, BoxContainerAll, BoxContainerComponents, BoxContainerForm, BoxImageBackground, BoxInfo, BoxRememberHelp, ButtonEnter, HelperText, InputLabelProps, InputProps, LinkLearnMore, LinkNeedHelp, LinkSignUp, TextFieldLogin, TypographyDisclaimer, TypographyEnter, TypographyNewNetflix } from "./LoginCss.js";

const Login = () => {

    const navigate = useNavigate();
    const [ rememberMe, setRememberMe ] = useState(true);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ checkEmail, setCheckEmail ] = useState(false);
    const [ checkPassword, setCheckPassword ] = useState(false);

    const handleLogin = () => {
        if(email === "") {
            setCheckEmail(true)
            return false
        }
        if(password === "") {
            setCheckPassword(true)
            return false
        }
        navigate('/home')
    };

    return (<>
        <BoxImageBackground></BoxImageBackground>

        <BoxContainerAll>
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Logo Netflix" style={{height: "100%"}}/>
            <BoxContainerForm>
                <BoxContainerComponents>
                    <TypographyEnter>Sign In</TypographyEnter>
                    <TextFieldLogin 
                        variant="filled" 
                        label="Email or phone number" 
                        inputProps={{style: InputProps}} 
                        InputLabelProps={{style : InputLabelProps }} 
                        size="medium"
                        focused={checkEmail ? true : false}
                        color={checkEmail ? 'warning' : ''}
                        helperText={checkEmail ? "Please enter a valid email or phone number." : ""}
                        FormHelperTextProps={{ style: HelperText}}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextFieldLogin 
                        variant="filled" 
                        label="Password"
                        inputProps={{style: InputProps}} 
                        InputLabelProps={{style : InputLabelProps}} 
                        size="medium"
                        type="password"
                        focused={checkPassword ? true : false}
                        color={checkPassword ? 'warning' : ''}
                        helperText={checkPassword ? "Your password must contain between 4 and 60 characters." : ""}
                        FormHelperTextProps={{ style: HelperText}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <ButtonEnter variant="contained" onClick={() => handleLogin()}>Sign In</ButtonEnter>
                    <BoxRememberHelp>
                        <BoxCheckbox>
                            <Checkbox
                                sx={{
                                    color: "#B3B3B3",
                                    '&.Mui-checked': { color: "#FFF" },
                                    '& .MuiSvgIcon-root': { fontSize: 28 },
                                    marginRight: -1,
                                    marginLeft: -1.5
                                }} 
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <Typography style={{color: "#B3B3B3"}}>Remember me?</Typography>
                        </BoxCheckbox>
                        <Typography>
                            <LinkNeedHelp variant="h6" underline='hover'>Need help?</LinkNeedHelp>
                        </Typography>
                    </BoxRememberHelp>
                    <Box style={{alignSelf: 'flex-start'}}>
                        <TypographyNewNetflix>
                            New to Netflix? 
                            <LinkSignUp variant="h6" underline='hover'> Sign up now.</LinkSignUp>
                        </TypographyNewNetflix>
                        <BoxInfo>
                            <TypographyDisclaimer>
                                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                                <LinkLearnMore variant="h6" underline='hover'> Learn more.</LinkLearnMore>
                            </TypographyDisclaimer>
                        </BoxInfo>
                    </Box>
                </BoxContainerComponents>
            </BoxContainerForm>
        </BoxContainerAll>
    </>)
};

export default Login;