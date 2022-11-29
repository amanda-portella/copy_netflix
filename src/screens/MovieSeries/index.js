import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Box, Tooltip } from "@mui/material";
import { getMovieInfo } from "../../Tmdb";
import { BoxBackground, BoxButtons, BoxGradient, BoxInfo, BoxNumbers, BoxTitleButtons, ButtonCircle, ButtonPlay, TypographyGenres, TypographyInfo, TypographyOverview, TypographyPoints, TypographyTitle } from "./MovieSeriesCss";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

const MovieSeries = () => {

    const { type, id } = useParams();
    const [ background, setBackground ] = useState("");
    const [ info, setInfo ] = useState({});

    useEffect(() => {
        const getInfo = async () => {
            let data = await getMovieInfo(id, type)
            setBackground(data.backdrop_path)
            setInfo(data)
        }
        getInfo()
    },[id, type])

    const sendToWatch = (path) => {
        window.location = path
    }

    //Monta a url de background
    let urlImage = `https://image.tmdb.org/t/p/original${background}`

    //Trata a data da série ou filme
    let year = new Date(info.first_air_date || info.release_date);

    //Converte o runtime dos filmes
    let hours = Math.floor(info.runtime / 60)
    let minutes = info.runtime % 60
    let runtime = `${hours}h ${minutes}m`

    //Trata da lista de gêneros
    let genres = [];
    for(let i in info.genres) {
        genres.push(info.genres[i].name)
    }

    return (info ? <Box>
        <BoxBackground image={urlImage}>
            <BoxGradient>
                <BoxTitleButtons>
                    <TypographyTitle>{info.title || info.name}</TypographyTitle>
                    <BoxButtons>
                        <ButtonPlay variant="contained" onClick={() => sendToWatch(info.homepage)}>
                            ► Play
                        </ButtonPlay>
                        <Tooltip title="Add to My list" arrow>
                            <ButtonCircle variant="contained"><AddOutlinedIcon/></ButtonCircle>
                        </Tooltip>
                        <Tooltip title="I like this" arrow>
                            <ButtonCircle variant="contained"><ThumbUpAltOutlinedIcon/></ButtonCircle>
                        </Tooltip>
                    </BoxButtons>
                </BoxTitleButtons>
            </BoxGradient>
        </BoxBackground>
        <BoxInfo>
            <Box>
                <BoxNumbers>
                    <TypographyPoints>{Math.round(info.vote_average * 10) / 10} points</TypographyPoints>
                    <TypographyInfo>{year.getFullYear()}</TypographyInfo>
                    {info.number_of_seasons && 
                        <TypographyInfo>{info.number_of_seasons} season{info.number_of_seasons !== 1 ? "s" : ""}</TypographyInfo>
                    }
                    {info.runtime && 
                        <TypographyInfo>{runtime}</TypographyInfo>
                    }
                </BoxNumbers>
                <TypographyOverview>{info.overview}</TypographyOverview>
                <TypographyGenres>Genres: <span style={{color: "#FFF"}}>{genres.join(', ')}</span></TypographyGenres>
            </Box>
        </BoxInfo>
    </Box> : <></>)
};

export default MovieSeries;