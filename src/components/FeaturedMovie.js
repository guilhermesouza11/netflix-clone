import React from 'react';
import './FeaturedMovie.css';

 export default({item}) => {
  
  console.log(item)
  
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if(description.length > 200){
    description = description.substring(0, 200) + '...';
  }

  return(
    <section className="featured" style={{
      background:'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featuredVerticalFade">
        <div className="featuredHorizontalFade">
          <div className="featuredName">{item.original_name}</div>
          <div className="featuredInfo">
            <div className="featuredPoints">{item.vote_average} Pontos</div>
            <div className="featuredYear">{firstDate.getFullYear()}</div>
            <div className="featuredSeason">{item.number_of_seasons} Temporada{item.number !== 1 ? 's' : ''}</div>
          </div>
          <div className="featuredDescription">{description}</div>
          <div className="featuredButtons">
            <a href={`/watch/${item.id}`} className="featuredWatchButton">► Assistir</a>
            <a href={`/list/add/${item.id}`} className="featuredMyListButton">+ Minha Lista</a>
          </div>
          <div className="featuredFGenres"><strong>Gêneros:</strong> {genres.join(', ')}</div>  
      </div>
      </div>
    </section>
  );
 }