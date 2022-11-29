import React from "react";
import './HeaderCss.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Header = ({black}) => {
    return (
        <header className={black ? 'black' : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Logo Netflix" />
                </a>
            </div>
            <div className="header--menu-container">
                <ul className="header--menu">
                    <li><a href="/" className="header--menu-item">Home</a></li>
                    <li><a href="/" className="header--menu-item">TV Shows</a></li>
                    <li><a href="/" className="header--menu-item">Movies</a></li>
                    <li><a href="/" className="header--menu-item">New & Popular</a></li>
                    <li><a href="/" className="header--menu-item">My List</a></li>
                    <li><a href="/" className="header--menu-item">Browse by Language</a></li>
                </ul>
            </div>
            <div className="header--icons-container">
                <ul className="header--icons">
                    <li className="header--icons-item"><SearchOutlinedIcon fontSize="large"/></li>
                    <li className="header--icons-item">Kids</li>
                    <li className="header--icons-item"><NotificationsOutlinedIcon fontSize="large"/></li>
                </ul>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png" alt="Usuário" /> 
                </a>
            </div>
        </header>
    )
};

export default Header; 