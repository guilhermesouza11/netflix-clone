import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie.js';
import Header from './components/Header.js';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  // Essa função tem como objetivo executar o codigo dentro de seu escopo assim que a pagina é carregada.
  useEffect(() => {
    const loadAll = async () => {

      // Pegando a lista com todos os filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      //Pegando o Featured, filme/serie em destaquei
      let originals = list.filter(i => i.slug == 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListiner = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListiner);

    return () => {
      window.removeEventListener('scroll', scrollListiner);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito pelo estudante Guilherme Souza <br/>
        Direitos de imagem para Netflix<br/>
        Dados coletados do site Themoviedb.org
      </footer>
      {movieList <= 0 && 
        <div className="loading">
          <img src="https://media.filmelier.com/news/br/2020/03/netflix-loading.gif" alt="Carregando" />
        </div>
      }
    </div>
  );
}