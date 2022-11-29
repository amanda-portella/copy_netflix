import React, { useEffect, useState } from "react";
import { getHomeList, getMovieInfo } from '../../Tmdb';

import './HomeCss.css';

import Header from "../../components/Header";
import FeaturedMovie from "../../components/FeaturedMovies";
import MovieRow from '../../components/MovieRow';

function Home() {

  const [ movieList, setMovieList ] = useState([]);
  const [ featuredData, setFeaturedData ] = useState(null);
  const [ blackHeader, setBlackHeader ] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList()
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let media_type;
      if(chosen.first_air_date) {
        media_type='tv'
      }
      let chosenInfo = await getMovieInfo(chosen.id, media_type)
      setFeaturedData(chosenInfo)
    }

    loadAll();
  },[]);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  },[])

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && <FeaturedMovie item={featuredData}/> }

      <section className="lists">
        {
          movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))
        }
      </section>

      <footer className="footer">
        Baseado no projeto desenvolvido em live pela B7Web<br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos do site Themoviedb.org<br/>
        Desenvolvido por <a href="https://github.com/amanda-portella">Amanda Portella Martins</a>
      </footer>

      {movieList.length <= 0 && 
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="Loading Movies" /> 
        </div>
      }
    </div>
  );
}

export default Home;
