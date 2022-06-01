import React, {useRef, useState, useEffect} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleArrowRight, faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons"

function TopSeries() {

  const [topSeries, SetTopSeries] = useState([]);

  const GetTopSeries = async (type, subType) => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/${type}/1/${subType}`)
      .then(res => res.json());

      SetTopSeries(temp.top.slice(0,25));
  }

  useEffect(() => {
    GetTopSeries("anime", "bypopularity")
  }, [])

  const slider = useRef(null);
  let tamaño = 0;
  const siguiente = () => {
    if (slider.current.children.length > 0) {
      if (tamaño >= 3760) {
        slider.current.style.transition = `500ms ease-out all`;
        tamaño = 0;
        slider.current.style.transform = `translateX(-${tamaño}px)`;
      } else if (tamaño >= 0) {
        tamaño += 1880;
        slider.current.style.transition = `300ms linear all`;
        slider.current.style.transform = `translateX(-${tamaño}px)`;
      }
    }
  }

  const anterior = () => {
    if (tamaño > 0) {
      slider.current.style.transition = `1000ms ease-out all`;
      tamaño -= 1880;
      slider.current.style.transform = `translateX(-${tamaño}px)`;
    }
  }

return (
  <div>
    <div className='buttons-container'>
          <ul className="top-list">
              <li><a href=' ' onClick={()=> GetTopSeries("anime", "bypopularity")}>Top Animes</a></li>
              <li><a href=' ' onClick={()=> GetTopSeries("manga", "bypopularity")}>Top Mangas</a></li>
              <li><a href=' ' onClick={()=> GetTopSeries("anime", "movie")}>Top Peliculas</a></li>
          </ul>
    <div className='buttons-container'>
      <div className='buttons'>
        <button onClick={anterior}><FontAwesomeIcon icon={faCircleArrowLeft}/></button>
        <button onClick={siguiente}><FontAwesomeIcon icon={faCircleArrowRight}/></button>
      </div>
    </div>
      </div>
    <div className='top-list'>
      <div className='anime-card-container' ref={slider}>
          {topSeries.map(anime => (
            <article key={anime.mal_id} className='anime-card'>
              <a  href={anime.url}
                  target="_blank" 
                  rel="noreferrer">
                  <figure>
                      <img 
                          src={anime.image_url} 
                          alt="Anime" />
                  </figure>
                  <h3>{ anime.title }</h3>
              </a>
            </article>
          ))}   
      </div>
    </div>
  </div>
    )
  }

export default TopSeries