import React from "react";
import './FeaturedMovieCss.css';

const FeaturedMovie = ({item}) => {

    let description = item.overview;
    if(description.length > 250) {
        description = description.substring(0,250)+'...'
    }

    let media_type = item.first_air_date ? "tv" : 'movie';
    console.log(item)
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a href={`${item.homepage}`} className="featured--watchbutton">► Play</a>
                        <a href={`/info/${media_type}/${item.id}`} className="featured--moreinfobutton">
                            🛈 More Info
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default FeaturedMovie;